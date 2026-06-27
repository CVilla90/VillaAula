import { describe, it, expect } from "vitest";
import {
  t,
  hasEs,
  isLocalizedPair,
  localizedNonEmpty,
  type LocalizedText,
} from "@/lib/i18n";

describe("i18n LocalizedText", () => {
  it("passes plain strings through in either language", () => {
    expect(t("Hello", "en")).toBe("Hello");
    expect(t("Hello", "es")).toBe("Hello");
    expect(t("Hello")).toBe("Hello"); // default en
  });

  it("resolves a bilingual pair by language", () => {
    const v: LocalizedText = { en: "Headline", es: "Titular" };
    expect(t(v, "en")).toBe("Headline");
    expect(t(v, "es")).toBe("Titular");
    expect(t(v)).toBe("Headline"); // default en
  });

  it("falls back to English when the Spanish arm is blank", () => {
    const v: LocalizedText = { en: "Profile", es: "   " };
    expect(t(v, "es")).toBe("Profile");
  });

  it("detects whether a value is bilingual", () => {
    expect(hasEs("plain")).toBe(false);
    expect(hasEs({ en: "a", es: "b" })).toBe(true);
    expect(hasEs({ en: "a", es: "" })).toBe(false);
    expect(isLocalizedPair("plain")).toBe(false);
    expect(isLocalizedPair({ en: "a", es: "b" })).toBe(true);
  });

  it("validates non-emptiness for both arms", () => {
    expect(localizedNonEmpty("ok")).toBe(true);
    expect(localizedNonEmpty("  ")).toBe(false);
    expect(localizedNonEmpty({ en: "a", es: "b" })).toBe(true);
    expect(localizedNonEmpty({ en: "a", es: "  " })).toBe(false);
    expect(localizedNonEmpty({ en: "  ", es: "b" })).toBe(false);
    expect(localizedNonEmpty(42)).toBe(false);
    expect(localizedNonEmpty(null)).toBe(false);
    expect(localizedNonEmpty({ en: "a" })).toBe(false);
  });
});
