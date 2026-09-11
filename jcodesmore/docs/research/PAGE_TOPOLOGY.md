# Page topology — about.fb.com Muse Newsroom article

Source: Playwright `getComputedStyle()` dumps at 1440×1100.

- **URL:** https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/
- **Title:** Introducing Muse: The World’s First Personal AI Agent Built for Everyone
- **Body height:** 6598.19px
- **Interaction model:** mostly static article; header mega-menus click/hover; hero MediaElement click; mixed-media carousel click; cookie bar dismiss.

## Visual order (desktop 1440)

1. **Cookie locale prompt** (`aside.locale-prompt`) — collapsed, 0×0 in this session.
2. **Header** (`header.site-header.uk-sticky`) — 1440×173, `z-index: 999`, `border-bottom: 1px solid rgba(22, 22, 22, 0.16)`.
   - Row 1 `.headernav` — 1440×88: Meta wordmark + product nav (left: AI glasses, Meta Quest, Explore Meta; right: Support, Newsroom) + search icon.
   - Row 2 `.the-sub-nav` — 1440×84, `padding: 0 40px`: Technologies … Security + Search News.
3. **Article chrome** (above `<article>`):
   - Back to Newsroom
   - META kicker
   - H1
   - Date (left) + LISTEN TO ARTICLE (right, y≈450)
4. **Two-column body** starting y≈501:
   - Left column ~808.89px at x=87: hero video (808.89×455, radius 24px) → Takeaways → article prose + media carousel
   - Right rail `.sidebar-container` 457.09px at x=895.89, `position: sticky`: Recent News widget 424.09px
5. **Related News** + Follow Meta Newsroom / Press Resources
6. **Footer** (`footer.site-footer`) — y=5734, 1440×864, `margin-top: 80px`, `border-top: 1px solid rgb(222, 227, 233)`
7. **Cookie bar** `#GDPRConsentBar` — fixed bottom, 1440×82, `background: rgba(54, 71, 85, 0.93)`

## Column math (extracted)

- Article / video width: 808.891px
- Recent News: 424.094px
- 808.891 / (808.891 + 424.094) = **65.6%** article / 34.4% rail

## Mobile 390

- Hamburger left, Meta wordmark centered; category row + Search News hidden.
- Recent News stacks below hero.
- Cookie bar overlays bottom.

## Sticky / overlays

- Header: `uk-sticky`, relative, z-index 999
- Sidebar: `position: sticky`
- Cookie bar: fixed bottom
