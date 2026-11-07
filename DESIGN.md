---
name: "Ислам — психолог"
description: "Centered Tiffany-highlight typography, portrait-led panels and static neon linework."
colors:
  bg: "#090c14"
  surface: "#191d27"
  surface-2: "#121722"
  text: "#f8f9fb"
  muted: "#c8ccd5"
  tiffany: "#53e5d0"
  blue: "#2455ff"
  red: "#ff304e"
  line: "#3a4352"
  white: "#fff"
  highlight-ink: "#07100f"
  tiffany-ink: "#06110f"
  supporting-text: "#eef0f4"
  red-hover: "#ff4962"
  tiffany-hover: "#75efdc"
  link-hover: "#83f2e1"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(58px, 7vw, 96px)"
    fontWeight: 820
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(44px, 5vw, 66px)"
    fontWeight: 820
    lineHeight: 1
    letterSpacing: "-0.04em"
  topic-heading:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(44px, 5vw, 64px)"
    fontWeight: 820
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  information-heading:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  value-title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "22px"
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  topic-title:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 720
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 450
    lineHeight: 1.35
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.5
  panel-body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 550
  button:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 700
rounded:
  panel: "34px"
  panel-phone: "24px"
  card: "16px"
  button: "14px"
  hero-highlight: "24px"
  hero-highlight-phone: "13px"
  approach-note: "20px"
  disclosure: "10px"
  round: "50%"
spacing:
  tight: "8px"
  small: "12px"
  card: "14px"
  medium: "18px"
  large: "24px"
  section: "40px"
components:
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "12px 26px"
  button-red-hover:
    backgroundColor: "{colors.red-hover}"
  button-tiffany:
    backgroundColor: "{colors.tiffany}"
    textColor: "{colors.tiffany-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "12px 26px"
  button-tiffany-hover:
    backgroundColor: "{colors.tiffany-hover}"
  navigation:
    textColor: "{colors.text}"
    typography: "{typography.label}"
  header-action:
    textColor: "{colors.tiffany}"
  hero-highlight:
    backgroundColor: "{colors.tiffany}"
    textColor: "{colors.highlight-ink}"
    rounded: "{rounded.hero-highlight}"
    padding: "2px 20px 8px"
  value-card:
    backgroundColor: "#0c1018e8"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "24px"
  approach-note:
    backgroundColor: "#10151ee8"
    rounded: "{rounded.approach-note}"
    padding: "14px 24px"
  topic-card:
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  topic-toggle:
    textColor: "{colors.text}"
    typography: "{typography.topic-title}"
    width: "100%"
    padding: "22px 20px"
  topic-panel:
    textColor: "{colors.muted}"
    typography: "{typography.panel-body}"
    padding: "0 20px 20px"
  education-disclosure:
    backgroundColor: "#ffffff05"
    rounded: "{rounded.disclosure}"
  education-summary:
    padding: "9px 14px"
---

# Design System: Ислам — психолог

## Уточнение утверждённого макета — 7 ноября 2026

Шапка и первый экран сохранены. Блок «Обо мне» использует почти чёрную поверхность, компактную сцену высотой 390px и исходный портрет шириной 360px на компьютере, 270px на телефоне. Четыре карточки окружают портрет на компьютере и следуют за ним на телефоне. Декоративные линии заменены растровым изображением `assets/glass-ribbon.png`, созданным ImageGen по согласованному превью; синий исходник получает красный и Tiffany-варианты через CSS hue-rotate. Карточки тем имеют высоту кнопки 144px на компьютере и 103px на телефоне, сохраняют реальные заголовки и раскрывающиеся описания. Изображения декоративны, не получают фокус и не мешают нажатию.

## Overview

**Creative North Star: "Tiffany headline and portrait stage"**

The finished replacement follows the supplied reference: a centered two-line Montserrat statement, a Tiffany highlight on its second line, a red contact action and a static blue light line. “Tiffany headline and portrait stage” describes this implemented visual authority rather than proposing a new concept.

