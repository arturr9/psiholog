---
name: "Ислам — психолог"
description: "Portrait-led dark landing page with Montserrat, neon ribbons and Tiffany contact actions."
colors:
  bg: "#030c15"
  surface: "#07131e"
  text: "#f6f7fa"
  muted: "#d0d6df"
  tiffany: "#12e5d5"
  blue: "#008bdf"
  red: "#fa3762"
  border: "#34434f"
  blue-surface: "#041a2a"
  red-surface: "#18101c"
  cyan-surface: "#071d26"
  blue-border: "#235673"
  red-border: "#684050"
  cyan-border: "#345763"
  blue-accent: "#00b6f4"
  red-accent: "#fc4874"
  cyan-accent: "#13dce4"
  lead-surface: "#032036"
  lead-border: "#0499d2"
  contact-ink: "#001719"
  contact-hover: "#61f2e5"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(56px, 6.4vw, 82px)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(32px, 4vw, 47px)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "27px"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  lead-title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "37px"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 450
    lineHeight: 1.22
    letterSpacing: "-0.025em"
  compact-body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 450
    lineHeight: 1.26
    letterSpacing: "-0.015em"
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 650
  contact:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 750
    lineHeight: 1.2
  topic-title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  panel-body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 450
    lineHeight: 1.55
rounded:
  card: "18px"
  capsule: "100px"
  nav-link: "30px"
  mobile-menu: "16px"
  mobile-link: "8px"
  topic-focus: "15px"
  round: "50%"
spacing:
  gap-tight: "12px"
  gap-small: "14px"
  gap-card: "16px"
  gap-wide: "20px"
  inset: "24px"
  section-heading-gap: "30px"
components:
  button-contact:
    backgroundColor: "{colors.tiffany}"
    textColor: "{colors.contact-ink}"
    typography: "{typography.contact}"
    rounded: "{rounded.capsule}"
    padding: "14px 34px"
  button-contact-hover:
    backgroundColor: "{colors.contact-hover}"
    textColor: "{colors.contact-ink}"
    rounded: "{rounded.capsule}"
  button-contact-footer:
    backgroundColor: "{colors.tiffany}"
    textColor: "{colors.contact-ink}"
    rounded: "{rounded.capsule}"
    padding: "14px 34px"
  navigation:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.capsule}"
    padding: "5px 12px"
  about-label:
    textColor: "{colors.tiffany}"
    rounded: "{rounded.capsule}"
    padding: "5px 24px"
  card-blue:
    backgroundColor: "{colors.blue-surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  card-red:
    backgroundColor: "{colors.red-surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  card-cyan:
    backgroundColor: "{colors.cyan-surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  card-lead:
    backgroundColor: "{colors.lead-surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "32px 40px"
  topic-toggle:
    textColor: "{colors.text}"
    typography: "{typography.topic-title}"
    padding: "19px 27px"
    width: "100%"
  topic-panel:
    textColor: "{colors.muted}"
    typography: "{typography.panel-body}"
  detail-card:
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "22px 32px"
---

# Design System: Ислам — психолог

## Overview

**Creative North Star: "Portrait and neon ribbons"**

The supplied reference establishes a near-black blue field, an unchanged portrait, large white Montserrat and fine static neon ribbons. “Portrait and neon ribbons” names those existing elements; it is a description of the implemented reference, not a new creative direction.

Tiffany capsules carry contact actions, while blue, red and cyan distinguish the translucent card treatments. Borders, low-opacity gradients and clipped vector curves give the page depth. The composition is dense enough to preserve the compact reference while retaining generous introductory type.

**Key Characteristics:**

- Locally served Montserrat with strong Cyrillic headlines and closely tracked titles.
- Near-black blue surfaces, white text and Tiffany contact capsules.
- Thin colored borders and static blue, red and cyan SVG ribbons.
- An unchanged supplied portrait with CSS edge masks.
- Asymmetric approach cards, compact topic cards and explicit keyboard states.

This document records the finished source in `styles.css`, `app.js`, `content.js` and `index.html`. The user-supplied visual authority is `.impeccable/reference.png`; product and surface context remain in `PRODUCT.md` and `.impeccable/surface.md`. Frontmatter owns reusable primitives; the sidecar records motion, breakpoints and renderable component examples.

