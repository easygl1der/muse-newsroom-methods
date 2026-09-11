# Perfect-Web-Clone arm — notes

Method followed: `pwc extract` → `pwc plan` → `pwc assemble` → `pwc section` for every planned name → author React from that evidence → `pwc assemble` again → `npm run build` / `npm run dev` on **43212** → `pwc fingerprints` / `pwc weight` / `pwc score`.

## source_id

`about.fb.com-1789012982-1fc754`

Capture integrity: **passed** (`ok: true`, `status: passed`).

A prior extract (`about.fb.com-1789012865-1fc754`) failed `critical_region_collapsed` because two regions shared the fingerprint `heading:Introducing Muse…` (5362px article shell vs 100px `h1`). A local PWC checkout was patched to disambiguate heading fingerprints by tag+selector before the passing extract. That is a harness workaround, not invented page content.

## Section list (8)

| # | name | component | authored from |
|---|---|---|---|
| 0 | header | `HeaderSection` | `pwc section` HTML + `#masthead` / `#site-navigation` |
| 1 | header-2 | `Header2Section` | Newsroom category bar + Search News |
| 2 | section-2 | `Section2Section` | Back to Newsroom link (plan also captured a `<style>` chunk) |
| 3 | section-3 | `Section3Section` | META label, H1, date, LISTEN player |
| 4 | section-4 | `Section4Section` | article + Recent News rail, takeaways, hero video, mixed-media carousel |
| 5 | section-5 | `Section5Section` | Related News heading |
| 6 | section-6 | `Section6Section` | two related cards |
| 7 | footer | `FooterSection` | `#colophon` columns from capture |

All 16 `data-pwc-critical` anchors were present in the live preview. Carousel hooks `interaction-1`…`interaction-6` are wired; next-arrow replay changed the active slide.

## App / review URL

- App path: `perfect-web-clone/`
- Dev URL: `http://127.0.0.1:43212/`

## Scores

| gate | result |
|---|---|
| capture integrity | pass |
| critical structure (DOM anchors) | pass |
| carousel replay | pass (next changes active slide) |
| fingerprints | pass (`ok: true`, 0 hits) |
| weight | **fail** — `code_kb` 443.09 vs budget 120 |
| visual full-page SSIM | **fail** — **0.582** vs threshold 0.97 |
| visual top-of-page SSIM | **fail** — **0.684** vs 0.97 |

## Residuals

1. **visual / full page** — expected SSIM ≥ 0.97, measured 0.582. Clone document height 6308 vs source 7031.
2. **visual / viewport top** — measured 0.684. Search/Security spacing and hero MediaElement chrome differ.
3. **weight** — gzipped code 443 KB vs 120 KB budget because header/footer mega-menu JSX is large.
4. **hero chrome** — capture includes MediaElement layers; clone uses a functional `<video controls>` plus leftover MEJS markup. Native controls are visible. Not pixel-matched MEJS.
5. **mega menus** — markup and real hrefs from capture are in the DOM; desktop open state is CSS `:hover` only.
6. **theme.css + converted class names** — section JSX keeps captured class names so `public/theme.css` can apply. This is the PWC html_to_jsx path, not a from-scratch token rebuild.
7. **First extract** failed integrity (fingerprint collision) until a local PWC patch. Passing extract is the one above.

## Media

Local 40MB+ mp4/mp3 binaries are **not** committed. Hero, carousel, shopping, and LISTEN audio use remote about.fb.com URLs (same files as Method A `content.ts`). Optional local `/assets/videos/…` sources remain as secondary fallbacks.

## Guessed vs extracted

- **Extracted:** all visible copy, hrefs, nav items, takeaways, article body, Recent News titles, related cards, footer columns, video/audio URLs.
- **Not guessed as new copy.** Geometry CSS (65/35 article+rail, META/LISTEN casing, takeaways underline `#1877F2`) was taken from capture + `theme.css`.
- **LISTEN / META casing** forced to all-caps to match the captured rest-state screenshot.

## Terminal status

**`failed_with_residuals`** (automatic gates) + **human visual winner** (2026-09-11)

Capture and planned structure exist. Visual and weight gates are red — not pixel-perfect. Human review still prefers this arm over JCodesMore for likeness to the live Newsroom page.
