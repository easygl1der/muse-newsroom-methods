#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const TARGET =
  "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";
const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "../docs/research/live-copy.json");

async function main() {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto(TARGET, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(4000);

  const data = await page.evaluate(() => {
    const cs = (el) => {
      const s = getComputedStyle(el);
      return {
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        fontFamily: s.fontFamily,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        textTransform: s.textTransform,
        textDecoration: s.textDecoration,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        width: s.width,
        height: s.height,
        display: s.display,
        borderBottom: s.borderBottom,
        borderRadius: s.borderRadius,
        border: s.border,
      };
    };
    const takeaways = [...document.querySelectorAll(".highlights-container li, .highlights-container p")]
      .map((el) => el.innerText.trim())
      .filter(Boolean);
    const recent = [...document.querySelectorAll("#featured-news-2 a, .featured_news li a")]
      .map((a) => ({ text: a.innerText.trim(), href: a.href, styles: cs(a) }))
      .filter((x) => x.text);
    const related = [...document.querySelectorAll(".related-news a, .related_news a, [class*='related'] a")]
      .map((a) => ({ text: a.innerText.trim(), href: a.href }))
      .filter((x) => x.text);
    const body = [...document.querySelectorAll("article .entry-content p, article .entry-content h2, article .entry-content li")]
      .map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: el.innerText.trim(),
        styles: cs(el),
      }))
      .filter((x) => x.text);
    const kicker = document.querySelector(".entry-category, .news-label, .post-category, a[rel='category']");
    const date = document.querySelector("time, .entry-date, .posted-on");
    const back = [...document.querySelectorAll("a")].find((a) => /back to newsroom/i.test(a.innerText));
    const listen = document.querySelector(".speechify-player, .elabs-player");
    const footerTitles = [...document.querySelectorAll("footer h2, footer h3, footer h4, footer .footer-col-title, footer .menu-title")]
      .map((el) => ({ text: el.innerText.trim(), styles: cs(el) }));
    const footerGroups = [...document.querySelectorAll("footer .footer-col, footer .menu, footer nav")].map((col) => ({
      title: (col.querySelector("h2,h3,h4,.footer-col-title") || {}).innerText || "",
      links: [...col.querySelectorAll("a")].map((a) => a.innerText.trim()).filter(Boolean),
      styles: cs(col),
    }));
    const videos = [...document.querySelectorAll("video")].map((v) => ({
      src: v.currentSrc || v.src,
      poster: v.poster,
      autoplay: v.autoplay,
      loop: v.loop,
      muted: v.muted,
      w: v.getBoundingClientRect().width,
      h: v.getBoundingClientRect().height,
      radius: getComputedStyle(v).borderRadius,
    }));
    const mejs = document.querySelector(".mejs__container, .mejs-container");
    const carousel = document.querySelector(".wp-block-gallery, .blocks-gallery, [class*='carousel'], .media-gallery");
    const allVideosParents = [...document.querySelectorAll("video")].map((v) => ({
      parent: v.parentElement?.className,
      grand: v.parentElement?.parentElement?.className,
      src: v.currentSrc,
    }));
    const headerLogo = document.querySelector("header .custom-logo-link, header a.logo, header .site-logo, header a[href='https://about.fb.com/']");
    const searchLabel = document.querySelector(".search-label");
    const searchBox = document.querySelector(".header-search-input-container, .site-search-container");
    const listenInner = listen
      ? {
          text: listen.innerText.trim(),
          html: listen.innerHTML.slice(0, 800),
          styles: cs(listen),
          children: [...listen.children].map((el) => ({
            tag: el.tagName,
            classes: el.className,
            text: el.innerText.trim().slice(0, 80),
            styles: cs(el),
          })),
        }
      : null;

    const titleRow = document.querySelector(".entry-header, .post-header, header.entry-header");
    const metaLabel = [...document.querySelectorAll(".entry-header *, .single-header *, .post-meta *")].find(
      (el) => (el.innerText || "").trim() === "META" || (el.innerText || "").trim() === "Meta",
    );

    return {
      title: document.title,
      h1: document.querySelector("h1")?.innerText.trim(),
      h1Styles: document.querySelector("h1") ? cs(document.querySelector("h1")) : null,
      takeaways,
      recent,
      related,
      body,
      kicker: kicker ? { text: kicker.innerText.trim(), href: kicker.href, styles: cs(kicker) } : null,
      date: date
        ? { text: date.innerText.trim(), datetime: date.getAttribute("datetime"), styles: cs(date) }
        : null,
      back: back ? { text: back.innerText.trim(), href: back.href, styles: cs(back) } : null,
      listenInner,
      footerTitles,
      footerGroups: footerGroups.filter((g) => g.links.length),
      videos,
      mejs: mejs
        ? { classes: mejs.className, w: mejs.getBoundingClientRect().width, h: mejs.getBoundingClientRect().height, styles: cs(mejs) }
        : null,
      carousel: carousel ? { classes: carousel.className, text: carousel.innerText.slice(0, 200) } : null,
      allVideosParents,
      headerLogo: headerLogo
        ? { href: headerLogo.href, html: headerLogo.innerHTML.slice(0, 400), styles: cs(headerLogo) }
        : null,
      searchLabel: searchLabel ? { text: searchLabel.innerText, styles: cs(searchLabel) } : null,
      searchBox: searchBox ? { classes: searchBox.className, styles: cs(searchBox), html: searchBox.innerHTML.slice(0, 500) } : null,
      titleRow: titleRow ? { classes: titleRow.className, text: titleRow.innerText.slice(0, 300), styles: cs(titleRow) } : null,
      metaLabel: metaLabel ? { tag: metaLabel.tagName, classes: metaLabel.className, text: metaLabel.innerText, styles: cs(metaLabel) } : null,
    };
  });

  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log("wrote", OUT, "body paras", data.body?.length, "takeaways", data.takeaways?.length);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