## Colors

Cool near-black grounds the palette; electric blue, red and Tiffany supply light rather than broad opaque decoration.

### Primary

- **Tiffany** (`tiffany`): contact action fill, outlined personal label, selection background, keyboard outline and link hover.
- **Contact ink / Contact hover** (`contact-ink`, `contact-hover`): dark lettering on the Tiffany action and its brighter pointer-hover fill.

### Secondary

- **Electric blue** (`blue`): source palette token; rendered blue cards use the more specific blue surface, border and accent tokens.
- **Blue card treatment** (`blue-surface`, `blue-border`, `blue-accent`): cool card face, resting outline and interactive outline.
- **Lead blue treatment** (`lead-surface`, `lead-border`): emphasized approach card, with an additional upper-left radial wash.

### Tertiary

- **Neon red** (`red`): source palette token; rendered red cards use the red surface, border and accent tokens.
- **Red card treatment** (`red-surface`, `red-border`, `red-accent`): warm card face and outlines.
- **Cyan card treatment** (`cyan-surface`, `cyan-border`, `cyan-accent`): Tiffany-adjacent card face and outlines.

### Neutral

- **Night background** (`bg`): page base and browser theme color.
- **Base surface** (`surface`): shared card foundation before the blue/red/cyan variants.
- **Soft white** (`text`): primary text and button glyphs.
- **Muted white** (`muted`): expanded topic descriptions.
- **Structural border** (`border`): shared card outline before variant overrides.

SVG ribbon gradients have their own illustrated blue, red and cyan stops in `app.js`; they are artwork, not extra UI status colors. The sidecar's synthesized tonal ramps are preview metadata, not implemented CSS scales.

## Typography

**Display Font:** Montserrat (Arial, sans-serif fallback).  
**Body Font:** Montserrat (Arial, sans-serif fallback).

A local variable font supplies weights (100–900), loaded with `font-display: swap` and preloaded in the document head. The system uses strong, closely tracked headings and medium-weight explanatory text; no separate serif or mono family is implemented.

### Hierarchy

- **Display:** the `display` token is the hero heading, constrained to (11ch), balanced, with a maximum implemented size of (82px).
- **Headline:** the `headline` token is the section-heading scale; section rules continue to the right.
- **Title:** approach-card headings use `title`; the large left approach card uses `lead-title` and normal wrapping. Its desktop width limit is (420px).
- **Body:** `body` records the personal statement. The hero subtitle instead uses (clamp(21px, 2.5vw, 30px)), weight (450), line-height (1.22), tracking (-0.025em), and a width limit of (510px).
- **Compact body:** `compact-body` records regular approach-card descriptions; the lead description is (22px), with a (370px) width limit.
- **Label:** `label` records navigation links. The outlined personal label is (16px), weight (600), line-height (1.2).
- **Contact:** `contact` records the hero action. The footer version is (19px) with the same weight and line-height.
- **Topic title / Panel body:** `topic-title` and `panel-body` pair a strong control label with a quieter, more open explanatory paragraph.
- Detail titles are (29px), weight (700), line-height (1.2), tracking (-0.03em); their supporting text is (19px), weight (450), line-height (1.3), tracking (-0.02em).

Responsive type changes follow the exact breakpoint cascade below. Preserve natural Cyrillic wrapping instead of inserting hard line breaks.

## Layout

The desktop container is centered at `min(1180px, calc(100% - 104px))`. The header is a horizontal brand/navigation pair; the intro positions text left and the portrait right. At base desktop size, the intro is at least (737px) tall with (76px) top padding; the personal statement follows the hero after (114px). The portrait is absolutely positioned at (-36px) top and (-70px) right, width (730px), limited to (76%) of the intro.

The approach grid uses columns (1.35fr 1fr), two equal rows and gaps (16px 20px). Its lead card spans both rows. Topics use a 12-track grid: the first six cards each span four tracks; the final two each span six, producing **3/3/2** rows. Topic gaps are (14px 16px), and cards align to the start so an expanded card does not stretch its neighbor. Details use two equal columns with (28px) between them. The footer aligns its heading, action and channel horizontally.