A centered original portrait anchors the large about panel, surrounded by four compact value cards. Dark gradients, rounded containers and thin colored strokes continue through the topic, information and closing panels. The photograph keeps the real person's appearance; the surrounding layout and CSS masks provide the composition.

**Key Characteristics:**

- Locally served Montserrat with heavy, tightly tracked display type.
- Near-black ground, dark rounded panels and Tiffany/blue/red accents.
- A highlighted second headline line and a separate portrait-led about stage.
- Four-column desktop topics, two-column tablet and phone topics.
- Static line illustrations, visible keyboard focus and native disclosure controls.

This refresh supersedes the earlier visual world. Evidence: `PRODUCT.md`, `.impeccable/surfaces/index-html.md`, `styles.css`, `app.js`, `content.js` and `index.html`. The source files are authoritative for exact implementation; the direction contract identifies the supplied reference. This is a source-based record, not a new visual proposal.

## Colors

The frontmatter preserves source color values; cool dark neutrals support clear Tiffany, electric-blue and red emphasis.

### Primary

- **Tiffany** (`tiffany`): hero highlight, brand dot, closing action, inline contact links, selection and keyboard focus.
- **Tiffany hover / Tiffany ink** (`tiffany-hover`, `tiffany-ink`): closing-action hover fill and its dark text.

### Secondary

- **Electric blue** (`blue`): topic-heading highlight, blue line illustrations and blue topic open/hover outlines. The hero wave adds its own blue/cyan gradient and blurred stroke.

### Tertiary

- **Signal red** (`red`): hero and consultation actions, red line illustrations, red topic open/hover outlines.
- **Red hover** (`red-hover`): fine-pointer primary-action hover.

### Neutral

- **Night ground** (`bg`): page and browser theme background.
- **Panel / Secondary panel / Structural line** (`surface`, `surface-2`, `line`): declared source palette primitives. Finished panel fills and borders use the specific gradients and literal values recorded in component snippets; these three properties are not directly assigned to a rendered selector.
- **Main text / Muted text** (`text`, `muted`): default light type and lower-emphasis descriptions.
- **White / Highlight ink / Supporting text** (`white`, `highlight-ink`, `supporting-text`): red-action text and glyphs, dark hero-highlight text, and supporting hero/information text.
- **Link hover** (`link-hover`): article/footer link hover.

**The Highlight Roles Rule.** Use Tiffany for the hero's highlighted phrase and closing action, blue for the topic heading highlight, and red for the primary contact actions.

The sidecar's eight-step tonal strips are synthesized preview metadata, not additional CSS tokens.

## Typography

**Display Font:** Montserrat (Arial, sans-serif fallback).  
**Body Font:** Montserrat (Arial, sans-serif fallback).

The local variable font covers weights (100–900), uses `font-display: swap`, and is preloaded in `index.html`. Heavy display text and close tracking establish the hierarchy; regular explanatory text remains quieter. No mono or serif family is implemented.

- **Display:** `display` describes the two-line hero. Its second line uses the same weight (820), line-height (1), and a Tiffany rectangle.
- **Headline:** `headline` describes the centered about title. Topic and information headings have their own frontmatter roles. The closing heading uses (clamp(40px, 5vw, 64px)), weight (820), line-height (1), tracking (-0.04em).
- **Value title / Topic title:** `value-title` and `topic-title` distinguish compact static statements from expandable topic controls.
- **Subtitle:** `subtitle` describes the hero paragraph, balanced and limited to (600px). About subtitles are (20px); information subtitles are (16px).
- **Body:** `body` describes the about paragraph, centered within (760px). `panel-body` describes expanded topics.
- **Label / Button:** `label` is ordinary desktop navigation; `button` is the primary contact control. Header contact links are (14px), weight (700). Brand type is (24px), weight (800), tracking (-0.035em).

Mobile overrides are explicit, rather than a single proportional scale: hero (clamp(40px, 12vw, 58px)), about heading (36px), topic heading (34px), information heading (29px), closing heading (36px), topic controls (14px), topic descriptions (12px), about copy (13px). At (360px) or narrower, the hero is (38px), topic controls (13px) and value titles (14px).

