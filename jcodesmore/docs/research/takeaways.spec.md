# Takeaways Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx` (`.takeaways`)
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-top.png`
- **Interaction model:** static

## DOM Structure
`.highlights-container`
- `h2.highlights-title.news-label.label-line.label-meta.ui-heading1` → Takeaways
- `ul` / `li` bullets

## Computed Styles

### Container `.highlights-container`
- fontSize: 16px
- color: rgb(52, 72, 84)
- padding: 0px 112px 0px 0px
- margin: 0px 0px 40px
- width: 808.891px
- height: 511px
- maxWidth: 1350px
- overflow: hidden
- x: 87 y: 987.19

### Title `.highlights-title`
- fontSize: 32px
- fontWeight: 500
- fontFamily: "Optimistic Display", Helvetica, Arial, NotoSans, …
- lineHeight: 43px
- letterSpacing: 0.256px
- color: rgb(28, 43, 51)
- padding: 0px 0px 3px
- margin: 0px 0px 6px
- width: 168.312px
- height: 47px
- borderBottom: 1px solid rgb(24, 119, 242)
- ::before / ::after: content none (underline is the border, not a pseudo)

### Item `li`
- fontSize: 18px
- fontWeight: 400
- fontFamily: "Optimistic Text", Helvetica, Arial, …
- lineHeight: 27px
- letterSpacing: 0.36px
- color: rgb(28, 43, 51)
- padding: 16px 0px 0px 5px
- width: 644.891px
- display: list-item

## Text Content (verbatim)
- Muse is a personal AI agent. It doesn’t just answer questions, it actually does the work. It helps people stay on top of things, takes tasks and projects off their plate, and turns long-term goals into action plans.
- Meta built Muse from the ground up to be a safe, secure, private, and widely available personal AI agent.
- Muse runs on Muse Secure VM, a dedicated secure computer with its own browser, and can work on a person’s behalf across the apps they use daily, learning from conversations, reflecting on what matters to them, and getting sharper along the way.
- Each person stays in control of their Muse and decides how much access it gets.
- For a deeper look at how Muse was designed and how safety, security, and privacy were built into it, read How We Built Safety Into Muse and How We Designed Muse.

## States & Behaviors
- N/A (static). Links in the fifth bullet go to http://security.muse.ai and http://introducing.muse.ai (verified from `/workspace/src/lib/content.ts` + live copy).

## Responsive Behavior
- **1440:** sits in the 809px article column under the hero, beside the rail.
- **390:** full width under the hero.