| Source query | Finished behavior |
| --- | --- |
| min-width (1600px) | Intro top padding becomes (80px); the container still caps at (1180px). |
| max-width (1120px), min-width (681px) | Container has (48px) side gutters; intro is (610px) minimum height with (49px) top padding. Hero is (65px), subtitle (26px), personal body (20px). Portrait is (600px) wide at (-16px) top and (-84px) right. Approach gaps are (14px 20px), compact cards have (102px) minimum height; lead heading is (33px), lead body (20px). Topics retain 3/3/2 with (12px 16px) gaps; toggles are (60px) minimum height with (21px) text. Detail cards have (93px) minimum height; footer padding is (42px) vertically. |
| max-width (900px), min-width (681px) | Container has (28px) side gutters. Intro minimum height is (600px), padding top (60px); hero (54px), subtitle (22px), personal body (18px). Portrait is (630px) wide, limited to (80%), at (5px) top and (-60px) right. Topics become **two equal columns**, with no special final-row spans; labels are (18px), descriptions (15px). Footer wraps and its contact channel occupies a full row. |
| max-width (680px) | Container has (20px) side gutters. A (44px) round menu control replaces the visible navigation row. Intro becomes a vertical flex layout: hero, full-width portrait, then personal statement; top padding is (36px) with no minimum height. Hero is (clamp(40px, 10.7vw, 68px)), line-height (1.04), tracking (-0.04em). Subtitle is (clamp(19px, 4.8vw, 25px)), line-height (1.3). Hero action is (54px) minimum height, (190px) minimum width, with (20px) text. Personal body is (20px), line-height (1.4). Section headings are (clamp(30px, 7.9vw, 42px)). Approach, topics and details become **one column**. |
| max-width (360px) | Container has (16px) side gutters; brand (19px), hero (39px), subtitle and personal body (18px), section title (29px), lead-card title (29px), topic label (20px), footer heading (35px), channel (15px). |

On phones, approach cards use (25px) padding and (144px) minimum height; the lead uses (27px) padding and (230px) minimum height. Their headings are (26px) and (32px); at the narrowest breakpoint horizontal padding becomes (22px). Topic gaps are (12px); controls have (77px) minimum height and (23px 24px) padding, with (22px) labels. Details use (24px) padding and (120px) minimum height. The footer stacks with (24px) gaps and (53px 0 67px) padding.

The phone portrait extends to the viewport edges with width `calc(100% + 40px)` and horizontal margins (-20px), changing to (+32px / -16px) at the smallest breakpoint. A vertical mask blends its top and bottom. The page shell clips decorative overflow; illustrations are positioned independently of readable content.

## Elevation & Depth

The resting system uses colored borders, translucent surface washes and local radial light. Cards have no resting box shadow. The desktop navigation has a faint white linear wash; section rules fade horizontally. The lead approach card has a stronger upper-left blue radial wash. Static SVG ribbons are clipped by card shapes and use layered translucent fills and thin gradient edges. The portrait is blended into the page with intersecting horizontal and vertical masks on desktop.

### Shadow Vocabulary

- **Contact hover glow:** `0 8px 35px #09dcc32b`, enabled only for a fine pointer that supports hover. There is no matching card lift.

**The Static Artwork Rule.** Portrait, ribbons and ambient gradients remain still; motion is limited to interface state and one-time section reveals.

Sections reveal once when at least (8%) enters the viewport, from opacity (0.65) and translateY (14px) to opacity (1) and translateY (0), over (480ms) with the source ease-out curve. Content is visible before observation; the reveal never gates access to content.

For `prefers-reduced-motion: reduce`, CSS sets smooth scrolling to auto and disables every CSS animation and transition, including pseudo-elements. JavaScript skips section observation on initial reduced preference; if the preference changes to reduced motion during use, it disconnects the observer and finishes active Web Animations.

## Shapes

Cards use the shared gently rounded `card` radius; nav and contact actions use the `capsule` radius. The personal label is also a capsule but stays outlined and noninteractive. Desktop nav links use the smaller `nav-link` rounding. On phones, the floating navigation is a rounded rectangle (`mobile-menu`), its links use `mobile-link`, and the menu trigger is circular (`round`).

