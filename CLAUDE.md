# CLAUDE.md

> Project guidance for Claude Code and other AI assistants working on this codebase.
> **Project:** Maison Noël — Women's Cosmetic Brand · Christmas Offer Landing Page
> **Style Guide:** `maison-noel-style-guide.html`

---

## 1 · Project Overview

Maison Noël is a women's cosmetic brand landing page for the Christmas/Holiday season. The visual identity is **luxury editorial** — Parisian apothecary meets candlelit Christmas window. Festive but never kitsch.

The landing page must include these sections, in order:

1. Hero
2. Product Categories
3. Christmas Offers (with countdown)
4. Christmas Bundle Experience (interactive)
5. Top Selling Products
6. Promotional Campaign Banner
7. Contact / Newsletter
8. Footer

---

## 2 · Aesthetic Direction (non-negotiable)

The brand is built on these moods. **Do not drift toward generic "festive" tropes.**

| ✅ Lean into | ❌ Avoid |
|---|---|
| Velvet, candlelight, gold leaf | Neon reds, glitter, sparkles |
| Warm spice, evergreen boughs | Cartoon snowmen, snowflake confetti |
| Hand-tied ribbon, parchment | Aggressive "BUY NOW" urgency |
| Editorial serif typography | Generic sans-serif everywhere |
| Generous negative space | Cluttered grid layouts |
| Quiet ceremony | Loud commercial energy |

**Voice:** Confident, intimate, lyrical. Speaks in invitations, not demands.
**Audience:** Women aged 25–55 who treat beauty as ritual, not routine.

---

## 3 · Design Tokens

All tokens are defined as CSS variables on `:root` in the style guide. **Always reference variables — never hard-code hex values or pixel sizes.**

### Color Palette

```css
/* Burgundy family — primary brand */
--burgundy-deep: #3D0F1A;   /* hero backgrounds, footer accents */
--burgundy:      #6B1F2E;   /* primary brand color */
--burgundy-soft: #8C2E3F;   /* hover / secondary accent */

/* Cream family — backgrounds */
--cream:        #F5EDE0;    /* primary page background */
--cream-warm:   #EFE3D0;    /* secondary surfaces */
--cream-deep:   #E5D5BC;    /* tertiary surfaces */

/* Gold family — accents */
--gold:         #B8924A;    /* primary accent (antique brass) */
--gold-light:   #D4B074;    /* highlights on dark backgrounds */
--gold-deep:    #8B6A2E;    /* type accent on cream */

/* Seasonal accents — use sparingly */
--pine:         #2B3A2E;    /* deep evergreen */
--pine-soft:    #4A5C4A;    /* moss accent */
--blush:        #D4A199;    /* soft rose */

/* Neutrals */
--ink:          #1A0A0E;    /* near-black with wine undertone — body text */
--ink-soft:     #4A2530;    /* secondary text */
```

**Usage rule:** Burgundy carries weight. Cream provides breath. Gold marks moments of importance. Pine and blush appear *sparingly* as seasonal accents — never as primary surfaces.

### Typography

Three distinct typefaces with strict role separation:

```css
--font-display: 'Italiana', serif;       /* H1, brand mark, ceremonial moments */
--font-serif:   'Fraunces', serif;       /* H2/H3, body italics, editorial copy */
--font-sans:    'Inter', sans-serif;     /* labels, buttons, eyebrows, fine print */
```

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Display | Italiana | 64–96px | 400 | Brand mark, hero titles |
| H1 | Italiana | 40–56px | 400 | Section titles |
| H2 | Fraunces | 32–40px | 400 | Subsection headlines |
| H3 / Quote | Fraunces Italic | 22–26px | 300 | Pull quotes, soft headers |
| Body | Inter | 16px | 400 | Line-height 1.6 |
| Eyebrow | Inter | 12px | 500 | Tracking 0.4em, UPPERCASE |
| Caption | Fraunces Italic | 14–15px | 300 | Image credits, footnotes |

**Pattern:** Display headlines almost always mix Italiana with a Fraunces italic word for emphasis — e.g. `Wrapped in velvet, <em>finished in gold.</em>`

### Spacing Scale

4px base scale. Sections breathe at 96–128px between them.

```css
--s-1: 4px;   --s-2: 8px;   --s-3: 12px;  --s-4: 16px;
--s-5: 24px;  --s-6: 32px;  --s-7: 48px;  --s-8: 64px;
--s-9: 96px;  --s-10: 128px;
```