## Layout

The base container is centered at `min(1200px, calc(100% - 64px))`. The desktop header is a horizontal brand/navigation row, with (28px) gaps and (26px) vertical padding. Sections follow with (40px) top spacing.

The centered hero is at least (500px) tall with (40px) top padding. Its subtitle follows after (22px); its contact button follows after (24px). The static wave sits at the hero bottom, spanning (94%) width and (155px) height.

The about panel has (36px 30px 0) padding. Its stage is (520px) tall: the portrait is centered absolutely at (58%) width, capped at (650px), with its bottom at (-52px). Four value cards occupy two (180px) columns around it; the stage note sits centered near the lower edge. This is an overlapping stage, not an equal-column text/photo layout.

Topics use **four equal columns**, (14px) gaps, (34px) top spacing and start alignment. There are eight topics. The combined information panel uses **two equal columns**, (32px 42px) padding and a vertical divider before consultation. The closing panel centers its title and action vertically; the footer returns to a horizontal brand/contact row.

| Source query | Finished responsive behavior |
| --- | --- |
| max-width (980px) | Container becomes `min(100% - 40px, 880px)`. Nav gaps become (16px), regular nav text (12px), hero minimum height (450px), stage height (490px), value columns (155px), value minimum height (116px), value padding (18px), value titles (19px). Topics become **two columns**. |
| max-width (760px) | Container has (14px) side gutters; large-panel radius becomes (24px). Header padding is (20px), brand (20px), menu trigger (42px). Hero minimum height is (350px), top padding (14px); subtitle is (16px), limited to (300px). Sections use (18px) top spacing. |
| max-width (360px) | Container has (10px) side gutters. Hero, value and topic type shrink as recorded above; footer stacks vertically and aligns to the start. |

At (760px) and below, the about stage becomes a vertical flex layout: portrait, overlapping approach note, then the two-by-two value grid. The portrait extends beyond panel padding with width `calc(100% + 28px)` and margins (-14px). The note overlaps it by (-42px); value gaps are (8px), minimum height (96px), padding (12px). The about copy becomes left aligned.

Phone topics **remain two columns**, with (8px) gaps, (20px) top spacing and (84px) minimum toggle height. The information panel becomes one column with (24px 16px) padding; consultation moves below a horizontal divider. The closing panel uses (170px) minimum height and (28px 14px) padding. Footer text reduces to (13px) brand and (10px) contact.

## Elevation & Depth

Dark gradient fills, subtle outlines and localized light provide depth. The about panel uses a broad blue-gray radial field; topics, information and closing panels use restrained dark linear gradients. The portrait has intersecting edge masks on desktop and a bottom fade on phones.

### Shadow Vocabulary

- **Red action at rest:** `0 12px 28px #ff304e26`.
- **Red action on fine-pointer hover:** `0 14px 34px #ff304e3b`.
- **Open phone navigation surface:** `0 18px 45px #0009`.

The hero line uses an SVG Gaussian blur (9) on a wide blue stroke beneath its fine gradient stroke. This is static light, not an animation. Cards have no lift shadow.

**The Static Linework Rule.** Keep the hero light line, small SVG illustrations and portrait still; only control states transition.

There are no entrance reveals or Web Animations in the finished script. Reduced-motion CSS sets scrolling to auto and disables every animation and transition, including pseudo-elements.

## Shapes

Large panels use `panel` radius; mobile switches that token to `panel-phone`. Value and topic cards use `card`; contact buttons use `button`, with rectangular rounded shapes rather than capsules. Hero highlight, approach note and education disclosures have distinct radii recorded in the frontmatter. Phone navigation uses (16px) corners and a round trigger. Most outlines are (1px).

The hero highlight has a (24px) corner radius on desktop and (13px) on phones; the blue topic-heading highlight uses (14px), changing to (9px) on phones. Topic plus glyphs use (16px) strokes on desktop, (13px) on phones. Static line illustrations are thin, rounded SVG paths, not the previous folded ribbons.

