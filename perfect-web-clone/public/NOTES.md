# Perfect-Web-Clone arm — notes

Method: `pwc extract` → `pwc plan` → `pwc assemble` (8 sections) → Vite preview on **:43212**.

Pink study banner. Method B. Visual default going forward. Not official Meta.

## Honesty

- Terminal state: **`failed_with_residuals`**
- Full-page SSIM **0.582** (threshold 0.97)
- Top-of-page SSIM **0.684**
- Weight gate failed (443 KB vs 120 KB budget)
- Human review still prefers this page over Method A because assemble keeps captured classes + `theme.css`

## Sections

header, header-2, section-2, section-3, section-4, section-5, section-6, footer.

## Media

Videos and LISTEN audio play from remote about.fb.com URLs. Local mp4/mp3 binaries are not in this public tree.

## Residuals

Hero uses native `<video controls>`, not pixel-matched MediaElement chrome. Mega menus are captured markup with CSS `:hover` only. Document height is shorter than the live article.
