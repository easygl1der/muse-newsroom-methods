# Header Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx` (header block)
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-top.png`
- **Interaction model:** click / hover (mega-menus not rebuilt)

## DOM Structure
`header.site-header.uk-sticky`
- `.headernav` (88px) — Meta wordmark, `nav.main-navigation` (left + right menus)
- `.the-sub-nav.uk-container` (84px, padding 0 40px) — `nav.main-navigation.uk-flex-1` category list + `#header_search_form_sub` Search News

## Computed Styles (exact values from getComputedStyle)

### `header.site-header`
- width: 1440px
- height: 173px
- backgroundColor: rgb(255, 255, 255)
- borderBottom: 1px solid rgba(22, 22, 22, 0.16)
- position: relative
- zIndex: 999
- transition: background-color 0.25s ease-out
- fontFamily: "Optimistic Text", Helvetica, Arial, NotoSans, NotoSansJP, NotoSansKR, sans-serif
- fontSize: 16px
- lineHeight: 24px
- color: rgb(52, 72, 84)

### Row 1 `.headernav`
- height: 88px
- width: 1440px
- border-bottom (inline rule): 1px solid rgba(22, 22, 22, 0.16)

### Meta wordmark link
- fontSize: 16px
- fontWeight: 500
- letterSpacing: 1.5px
- color: rgb(28, 43, 51)
- rect: x=45 y=35 w=121 h=19.98
- SVG wordmark measured 89.23×17.98

### Left product menu `ul.primary-menu.uk-align-left`
- rect: x=169 y=3 w=427 h=84
- letterSpacing: 0.48px (on `li`)
- items: AI glasses, Meta Quest, Explore Meta

### Right product menu `ul.primary-menu.uk-align-right`
- rect: x=1088 y=3 w=253 h=84
- items: Support, Newsroom
- Newsroom `li`: x=1204 y=3 w=137 h=84

### Product / category `<a>`
- fontSize: 16px
- fontWeight: 400
- color: rgb(0, 0, 0)
- padding: 6px 10px 7px
- height: 37px

### Row 2 `.the-sub-nav`
- height: 84px
- padding: 0px 40px
- `ul.subnav-menu`: display: flex; height: 84px; letterSpacing: 0.48px on items
- Categories (verbatim): Technologies, Product News, Innovation, Public Policy, Youth Well-Being, Privacy, Security

### Search News `#header_search_form_sub`
- text: Search News
- rect: x=1169 y=86 w=191 h=90
- position: absolute
- top: -2px
- zIndex: 2
- transition: 0.3s ease-in-out
- collapsed inner pill styles were not stably measurable (autocomplete input intercepts hover)

## States & Behaviors
- **Mega-menus:** present in DOM; flyout rects were 0×0 at rest. Not rebuilt.
- **Search expand:** click/focus reveals autocomplete. Clone keeps a static “Search News” control.
- **Mobile 390:** hamburger left, wordmark centered, category row hidden.

## Assets
- Optimistic fonts from `https://about.fb.com/wp-content/themes/fbcorp/fonts/optimistic/*.woff2`

## Text Content (verbatim)
Meta · AI glasses · Meta Quest · Explore Meta · Support · Newsroom · Technologies · Product News · Innovation · Public Policy · Youth Well-Being · Privacy · Security · Search News

## Responsive Behavior
- **Desktop (1440px):** two rows, left/right product split, Search News on row 2.
- **Tablet (768px):** same chrome compressed.
- **Mobile (390px):** hamburger + centered Meta; no category row.
