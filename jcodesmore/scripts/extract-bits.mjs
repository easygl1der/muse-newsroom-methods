#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const TARGET =
  "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../docs/research/computed-bits.json");

async function main() {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto(TARGET, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(3500);
  const data = await page.evaluate(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        sel,
        classes: el.className?.toString?.(),
        text: (el.innerText || "").trim().slice(0, 80),
        html: el.outerHTML.slice(0, 400),
        rect: { x: r.x, y: r.y, w: r.width, h: r.height },
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        height: s.height,
        width: s.width,
        border: s.border,
        borderRadius: s.borderRadius,
        display: s.display,
        alignItems: s.alignItems,
        justifyContent: s.justifyContent,
        gap: s.gap,
        textTransform: s.textTransform,
      };
    };
    const fonts = [...document.querySelectorAll('link[rel*="font"], style, link[href*="font"]')]
      .map((el) => el.href || (el.textContent || "").slice(0, 200))
      .slice(0, 20);
    const fontFaces = [...document.styleSheets]
      .flatMap((ss) => {
        try {
          return [...ss.cssRules];
        } catch {
          return [];
        }
      })
      .filter((r) => r instanceof CSSFontFaceRule)
      .slice(0, 30)
      .map((r) => r.cssText.slice(0, 300));
    const logos = [...document.querySelectorAll("header img, header svg, header .custom-logo, header a[href*='about.fb'] img")].map((el) => ({
      tag: el.tagName,
      src: el.src || el.getAttribute("src"),
      className: el.className?.toString?.(),
      w: el.getBoundingClientRect().width,
      h: el.getBoundingClientRect().height,
    }));
    const subnavLinks = [...document.querySelectorAll(".subnav-menu > li > a")].map((a) => {
      const s = getComputedStyle(a);
      return {
        text: a.innerText.trim(),
        href: a.href,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        padding: s.padding,
        height: s.height,
      };
    });
    const recentLis = [...document.querySelectorAll("#featured-news-2 li, .featured_news li")].map((li) => {
      const s = getComputedStyle(li);
      return {
        text: li.innerText.trim().slice(0, 80),
        borderBottom: s.borderBottom,
        padding: s.padding,
        margin: s.margin,
        display: s.display,
      };
    });
    const relatedCards = [...document.querySelectorAll(".related-news article, .related_news li, .related-posts li, .widget_related")].slice(0, 6).map((el) => ({
      text: el.innerText.trim().slice(0, 160),
      classes: el.className,
    }));
    return {
      searchLabel: pick(".search-label"),
      searchForm: pick("#header_search_form_sub"),
      searchContainer: pick(".header-search-input-container"),
      searchToggle: pick(".search-toggle, .header-search-toggle, button[aria-label*='Search']"),
      listenBtn: pick(".speechify-btn"),
      listenIcon: pick(".speechify-icon"),
      logoLink: pick("header .custom-logo-link, header a.navbar-brand, header a[href='https://about.fb.com/']"),
      fonts,
      fontFaces,
      logos,
      subnavLinks,
      recentLis,
      relatedCards,
      cookie: pick("#GDPRConsentBar"),
    };
  });
  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log("wrote", OUT);
  await browser.close();
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