**Rule:** Components rarely sit closer than `--s-5` (24px) apart. Section vertical padding is `--s-9` (96px). Hero margins use `--s-10` (128px).

### Radii

```css
--r-sm:   2px;     /* tags, fine borders */
--r-md:   6px;     /* cards */
--r-lg:   14px;    /* large surfaces, hero blocks */
--r-xl:   24px;    /* feature panels */
--r-pill: 999px;   /* newsletter input, tags */
```

**Important:** Primary buttons (`.btn-primary`, `.btn-gold`) have **no border radius**. The sharp rectangle is part of the brand's editorial precision. Only ghost and pill variants use radius.

### Shadows

Shadows use the burgundy palette — never neutral grey.

```css
--shadow-sm:   0 1px 2px rgba(61,15,26,0.08);              /* rest state */
--shadow-md:   0 8px 24px rgba(61,15,26,0.12);             /* hover */
--shadow-lg:   0 24px 60px rgba(61,15,26,0.18);            /* modals, featured */
--shadow-gold: 0 0 0 1px rgba(184,146,74,0.3),
               0 8px 32px rgba(184,146,74,0.18);            /* premium / active state */
```

### Motion

```css
/* Standard easing — entries, hovers, lifts */
cubic-bezier(0.2, 0.8, 0.2, 1)

/* Slow easing — color shifts, large transitions */
cubic-bezier(0.4, 0, 0.2, 1)
```

Durations sit between 300ms and 800ms. Animations punctuate, never perform — no overshoot, no bounce.

---

## 4 · Section-Specific Patterns

### Hero
- Background: `--burgundy-deep` to `--burgundy` linear gradient (135deg).
- Two-column layout: copy on left, single circular product visual on right.
- Eyebrow → display headline (mix display + italic serif) → italic sub → max two CTAs.
- Decorative `✦` ornaments at corners with 0.4 opacity.
- Min-height 480px.

### Product Categories
- Tall portrait cards (aspect-ratio 3/4) on `--cream-warm`.
- Structure: italic number (`№ 01`) at top, centered icon (2.2rem), display-serif name, italic count below.
- Hover: 6px lift, deepens background to `--cream-deep`, large shadow.

### Countdown
- `--burgundy-deep` background with diagonal hairline pattern overlay (45deg, 0.04 opacity).
- Four count blocks in a single row (collapse to 2x2 below 900px).
- Numerals in Italiana display, `font-variant-numeric: tabular-nums` so digits don't shift.
- Wide-tracked uppercase labels (0.3em).
- Live countdown JS targets midnight December 24th.

### Bundle Experience (interactive)
- Split layout: clickable step rows on left, dynamic display card on right.
- Active row: `--gold` border + `--shadow-gold`. Step circle inverts (gold bg, burgundy text).
- Right card: `--burgundy-deep` background, strikethrough old price, large gilded new price, save tag pill.
- Click handlers toggle `.active` class — keep this pattern for any new step rows.

### Top Selling Products
- 4-column grid (collapses to 2 then 1).
- Square product image with linen gradient background.
- Top-left tag: `--burgundy-deep` bg, `--gold-light` text, pill shape.
- Card structure: eyebrow category → serif name → pricing (now + strikethrough was) → star rating + review count.

### Promo Banner
- Diagonal gradient: `--pine` to `--burgundy-deep`.
- Promo code displayed in dashed `--gold-light` border — this is theatre, not just a discount label.
- CTA on right uses `.btn-gold`.

### Newsletter
- `--cream-warm` panel with `✦` star ornaments at upper corners.
- Continuous pill form: input flows directly into submit button with no visible seam.
- Italic placeholder text in Fraunces.

### Footer
- `--ink` background.
- 4-column grid: 1.4fr brand block, then three navigation columns.
- Brand mark uses display + italic serif mix.
- Social icons: 36px circles in muted brass; hover swaps to full gold.

---

## 5 · Coding Conventions

### CSS
- **Always use design tokens.** Never hard-code colors, spacing, or shadows.
- Write CSS in the order: layout → spacing → typography → color → effects → transitions.
- Component class names use single-purpose hyphenated names (`.product-card`, `.hero-visual`). No BEM, no utility classes mixed with custom.
- Prefer CSS-only animations and interactions over JavaScript where possible.

