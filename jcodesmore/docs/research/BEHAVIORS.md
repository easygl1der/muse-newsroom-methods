# Behaviors — Muse Newsroom article

All observations from Playwright at 1440 / 768 / 390.

## Scroll

- Header does not shrink in the captured session (`position: relative` on `header.site-header`; class `uk-sticky` present but no height change recorded at scroll 0).
- Recent News `.sidebar-container` is `position: sticky` and stays beside the article while the left column scrolls.
- No Lenis / Locomotive (no `.lenis` class). Native document scroll.
- Cookie bar stays fixed to the viewport bottom.

## Click

- Product nav items open mega-menus (AI glasses, Meta Quest, Explore Meta, Support). Not rebuilt — dump children had 0×0 rects for flyout panels.
- Search News expands an autocomplete field (`.header-search-input-container` intercepts pointer events). Collapsed label text is “Search News”.
- LISTEN TO ARTICLE (`.speechify-btn`) toggles ElevenLabs audio (`elevenlabs-50106-1788888978.mp3`). Idle label is the literal string `LISTEN TO ARTICLE`.
- Hero video uses MediaElement.js (`.mejs-container`). Click play / scrub. Not autoplay (`autoplay: false`).
- Mixed-media carousel (`.fbcorp-mixed-media-carousel.has-video-slide`) cycles FieldTrip / Japan / Relationships videos (autoplay muted). Shopping video is a separate loop (`autoplay: true`, `loop: true`).
- Cookie bar is dismissed by navigating / clicking through on the live site.

## Hover

- Recent News first link hover capture: color stayed `rgb(28, 43, 51)` (no decoration change recorded with `force` hover).
- Search News hover could not be captured — the autocomplete input intercepts pointer events.
- Footer links `cursor: pointer`, `transition: 0.25s ease-out`.

## Responsive

- **1440:** two header rows, two-column article + rail.
- **768:** category row still present in screenshot pass; rail begins to stack (not fully re-measured).
- **390:** hamburger + centered wordmark; no category row; listen + title stack; cookie bar covers lower hero.

## Interaction model by section

| Section | Model |
|---|---|
| Header | hover/click mega-menu + search expand |
| META / title / date | static |
| Listen | click toggle audio |
| Hero | click MediaElement |
| Takeaways | static |
| Recent News | click-through links; sticky scroll |
| Carousel | click / autoplay muted videos |
| Footer | click links |
| Cookie | click dismiss |