## Components

### Buttons

Red contact actions and the Tiffany closing action share (52px) minimum height, (9px) icon gap and frontmatter padding. All include an inline diagonal arrow. Fine-pointer hover lifts buttons by (-2px); red changes fill and glow, while Tiffany changes fill. The declared active state scales to (0.97). Transform transitions take (160ms) with the source ease, fill (180ms ease), shadow (200ms ease).

Hero and closing actions become (46px) minimum height and (14px) text on phones; consultation becomes (44px) and (13px). The closing action has (270px) minimum width on desktop and (210px) on phones. No disabled, loading or form-validation states exist.

### Cards / Containers

Value cards are static, dark translucent surfaces with (1px) outlines; their line art and statement stay separate from topic controls. The approach note is a centered translucent overlay, with a muted outline, Tiffany (26px) heading and (15px) supporting text; these become (22px) and (12px) on phones.

Topic cards use a dark linear gradient, a thin resting outline and a per-card blue/red/Tiffany accent. Fine-pointer hover and the open state set the outline to that accent over (180ms ease). The cards do not lift.

### Topic Panels

A topic is a full-width button with `aria-expanded` and `aria-controls`, plus a labeled region. The panel transitions from (0fr) and hidden visibility to (1fr) and visible over (280ms) using the source ease. Inner overflow is clipped. The plus's vertical stroke turns off through transform (220ms) and opacity (160ms), leaving a minus.

Opening a topic closes the others; clicking it again closes it. The script synchronizes expanded state, panel `aria-hidden`, `inert` and the open-card class. Native buttons provide keyboard activation.

### Education Disclosures

Education uses native `details` and `summary`, independent of the exclusive topics. Each row has a thin outline, faint white wash, (10px) radius, and a (42px) minimum-height summary. Its plus becomes a minus through a (200ms) transform transition when `open`. Actual diploma information remains a placeholder; the component describes structure, not verified qualifications.

### Navigation

Desktop navigation is an unframed horizontal row, with a Tiffany text action at its end. Regular nav-link hover changes to Tiffany over (180ms); this particular source rule is not media-gated. Header and article actions include diagonal SVG arrows. Article/footer hover colors are fine-pointer gated.

Below (761px), navigation becomes an absolutely positioned menu at top (68px), minimum width (235px), with (10px) padding. Closed state uses hidden visibility, opacity (0) and translateY (-8px); open state is visible and unshifted. Its transitions are opacity (180ms), transform (200ms) with the source ease, visibility (200ms). Three trigger bars become a cross by moving/rotating the outer bars and hiding the middle bar.

Navigation links, outside click, Escape and crossing the (761px) breakpoint close the menu. Escape returns focus to the trigger; the script keeps the Russian open/close label and `aria-expanded` synchronized. Anchor scrolling uses a (24px) offset.

**The Keyboard Visibility Rule.** Retain the global Tiffany focus outline and the native button and details/summary semantics.

The global focus outline is (3px solid Tiffany) with (4px) offset. A skip link is revealed on focus. External contacts use a new tab with `noopener noreferrer`.

## Do's and Don'ts

### Do:

- **Do** preserve the original portrait and use CSS masks to integrate its edges.
- **Do** retain the Montserrat hierarchy and the intentional two-line hero.
- **Do** preserve four topic columns above 980px and two columns at and below 980px.
- **Do** retain the four value cards as a two-by-two arrangement on phones.
- **Do** keep the topic expanded state, minus glyph and accent border synchronized.
- **Do** preserve visible focus, Russian labels and reduced-motion overrides.

### Don't:

- **Don't** replace the real person with a generated portrait.
- **Don't** restore the old capsule navigation, 3/3/2 topic grid or folded ribbon artwork.
- **Don't** animate the portrait, light line, ambient gradients or line illustrations.
- **Don't** turn value cards into interactive controls.
- **Don't** invent loading, disabled or validation states that the source does not implement.
- **Don't** replace the education placeholders with unverified credentials.

