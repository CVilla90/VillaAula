/**
 * Single source of truth for brand, byline, and palette — the strings/colors that
 * were previously re-typed across layout, landing, footer, and the diploma SVG
 * (REFACTOR.md F7). Plain constants (no React), safe to import anywhere.
 */

export const BRAND = "WISHUB";
/** Lowercase wordmark used in the logo + footer. */
export const BRAND_WORDMARK = "wishub";
export const BACKRONYM = "Web Interactive Study Hub for Universal Bilinguals";
export const TAGLINE = "English that finally clicks";
export const META_DESCRIPTION =
  "A small, modern English course that skips the clutter. Short exercises, instant feedback, and the grammar tucked away until you want it.";

/** CEFR band shown in the hero eyebrow. */
export const LEVEL_BAND = "A1 → A2";

export const BYLINE = "Built by Carlos Villa";
export const COPYRIGHT_YEAR = 2026;

/** Diploma fallbacks when a course doesn't override them (see Course.diploma). */
export const DIPLOMA_TITLE = "WISHUB Diploma";
export const DIPLOMA_ISSUER = "WISHUB";
export const DEFAULT_LEARNER_NAME = "WISHUB Learner";

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
