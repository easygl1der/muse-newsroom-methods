# Media Specification

## Overview
- **Target file:** `src/components/ClonePage.tsx` (hero + carousel)
- **Screenshot:** `docs/design-references/about-fb-com/muse/original-1440-top.png`
- **Interaction model:** click (hero MediaElement); time/autoplay (carousel videos)

## DOM Structure
- Hero: `.mejs-container.mejs-video` wrapping the sizzle `<video>`
- Carousel: `.fbcorp-mixed-media-carousel.has-video-slide` with FieldTrip / Japan / Relationships
- Separate shopping loop video in the body

## Computed Styles

### Hero `<video>` / `.mejs-container`
- src: https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_Sizzle-Video.mp4?_=1
- autoplay: false
- width: 808.891px
- height: 455px
- maxWidth: 100%
- borderRadius: 24px
- objectFit: contain
- mejs backgroundColor: rgb(34, 34, 34)
- mejs fontFamily: Helvetica, Arial, serif

### MediaElement chrome (extracted)
- `.mejs-time-total`: height 10px, backgroundColor rgba(255, 255, 255, 0.33), width 593.828px
- `.mejs-time-current`: backgroundColor rgb(0, 115, 170)
- `.mejs-time-loaded`: backgroundColor rgb(255, 255, 255)
- `.mejs-time-handle`: 8×8
- `.mejs-time-float`: 36×17, fontSize 10px, color rgb(17, 17, 17), background rgb(238, 238, 238), border 1px solid rgb(51, 51, 51)

### Carousel videos
| file | autoplay | loop | muted | size | radius |
|---|---|---|---|---|---|
| Muse_FieldTrip.mp4 | true | false | true | 658×573 | 24px |
| Muse_Japan.mp4 | true | false | true | 658×573 | 24px |
| Muse_Relationships.mp4 | true | false | true | 658×573 | 24px |
| Muse_Shopping.mp4 | true | true | true | 735.28×640.29 | 24px |

## States & Behaviors
- Hero: user-initiated play; custom mejs bar over dark rounded frame.
- Carousel: muted autoplay slides. Clone does not invent extra toolbars — native `<video controls>` plus a slide index.
- CORS on about.fb.com mp4s is `*` (hotlink OK).

## Assets
- Poster (social): https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_-Personal-AI-Agent_SocialShare.jpg?w=1600
- Audio: https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3

## Responsive Behavior
- **1440:** hero 808.89×455 in the article column.
- **390:** hero full bleed under listen; cookie bar overlaps the lower third.
