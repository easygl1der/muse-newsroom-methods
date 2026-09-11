# Aside / Recent News Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx` (`.recent`)
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-top.png`
- **Interaction model:** click-through links; sticky while article scrolls

## DOM Structure
`.sidebar-container` (`position: sticky`)
- `section#featured-news-2.widget.widget_recent_entries.featured_news`
  - `h2.widget-title.ui-meta1` → RECENT NEWS
  - list of article links + chevron

## Computed Styles

### Sidebar container
- width: 457.094px
- height: 563.672px
- x: 895.89 y: 502.19
- position: sticky
- fontSize: 16px
- color: rgb(52, 72, 84)

### Widget `#featured-news-2`
- width: 424.094px
- x: 928.89

### `h2.widget-title`
- text: RECENT NEWS (textTransform: uppercase)
- fontSize: 12px
- fontWeight: 800
- fontFamily: "Optimistic Text", Helvetica, Arial, NotoSans, …
- lineHeight: 18px
- letterSpacing: 0.24px
- color: rgb(28, 43, 51)
- margin: 0px 0px 50px -10px
- width: 434.094px
- height: 28px

### Item `<a>`
- fontSize: 20px
- fontWeight: 500
- lineHeight: 27px
- letterSpacing: 0.35px
- color: rgb(28, 43, 51)
- padding: 3px 40px 3px 0px
- display: block
- width: 385.422px

### Item `<li>`
- display: flex
- borderBottom: 1px solid rgb(203, 210, 217)
- padding: 0px 0px 26px
- margin: 0px 0px 26px (last item margin 0)

## Per-State Content
1. Inside Meta’s Infrastructure Lab — https://about.fb.com/news/2026/09/inside-metas-infrastructure-lab/
2. Closed-Loop Cooling Explained: The Plumbing Behind Meta’s AI — https://about.fb.com/news/2026/08/closed-loop-cooling-explained-the-plumbing-behind-metas-ai/
3. An Open Letter to TikTok and YouTube to Join Us in Supporting Teens — https://about.fb.com/news/2026/08/open-letter-to-tiktok-and-youtube-to-join-us-in-supporting-teens/
4. Our Agreement With Bipartisan Attorneys General: Calling on TikTok and YouTube to Join Us in Supporting Teens — https://about.fb.com/news/2026/08/agreement-with-state-attorneys-general-supporting-teens/

## States & Behaviors
- Hover color/decoration: no change recorded (`rgb(28, 43, 51)` both before and after force-hover).
- Sticky while left column scrolls.

## Responsive Behavior
- **1440:** right rail beside hero + takeaways.
- **390:** not visible in the top screenshot (stacks below).