### HTML
- Use semantic elements: `<header>`, `<section>`, `<article>`, `<footer>`.
- Each section has a `<span class="section-num">` and `<h2 class="section-title">` pattern.
- Decorative ornaments (`✦`, `❀`, `№`) are inline text — never images.

### Accessibility
- All interactive elements must be keyboard-focusable.
- Color contrast: cream-on-burgundy and ink-on-cream both pass AA. **Do not use gold-on-cream for body text** — only for accents and labels.
- Provide `aria-label` on icon-only buttons (see footer social icons).
- Animations must respect `prefers-reduced-motion` if added (currently the only continuous animations are the demo motion orbs in the style guide itself).

### Responsive
- Single breakpoint at 900px collapses multi-column layouts to single-column.
- Hero, bundle, promo banner, and footer all collapse their grid-template-columns to `1fr` below this width.
- Countdown becomes 2x2 grid below 900px.
- Type sizes use `clamp()` for fluid scaling.

---

## 6 · Content Voice

When writing copy:

- **Use French/European punctuation flourishes sparingly:** `№ 01`, `MMXXVI`, `Édition Limitée`. Never overdo it.
- **Headlines should feel like invitations:** "Wrapped in velvet, finished in gold." not "Best Christmas Beauty Sale!"
- **Italics carry warmth.** Use the Fraunces italic font for soft emphasis — single words within a display headline.
- **Numbers in copy are spelled out** when ceremonial (`seven limited rituals`), figural when transactional (`$48`, `15% off`).
- **Avoid:** "Shop now," "Don't miss out," "Limited time only," exclamation marks, all-caps shouting.
- **Prefer:** "Reveal," "Reserve," "Discover," "Compose," "Through December 24."

---

## 7 · File Structure

Current state:
```
/styleguide
  ├── maison-noel-style-guide.html    # complete style guide & component library
  └── CLAUDE.md                        # this file
```

When the landing page is built, expand to:
```
/maison-noel
  ├── index.html                       # main landing page
  ├── /assets
  │    ├── /fonts                      # self-hosted Italiana, Fraunces, Inter
  │    ├── /images                     # product photography
  │    └── /icons                      # SVG ornaments
  ├── /styles
  │    ├── tokens.css                  # CSS variables only
  │    ├── base.css                    # resets, typography, body
  │    └── components.css              # all component styles
  ├── /scripts
  │    ├── countdown.js                # holiday countdown logic
  │    └── bundle.js                   # interactive bundle builder
  ├── maison-noel-style-guide.html     # keep for reference
  └── CLAUDE.md
```

---

## 8 · Common Tasks

### Adding a new section
1. Wrap in `<section class="guide-section">`.
2. Include `<span class="section-num">` and `<h2 class="section-title">` for consistency.
3. Use `--s-9` vertical padding.
4. Inherit from existing component patterns rather than inventing new ones.

### Adding a new color
**Don't.** The 12-color palette is closed. If a new shade is genuinely needed, derive it from existing tokens (e.g. `color-mix()` or rgba on existing variables).

### Adding new buttons
Existing variants are: `.btn-primary`, `.btn-gold`, `.btn-ghost`, `.btn-link`. These cover the full range. Adding more dilutes the system — push back if asked.

### Building the live landing page
- Reference the style guide as the source of truth for all visual decisions.
- Keep the CSS variable system; copy `:root` declarations verbatim.
- Hero, countdown, bundle, and newsletter sections should remain visually identical to their previews in the style guide.
- Replace placeholder product visuals (CSS-drawn bottles) with real product photography against linen-gradient backgrounds.

---

## 9 · Things to Push Back On

If asked to do any of the following, suggest the alternative in parentheses:

- "Make it more Christmassy with red and green" → (the palette already includes evergreen and burgundy; adding more saturates the brand into Hallmark territory)
- "Add some snowflakes / sparkles / glitter" → (✦ ornament marks already serve this role with restraint)
- "Use a brighter, more eye-catching font" → (Italiana + Fraunces *are* the brand voice; changing them changes the brand)
- "Make the buttons rounded" → (sharp rectangles are intentional; only the newsletter pill and tags use radius)
- "Add a popup / countdown urgency / 'Only 3 left!' banner" → (the brand sells through ceremony, not pressure)

---

*Composed at the Maison · MMXXVI*
