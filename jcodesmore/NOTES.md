# JCodesMore arm — notes

Method: Playwright walk of the live Newsroom page, `getComputedStyle()` dumps, section specs, then Next.js rebuild.

Dumps (shipped under `docs/research/` unless noted):

- computed-style walk (private research evidence, not in this gallery)
- `docs/research/computed-deep.json`
- `docs/research/computed-sections.json`
- `docs/research/computed-bits.json`
- `docs/research/live-copy.json`

The stock `evidence/extract-jcodesmore.mjs` throws `URL is not a constructor` because it binds `const URL = "https://..."`. It was not edited (work stayed under `jcodesmore/`). Extraction ran from `jcodesmore/scripts/extract-computed.mjs` instead.

## Extracted (from getComputedStyle / live evaluate)

- Two header rows: `header.site-header` **173px**; `.headernav` **88px**; `.the-sub-nav` **84px**, `padding: 0 40px`.
- Product bar split: left `AI glasses / Meta Quest / Explore Meta` (ul at x=169); right `Support / Newsroom` (ul at x=1088).
- Category bar: Technologies, Product News, Innovation, Public Policy, Youth Well-Being, Privacy, Security + “Search News”.
- Nav links: `16px / 400`, `padding: 6px 10px 7px`, `color: rgb(0, 0, 0)`, item `letter-spacing: 0.48px`.
- Body: Optimistic Text `16px / 24px`, `color: rgb(52, 72, 84)`, page bg `rgb(255, 255, 255)`.
- META kicker: `12px / 600 / 18px`, `letter-spacing: 0.72px`, `text-transform: uppercase`, `border-bottom: 2px solid rgb(24, 119, 242)`.
- H1: `40px / 500 / 50px`, Optimistic Display, `letter-spacing: 2.2px`, `color: rgb(28, 43, 51)`.
- Date: `September 8, 2026`, `16px / 300 / 18px`, `letter-spacing: 0.3px`, `color: rgb(103, 120, 138)`.
- LISTEN TO ARTICLE: literal uppercase in the DOM; `.speechify-btn` `12px`, `padding: 9.6px 14.4px`, `border-radius: 9999px`, `gap: 10px`, waveform `#0064E0`.
- Article column **808.891px** at x=87; Recent News **424.094px**; **65.6% / 34.4%** of the pair.
- Hero: sizzle mp4, `808.891 × 455`, `border-radius: 24px`, mejs bg `rgb(34, 34, 34)`.
- Takeaways title: `32px / 500 / 43px`, `letter-spacing: 0.256px`, **`border-bottom: 1px solid rgb(24, 119, 242)`** (no ::before/::after).
- Takeaways items: `18px / 27px`, `letter-spacing: 0.36px`.
- Body paragraphs: Optimistic Text Light `18px / 27px`, `color: rgb(28, 43, 51)`.
- Section h2s: `24px / 400 / 31.2px`, `color: rgb(103, 123, 140)`.
- Recent News title: `12px / 800 / uppercase / 0.24px`.
- Recent items: `20px / 500 / 27px / 0.35px`; `li` `border-bottom: 1px solid rgb(203, 210, 217)`, `padding-bottom: 26px`.
- Footer: `margin-top: 80px`, `border-top: 1px solid rgb(222, 227, 233)`; titles `16px / 700 / 0.8px`; links `16px / 400 / 0.32px`.
- Cookie bar: `rgba(54, 71, 85, 0.93)`, white type, 82px tall.
- Fonts hotlinked from about.fb.com `fbcorp/fonts/optimistic/*.woff2`.
- Copy, mp4s, recent-news titles/hrefs from the live page.

## Guessed / residual

- Search News **pill padding / radius**: the collapsed control is 191×90 at x=1169, but the inner pill’s padding was not stably measurable (autocomplete input intercepts hover). Clone uses a 42px-tall rounded pill.
- H1 `letter-spacing: 2.2px` is what `getComputedStyle(h1)` returned; it may include a speechify wrapper. Applied as extracted.
- Takeaways underline is **1px** in the dump. The research checklist said “thick”; the live computed border is 1px (META’s label-line is 2px). Clone uses 1px for Takeaways.
- Mega-menu flyouts existed in the tree with 0×0 rects. Not rebuilt.
- Hero chrome is a MediaElement-like overlay using extracted mejs colors (`rgba(255,255,255,0.33)` track, `rgb(0, 115, 170)` current), not the live mejs DOM.
- Carousel: three captured mp4s + dots only — no invented prev/next overlay.
- Footer hrefs are not all resolved; column **labels** match the live footer.
- Meta infinity+wordmark SVG is a reconstruction of the live SVG, not the inline source path.
- Mobile hamburger / centered logo follows the 390 screenshot, not a full mobile computed dump.
- Cookie “Close” control is not on the live bar (live dismisses by navigating).

## Failed

- Stock extractor `evidence/extract-jcodesmore.mjs` cannot run as written (`const URL` shadows the constructor).
- Search News hover styles: Playwright hover timed out / was intercepted.
- Related-news card layout was not in the depth-limited aside walk (`relatedCards: []`); cards use live titles + thumbs from the page / verified URLs.
- Optimistic Text ExtraBold/Medium files 404 if the theme uses different filenames — fallback is Helvetica/Arial from the computed stack.
- No pixelmatch gate in this skill. QA is side-by-side against `evidence/screenshots/`.