Card outlines are (1px). The topic glyph is a (17px) plus built from two (2px) strokes with rounded ends; the vertical stroke disappears to produce a minus. Decorative artwork is clipped within surfaces. The topic focus ring uses its own `topic-focus` radius to remain visible inside the clipped card.

## Components

### Buttons

The contact action is a solid Tiffany capsule, with the sizes and padding defined in the frontmatter. At rest it has no shadow. Fine-pointer hover changes its fill to `contact-hover` and adds the documented glow. Active press scales it to (0.97); the transform transition is (150ms) using the source ease-out curve. Fill changes take (180ms ease), shadow changes (220ms ease). Footer actions use a smaller text and minimum-size variant. Both use the first configured contact channel that has a URL.

The global keyboard outline is (2px solid Tiffany) at (5px) offset. Contact links open externally with `noopener noreferrer`. No disabled, loading or error visual is implemented.

### Chips

The “О себе” label is a content heading styled as a thin Tiffany capsule, with a transparent background. It has no click, selection or hover state.

### Cards / Containers

Blue, red and cyan variants share the base surface gradient, clipped artwork, thin outlines and card radius. Approach cards use (20px 30px) padding and (126px) minimum height at base desktop size. The lead uses its documented radial wash and frontmatter padding. Fine-pointer hover changes approach and topic outlines to their variant accent over (200ms ease); content and card position do not move.

Detail cards use the same surface vocabulary with (115px) minimum height. They have no interactive state.

### Topic Panels

Each topic title is a real full-width button with `aria-expanded` and `aria-controls`. Default panels use a (0fr) grid row and hidden visibility; the open card uses (1fr), visible visibility and its variant accent outline. The panel transition is (280ms) with the source ease-out curve. Inner overflow is clipped; paragraph margins are (0 27px 24px). The plus turns into a minus using a (220ms) transform transition and (160ms) opacity transition.

Opening a topic closes every other topic; pressing it again closes it. The script synchronizes `aria-expanded`, `aria-hidden`, `inert` and the open-card class. Keyboard activation uses native button behavior. Focus is inset (-6px) with the topic-specific rounding. Optional topic images use cover cropping at (0.3) opacity in place of a ribbon; all current topics use ribbons.

**The Focus Parity Rule.** Keep visible focus on every keyboard control; topic focus stays inset inside its clipped card.

### Navigation

Desktop navigation is a lightly outlined capsule, with (4px) link gaps and frontmatter padding. Fine-pointer hover tints the link Tiffany and adds a faint Tiffany wash, over (180ms ease). Anchor links use the page's smooth scroll and a (30px) scroll offset, reduced to (20px) on phones. There is no selected-anchor visual.

On phones, the hidden menu has opacity (0), translateY (-5px) and hidden visibility. Opening makes it opaque, unshifted and visible. Opacity takes (180ms ease); transform uses (200ms) ease-out; visibility uses (200ms). The two menu strokes rotate into a cross over (220ms) with ease-out. The script synchronizes expanded state and the Russian open/close label. A navigation click, an outside click or crossing (681px) closes it; Escape closes it and returns focus to the trigger.

### Static Ribbon Motif

The signature artwork is inline SVG with two translucent folded curves and fine gradient edges, using blue, red or cyan stops. Repeated variants mirror, rotate or stretch the same geometry. The ribbons are marked decorative, ignore pointer events and do not receive focus. Their geometry and color treatment remain static.

## Do's and Don'ts

### Do:

- **Do** use the supplied portrait unchanged and blend its edges with CSS masks.
- **Do** retain Montserrat, the established weight hierarchy and the close title tracking.
- **Do** use the Tiffany capsule for contact actions and the blue/red/cyan surface treatments for cards.
- **Do** preserve the 18px card radius and compact 3/3/2 topic arrangement above the tablet breakpoint.
- **Do** let a topic expand inside its card while closing any previously open topic.
- **Do** preserve visible keyboard focus and the complete reduced-motion behavior.

### Don't:

- **Don't** replace the real portrait with an AI-generated person.
- **Don't** animate the portrait, ribbons or background gradients.
- **Don't** turn the outlined “О себе” label into an interactive filter.
- **Don't** apply hover-only effects to touch devices.
- **Don't** add new visual variants, colors or typefaces without updating the source system.
- **Don't** hide content until a reveal animation runs.

