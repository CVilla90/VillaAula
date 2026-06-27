/**
 * Single source of truth for brand, byline, and palette — the strings/colors that
 * were previously re-typed across layout, landing, footer, and the diploma SVG
 * (REFACTOR.md F7). Plain constants (no React), safe to import anywhere.
 */

export const BRAND = "VillaAula";
/** Wordmark used in the logo + footer. */
export const BRAND_WORDMARK = "VillaAula";
/** Small descriptive line under the footer logo (replaces the old WISHUB backronym). */
export const BRAND_NOTE = "A little classroom of your own";
export const TAGLINE = "English that finally clicks";
export const META_DESCRIPTION =
  "A small, modern English course that skips the clutter. Short exercises, instant feedback, and the grammar tucked away until you want it.";

/** CEFR band shown in the hero eyebrow. */
export const LEVEL_BAND = "A1 → A2";

export const BYLINE = "Built by Carlos Villa";
export const COPYRIGHT_YEAR = 2026;

/**
 * Optional "support this project" Stripe link, surfaced as a discreet footer
 * disclosure (HANDOFF §18.K). VillaAula is free; this is a no-pressure tip jar
 * for hosting/maintenance. Personal project — no UACH / CV Labs branding here.
 */
export const SUPPORT_URL = "https://buy.stripe.com/dRmaEWeSY7VNbxW7i1cEw00";

/** Diploma fallbacks when a course doesn't override them (see Course.diploma). */
export const DIPLOMA_TITLE = "VillaAula Diploma";
export const DIPLOMA_ISSUER = "VillaAula";
export const DEFAULT_LEARNER_NAME = "VillaAula Learner";

/**
 * The design palette — mirrors the `@theme` tokens in globals.css. Keep in sync;
 * this is the one place non-CSS contexts (the SVG diploma, canvas, emails) read
 * the brand colors from instead of hardcoding hex.
 */
export const PALETTE = {
  cream: "#fbf4ec",
  paper: "#ffffff",
  ink: "#2a211b",
  muted: "#8a7a6e",
  line: "#ece0d4",
  coral: "#ff5a4d",
  coralDeep: "#e8412f",
  teal: "#16a394",
  peach: "#ffd9c2",
} as const;
