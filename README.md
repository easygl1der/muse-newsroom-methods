# Muse Newsroom methods (public gallery)

Three complete study-clone preview pages for one Meta Newsroom article:

**[Introducing Muse: Personal AI Agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)**

This is a **study clone** gallery so others can recreate the pages. It is **not** an official Meta site.

| Label | Method | Preview | Banner |
|---|---|---|---|
| 原站 / Original | live Newsroom article | https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ | — |
| **方法 A** | [JCodesMore](https://github.com/JCodesMore/ai-website-cloner-template) `getComputedStyle()` → hand-built Next.js | http://127.0.0.1:43211 | **green** |
| **方法 B** | [Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) `pwc extract → plan → assemble` (8 sections) | http://127.0.0.1:43212 | **pink** |

Labels stay unswapped:

- **A = JCodesMore / green / :43211**
- **B = PWC / pink / :43212**

**Default going forward:** Method B. Human review prefers B because assemble keeps captured class names plus `public/theme.css`. Method A is a **control only**.

Do not treat B as pixel-perfect. Terminal state is `failed_with_residuals`: full-page SSIM **0.582** (threshold 0.97).

Related public repos (do not confuse them):

- Older first-slice Next.js replica: [easygl1der/muse-newsroom-replica](https://github.com/easygl1der/muse-newsroom-replica) · https://muse-newsroom-replica.vercel.app
- This gallery: [easygl1der/muse-newsroom-methods](https://github.com/easygl1der/muse-newsroom-methods)

## How to run the three pages

```bash
git clone https://github.com/easygl1der/muse-newsroom-methods.git
cd muse-newsroom-methods

# Method A · JCodesMore · :43211
cd jcodesmore && npm install && npm run dev

# Method B · Perfect-Web-Clone · :43212
cd ../perfect-web-clone && npm install && npm run dev

# Comparison hub · :43210 (Original + A + B, iframes for A and B)
cd .. && npm run hub
```

From the repo root you can also use:

```bash
npm run hub      # http://127.0.0.1:43210
npm run dev:a    # http://127.0.0.1:43211  (after npm install in jcodesmore)
npm run dev:b    # http://127.0.0.1:43212  (after npm install in perfect-web-clone)
```

Open the hub first if you only have one browser tab. Cards and iframes point at A (`:43211`) and B (`:43212`).

## Method facts (keep honest)

### A / JCodesMore (`jcodesmore/`)

- Playwright walked the live page and dumped `getComputedStyle()`.
- A Next.js page was rebuilt by hand from those tokens, copy, and section specs under `jcodesmore/docs/research/`.
- QA is side-by-side eyeball. **No pixelmatch. No SSIM gate.**
- Sticky **green** study banner: `方法 A · JCodesMore · getComputedStyle · :43211`.

### B / Perfect-Web-Clone (`perfect-web-clone/`)

- Pipeline: `pwc extract → plan → assemble` of **8 sections**, plus captured `public/theme.css`.
- Terminal `failed_with_residuals`: full-page SSIM **0.582** (threshold 0.97). Weight gate also failed.
- Human still prefers B for likeness to the live Newsroom page.
- Sticky **pink** study banner: `方法 B · Perfect-Web-Clone · pwc assemble · :43212`.

## Videos

This repo does **not** commit local mp4/mp3 binaries. Method B `<video>` / `<audio>` tags use remote about.fb.com URLs (same files Method A already hotlinks in `jcodesmore/src/lib/content.ts`) so a fresh clone still plays:

- https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_Sizzle-Video.mp4
- https://about.fb.com/wp-content/uploads/2026/09/Muse_FieldTrip.mp4
- https://about.fb.com/wp-content/uploads/2026/09/Muse_Japan.mp4
- https://about.fb.com/wp-content/uploads/2026/09/Muse_Relationships.mp4
- https://about.fb.com/wp-content/uploads/2026/09/Muse_Shopping.mp4
- https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3

## What is in this tree

```
hub/                  comparison hub (Original + A + B only)
jcodesmore/           Method A Next.js app (source, lockfile, configs, research specs)
perfect-web-clone/    Method B Vite app (8 sections, lockfile, public/theme.css, UI images)
```

Not shipped: `node_modules`, `.next`, `dist`, `.pwc`, or the ~43MB local video folder.

Each method still has `NOTES.md`: extracted vs guessed vs failed.
