# Footer Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx` (footer)
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-full.png`
- **Interaction model:** click links

## DOM Structure
`footer.site-footer`
- `.footer-section` with column titles + link lists
- Cookie bar `#GDPRConsentBar` is a sibling overlay, not inside footer

## Computed Styles

### `footer.site-footer`
- fontSize: 16px
- fontWeight: 400
- fontFamily: "Optimistic Text", Helvetica, Arial, …
- lineHeight: 24px
- color: rgb(34, 34, 34)
- margin: 80px 0px 0px
- width: 1440px
- height: 864px
- borderTop: 1px solid rgb(222, 227, 233)
- overflow: hidden
- transition: filter 0.3s ease-in-out

### Column titles (`h2`/`h3`/`h4` footer titles)
- fontSize: 16px
- fontWeight: 700
- fontFamily: "Optimistic Display", Helvetica, Arial, …
- lineHeight: 19px
- letterSpacing: 0.8px
- color: rgb(52, 72, 84)
- margin: 0px 0px 8px

### Column links
- fontSize: 16px
- fontWeight: 400
- lineHeight: 24px
- letterSpacing: 0.32px
- color: rgb(34, 34, 34)
- margin: 0px 0px 16px
- cursor: pointer
- transition: 0.25s ease-out

### Cookie bar `#GDPRConsentBar`
- width: 1440px
- height: 82px
- color: rgb(255, 255, 255)
- backgroundColor: rgba(54, 71, 85, 0.93)
- fontSize: 16px

## Text Content (verbatim columns)
1. Meta Store — Ray-Ban Meta glasses, Oakley Meta glasses, Meta Quest, Accessories, Apps and games, Meta Quest gift cards, Refurbished Meta Quest 3, Refurbished Meta Quest 3S, …
2. Store support and legal — Meta Help Center, Order status, Returns, Find a product demo, Authorized retailers, Legal, Terms of sale, Meta Quest safety center
3. Community — Creators, Developers, Businesses, Non-profits, VR for Good, Download SDKs, Made for Meta partner program
4. Our actions — Data and privacy, Responsible business practices, Elections
5. About us — About Meta, Careers, Media gallery, Brand resources, For investors, Newsroom
6. Site terms and policies — Community standards, Privacy policy, Terms, Cookie policy
7. App support — Shop Meta Quest, Refurbished Meta Quest 2, Forums, Referrals, …

Also present on the live page: Follow Meta Newsroom, Press Resources.

## States & Behaviors
- Link hover: 0.25s ease-out (color target not captured).

## Responsive Behavior
- **1440:** multi-column grid, ~316–336px title width in the dump.
- **390:** columns stack (not fully re-extracted).
