#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const TARGET =
  "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE = join(HERE, "../../evidence");
const RESEARCH = join(HERE, "../docs/research");
const REFS = join(HERE, "../docs/design-references");

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
  "background",
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
  "maxHeight",
  "minHeight",
  "display",
  "flexDirection",
  "justifyContent",
  "alignItems",
  "gap",
  "gridTemplateColumns",
  "gridTemplateRows",
  "borderRadius",
  "border",
  "borderTop",
  "borderBottom",
  "borderLeft",
  "borderRight",
  "boxShadow",
  "overflow",
  "overflowX",
  "overflowY",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
  "opacity",
  "transform",
  "transition",
  "cursor",
  "objectFit",
  "objectPosition",
  "mixBlendMode",
  "filter",
  "backdropFilter",
  "whiteSpace",
  "textOverflow",
  "WebkitLineClamp",
];

async function main() {
  mkdirSync(join(EVIDENCE, "screenshots"), { recursive: true });
  mkdirSync(join(REFS, "about-fb-com", "muse"), { recursive: true });
  mkdirSync(RESEARCH, { recursive: true });

  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  page.setDefaultTimeout(90000);
  await page.goto(TARGET, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(5000);

  const dump = await page.evaluate((props) => {
    function extractStyles(element) {
      const cs = getComputedStyle(element);
      const styles = {};
      for (const p of props) {
        const v = cs[p];
        if (
          v &&
          v !== "none" &&
          v !== "normal" &&
          v !== "auto" &&
          v !== "0px" &&
          v !== "rgba(0, 0, 0, 0)" &&
          v !== "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"
        ) {
          styles[p] = v;
        }
      }
      return styles;
    }
    function walk(element, depth, maxDepth = 4) {
      if (!element || depth > maxDepth) return null;
      const children = [...element.children];
      return {
        tag: element.tagName.toLowerCase(),
        id: element.id || null,
        classes: (element.className?.toString() || "").split(" ").slice(0, 8).join(" "),
        text:
          element.childNodes.length === 1 && element.childNodes[0].nodeType === 3
            ? element.textContent.trim().slice(0, 220)
            : (element.innerText || "").trim().slice(0, 200),
        rect: (() => {
          const r = element.getBoundingClientRect();
          return { x: r.x, y: r.y, w: r.width, h: r.height };
        })(),
        styles: extractStyles(element),
        childCount: children.length,
        children: children
          .slice(0, 24)
          .map((c) => walk(c, depth + 1, maxDepth))
          .filter(Boolean),
      };
    }
    const pick = (sel, maxDepth = 4) => {
      const el = document.querySelector(sel);
      return el ? walk(el, 0, maxDepth) : { error: `missing ${sel}` };
    };
    const pickAll = (sel, limit = 8, maxDepth = 3) =>
      [...document.querySelectorAll(sel)].slice(0, limit).map((el) => walk(el, 0, maxDepth));

    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      const t = n.textContent.replace(/\s+/g, " ").trim();
      if (t.length > 1) {
        const el = n.parentElement;
        if (!el) continue;
        textNodes.push({
          text: t.slice(0, 240),
          tag: el.tagName.toLowerCase(),
          classes: (el.className?.toString() || "").split(" ").slice(0, 5).join(" "),
          styles: extractStyles(el),
        });
      }
    }

    return {
      title: document.title,
      url: location.href,
      fonts: [
        ...new Set(
          [...document.querySelectorAll("*")]
            .slice(0, 400)
            .map((el) => getComputedStyle(el).fontFamily),
        ),
      ],
      header: pick("header") || pick("[class*='header']") || pick("nav"),
      navs: pickAll("nav", 6, 4),
      article: pick("article") || pick("main"),
      aside: pick("aside") || pick("[class*='sidebar']") || pick("[class*='recent']"),
      footer: pick("footer", 5),
      headings: [...document.querySelectorAll("h1,h2,h3")].slice(0, 24).map((el) => ({
        tag: el.tagName,
        text: el.textContent.trim().slice(0, 200),
        styles: extractStyles(el),
        rect: el.getBoundingClientRect().toJSON(),
      })),
      videos: [...document.querySelectorAll("video")].map((v) => ({
        src: v.currentSrc || v.src,
        poster: v.poster,
        autoplay: v.autoplay,
        loop: v.loop,
        muted: v.muted,
        styles: extractStyles(v),
      })),
      images: [...document.querySelectorAll("img")]
        .slice(0, 40)
        .map((img) => ({
          src: img.src || img.currentSrc,
          alt: img.alt,
          width: img.naturalWidth,
          height: img.naturalHeight,
          styles: extractStyles(img),
        })),
      links: [...document.querySelectorAll("a")]
        .slice(0, 120)
        .map((a) => ({
          text: (a.innerText || "").trim().slice(0, 80),
          href: a.href,
          styles: extractStyles(a),
        })),
      body: {
        styles: extractStyles(document.body),
        htmlBg: getComputedStyle(document.documentElement).backgroundColor,
        width: document.documentElement.clientWidth,
      },
      textNodes: textNodes.slice(0, 220),
    };
  }, PROPS);

  const deep = await page.evaluate((props) => {
    function extractStyles(element) {
      const cs = getComputedStyle(element);
      const styles = {};
      for (const p of props) {
        const v = cs[p];
        if (
          v &&
          v !== "none" &&
          v !== "normal" &&
          v !== "auto" &&
          v !== "0px" &&
          v !== "rgba(0, 0, 0, 0)"
        ) {
          styles[p] = v;
        }
      }
      return styles;
    }
    function findByText(re) {
      const all = [...document.querySelectorAll("h1,h2,h3,h4,p,span,a,button,div,li")];
      return all.find((el) => re.test((el.innerText || "").trim()) && (el.innerText || "").trim().length < 80);
    }
    function box(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        classes: (el.className?.toString() || "").split(" ").slice(0, 8).join(" "),
        text: (el.innerText || "").trim().slice(0, 240),
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        styles: extractStyles(el),
      };
    }

    const takeawaysHeading = findByText(/^takeaways$/i);
    const listen = findByText(/listen to article/i);
    const recent = findByText(/^recent news$/i);
    const metaWord = findByText(/^meta$/i);
    const searchNews = findByText(/search news/i);
    const newsroom = findByText(/^newsroom$/i);

    return {
      takeawaysHeading: box(takeawaysHeading),
      takeawaysSection: box(takeawaysHeading?.closest("section,div,aside") || takeawaysHeading),
      listen: box(listen),
      recent: box(recent),
      recentAside: box(recent?.closest("aside,section,div") || recent),
      metaWord: box(metaWord),
      searchNews: box(searchNews),
      newsroom: box(newsroom),
      sticky: [...document.querySelectorAll("*")]
        .filter((el) => ["sticky", "fixed"].includes(getComputedStyle(el).position))
        .slice(0, 20)
        .map(box),
      headerEls: [...document.querySelectorAll("header, [role='banner'], .site-header, #header")].map(box),
    };
  }, PROPS);

  writeFileSync(join(EVIDENCE, "jcodesmore-computed.json"), JSON.stringify(dump, null, 2));
  writeFileSync(join(RESEARCH, "computed-deep.json"), JSON.stringify(deep, null, 2));

  await page.screenshot({
    path: join(EVIDENCE, "screenshots/original-1440-top.png"),
    fullPage: false,
  });
  await page.screenshot({
    path: join(EVIDENCE, "screenshots/original-1440-full.png"),
    fullPage: true,
  });
  await page.screenshot({
    path: join(REFS, "about-fb-com/muse/original-1440-top.png"),
    fullPage: false,
  });
  await page.screenshot({
    path: join(REFS, "about-fb-com/muse/original-1440-full.png"),
    fullPage: true,
  });

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: join(REFS, "about-fb-com/muse/original-768-top.png"),
    fullPage: false,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: join(EVIDENCE, "screenshots/original-390-top.png"),
    fullPage: false,
  });
  await page.screenshot({
    path: join(REFS, "about-fb-com/muse/original-390-top.png"),
    fullPage: false,
  });

  await browser.close();
  console.log("wrote evidence/jcodesmore-computed.json and docs/research/computed-deep.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
