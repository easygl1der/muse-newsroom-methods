# Article Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx`
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-full.png`
- **Interaction model:** static + listen click + in-article media

## DOM Structure
Above `<article>`:
- Back to Newsroom
- `.news-label.label-line.label-meta` → META
- `h1` title
- date + `.speechify-player` LISTEN TO ARTICLE

`<article>` `.entry-content` (808.891px at x=87): paragraphs, h2s, lists, videos.

## Computed Styles

### Back to Newsroom
- fontSize: 12px
- fontWeight: 400
- lineHeight: 18px
- color: rgb(0, 0, 0)
- href: https://about.fb.com/news

### META kicker `.news-label.label-line.label-meta`
- fontSize: 12px
- fontWeight: 600
- lineHeight: 18px
- letterSpacing: 0.72px
- color: rgb(28, 43, 51)
- textTransform: uppercase
- padding: 0px 0px 3px
- margin: 0px 0px 8px
- display: inline-block
- borderBottom: 2px solid rgb(24, 119, 242)
- width: 37.8906px
- height: 23px

### H1
- fontSize: 40px
- fontWeight: 500
- fontFamily: "Optimistic Display", Helvetica, Arial, NotoSans, NotoSansJP, NotoSansKR, sans-serif
- lineHeight: 50px
- letterSpacing: 2.2px
- color: rgb(28, 43, 51)
- margin: 0px 0px 20px -5px
- width: 944.5px
- height: 100px

### Date
- text: September 8, 2026
- fontSize: 16px
- fontWeight: 300
- lineHeight: 18px
- letterSpacing: 0.3px
- color: rgb(103, 120, 138)

### LISTEN TO ARTICLE `.speechify-btn`
- fontSize: 12px
- fontWeight: 400
- color: rgba(0, 0, 0, 0.8)
- backgroundColor: rgb(255, 255, 255)
- padding: 9.6px 14.4px
- height: 42.1875px
- width: 234.547px
- border: 1px solid rgb(255, 255, 255)
- borderRadius: 9999px
- display: flex
- alignItems: center
- gap: 10px
- literal text: LISTEN TO ARTICLE (already uppercase; textTransform: none)
- waveform stroke: #0064E0
- rect: x=663.95 y=450

### Body `p`
- fontSize: 18px
- fontWeight: 400
- fontFamily: "Optimistic Text Light", Helvetica, Arial, NotoSans, NotoSansJP, NotoSansKR, sans-serif
- lineHeight: 27px
- color: rgb(28, 43, 51)
- margin: 0px 0px 27px (first); 20px 0px 27px (later)
- width: 728px

### Section `h2` (How It Works / Built to be Private… / Looking Ahead)
- fontSize: 24px
- fontWeight: 400
- fontFamily: "Optimistic Display", NotoSans, NotoSansJP, NotoSansKR, sans-serif
- lineHeight: 31.2px
- color: rgb(103, 123, 140)
- margin: 40px 0px 20px

### Security `li`
- fontSize: 16px
- fontWeight: 400
- fontFamily: "Optimistic Text Light", …
- lineHeight: 24px
- color: rgb(28, 43, 51)
- margin: 0px 0px 16px 17.96px

### `<article>` box
- width: 808.891px
- x: 87
- margin: 0px 0px 24px

## States & Behaviors
- Listen: click toggles audio `https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3`

## Text Content (verbatim)
See `docs/research/live-copy.json` body array. Title: Introducing Muse: The World’s First Personal AI Agent Built for Everyone

## Responsive Behavior
- **1440:** title 944.5px wide; body 728–809px; listen right-aligned on the date row.
- **390:** title stacks; listen left-aligned under the date; rail gone.
