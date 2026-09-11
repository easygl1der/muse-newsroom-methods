#!/usr/bin/env node
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "../docs/design-references/about-fb-com/muse");

async function main() {
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto("http://127.0.0.1:43211/", { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(2000);
  const checklist = await page.evaluate(() => {
    const headerRows = document.querySelectorAll(".headernav, .subnav");
    const listen = document.querySelector(".listen-btn")?.textContent?.trim();
    const meta = document.querySelector(".news-label")?.textContent?.trim();
    const recent = document.querySelector(".recent h2")?.textContent?.trim();
    const takeaways = getComputedStyle(document.querySelector(".highlights-title"));
    const layout = getComputedStyle(document.querySelector(".layout"));
    return {
      headerRowCount: headerRows.length,
      searchNews: !!document.querySelector(".search-news"),
      listen,
      meta,
      recent,
      takeawaysBorder: takeaways.borderBottom,
      takeawaysSize: takeaways.fontSize,
      layoutCols: layout.gridTemplateColumns,
      footerCols: document.querySelectorAll(".footer-grid > div").length,
      heroVideo: document.querySelector(".hero video")?.getAttribute("src"),
      title: document.querySelector("h1")?.textContent?.trim(),
    };
  });
  await page.screenshot({ path: join(OUT, "clone-1440-top.png"), fullPage: false });
  await page.screenshot({ path: join(OUT, "clone-1440-full.png"), fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: join(OUT, "clone-390-top.png"), fullPage: false });
  console.log(JSON.stringify(checklist, null, 2));
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
