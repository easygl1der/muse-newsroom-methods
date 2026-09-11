#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const TARGET =
  "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";
const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "../docs/research/computed-sections.json");

const PROPS = [
  "fontSize",
  "fontWeight",
  "fontFamily",
  "lineHeight",
  "letterSpacing",
  "color",
  "textTransform",
  "textDecoration",
  "backgroundColor",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "width",
  "height",
  "maxWidth",
  "minWidth",
  "display",
  "flexDirection",
  "justifyContent",
  "alignItems",
  "gap",
  "gridTemplateColumns",
  "borderRadius",
  "border",
  "borderBottom",
  "borderTop",
  "boxShadow",
  "overflow",
  "position",
  "top",
  "zIndex",
  "opacity",
  "transform",
  "transition",
  "cursor",
  "objectFit",
];

async function main() {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto(TARGET, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(5000);

  const data = await page.evaluate((props) => {
    function styles(el) {
      const cs = getComputedStyle(el);
      const o = {};
      for (const p of props) {
        const v = cs[p];
        if (
          v &&
          v !== "none" &&
          v !== "normal" &&
          v !== "auto" &&
          v !== "0px" &&
          v !== "rgba(0, 0, 0, 0)"
        )
          o[p] = v;
      }
      return o;
    }
    function pseudo(el, which) {
      const cs = getComputedStyle(el, which);
      return {
        content: cs.content,
        display: cs.display,
        width: cs.width,
        height: cs.height,
        backgroundColor: cs.backgroundColor,
        borderBottom: cs.borderBottom,
        border: cs.border,
        position: cs.position,
        bottom: cs.bottom,
        left: cs.left,
        right: cs.right,
        transform: cs.transform,
      };
    }
    function box(el, extra = {}) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        classes: (el.className?.toString() || "").split(" ").slice(0, 10).join(" "),
        text: (el.innerText || "").trim().slice(0, 400),
        href: el.href || null,
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        styles: styles(el),
        ...extra,
      };
    }
    function findText(re, maxLen = 120) {
      return [...document.querySelectorAll("a,button,span,div,p,h1,h2,h3,li,time")]
        .find((el) => {
          const t = (el.innerText || "").trim();
          return re.test(t) && t.length <= maxLen;
        });
    }

    const header = document.querySelector("header.site-header, header");
    const navs = [...document.querySelectorAll("header nav")];
    const headerLinks = [...(header?.querySelectorAll("a") || [])].slice(0, 40).map((a) => box(a));
    const searchNews = findText(/search news/i);
    const back = findText(/back to newsroom/i);
    const metaKicker = [...document.querySelectorAll("a,span,div,p")].find((el) => {
      const t = (el.innerText || "").trim();
      return t === "META" || t === "Meta";
    });
    const dateEl = findText(/september/i);
    const listenBtn = document.querySelector(".speechify-player, .elabs-player, [class*='listen']");
    const takeaways = document.querySelector(".highlights-title, .highlights-container");
    const takeawaysTitle = document.querySelector(".highlights-title");
    const takeawaysItems = [...document.querySelectorAll(".highlights-container li, .highlights-container p")].map((el) => box(el));
    const recent = document.querySelector("#featured-news-2, .featured_news, .widget_recent_entries");
    const recentItems = [...(recent?.querySelectorAll("li, a") || [])].slice(0, 16).map((el) => box(el));
    const article = document.querySelector("article") || document.querySelector("main");
    const articlePars = [...(article?.querySelectorAll("p") || [])].slice(0, 30).map((el) => box(el));
    const articleH2 = [...(article?.querySelectorAll("h2") || [])].map((el) => box(el));
    const footer = document.querySelector("footer");
    const footerCols = [...(footer?.querySelectorAll(".menu-column, .footer-col, nav, ul") || [])]
      .slice(0, 20)
      .map((el) => box(el));
    const footerHeadings = [...(footer?.querySelectorAll("h2,h3,h4,.menu-title") || [])].map((el) => box(el));
    const carousel = document.querySelector("[class*='carousel'], [class*='gallery'], [class*='slider']");
    const mejs = document.querySelector(".mejs-container, .mejs__container, [class*='mejs']");

    const layout = {
      article: box(article),
      contentWrap: box(document.querySelector(".entry-content, .post-content, .article-content, .news-body, main .uk-container, .content-area")),
      containers: [...document.querySelectorAll(".uk-container, .site-content, .single-post, .post-layout, [class*='content']")]
        .slice(0, 12)
        .map((el) => box(el)),
    };

    return {
      header: box(header),
      headerNavs: navs.map((n) => box(n)),
      headerLinks,
      searchNews: box(searchNews),
      searchNewsParent: box(searchNews?.parentElement),
      back: box(back),
      metaKicker: box(metaKicker),
      dateEl: box(dateEl),
      listen: box(listenBtn),
      listenInner: listenBtn ? [...listenBtn.querySelectorAll("*")].slice(0, 12).map((el) => box(el)) : [],
      takeaways: box(takeaways),
      takeawaysTitle: takeawaysTitle
        ? {
            ...box(takeawaysTitle),
            before: pseudo(takeawaysTitle, "::before"),
            after: pseudo(takeawaysTitle, "::after"),
          }
        : null,
      takeawaysItems,
      recent: box(recent),
      recentItems,
      articlePars,
      articleH2,
      layout,
      mejs: box(mejs),
      carousel: box(carousel),
      carouselChildren: carousel ? [...carousel.children].slice(0, 10).map((el) => box(el)) : [],
      footer: box(footer),
      footerHeadings,
      footerCols,
      footerLinks: [...(footer?.querySelectorAll("a") || [])].slice(0, 80).map((a) => ({
        text: (a.innerText || "").trim(),
        href: a.href,
        styles: styles(a),
      })),
      social: [...document.querySelectorAll("a[href*='facebook'],a[href*='instagram'],a[href*='twitter'],a[href*='x.com'],a[href*='linkedin']")]
        .slice(0, 20)
        .map((a) => box(a)),
    };
  }, PROPS);

  const hover = {};
  try {
    hover.searchBefore = await page.evaluate(() => {
      const el = document.querySelector(".search-label");
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        borderRadius: cs.borderRadius,
        padding: cs.padding,
        height: cs.height,
        width: cs.width,
      };
    });
    hover.searchPill = await page.evaluate(() => {
      const el = document.querySelector(
        ".header-search-input-container, .site-search-container .search-toggle, .search-label",
      );
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        classes: el.className,
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        border: cs.border,
        borderRadius: cs.borderRadius,
        padding: cs.padding,
      };
    });
    hover.recentBefore = await page.evaluate(() => {
      const el = document.querySelector("#featured-news-2 a, .featured_news a");
      if (!el) return null;
      const cs = getComputedStyle(el);
      return { color: cs.color, textDecoration: cs.textDecoration, fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight };
    });
    await page.locator("#featured-news-2 a, .featured_news a").first().hover({ force: true, timeout: 3000 });
    await page.waitForTimeout(200);
    hover.recentAfter = await page.evaluate(() => {
      const el = document.querySelector("#featured-news-2 a, .featured_news a");
      if (!el) return null;
      const cs = getComputedStyle(el);
      return { color: cs.color, textDecoration: cs.textDecoration };
    });
  } catch (err) {
    hover.error = String(err);
  }

  writeFileSync(OUT, JSON.stringify({ ...data, hover }, null, 2));
  console.log("wrote", OUT);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
