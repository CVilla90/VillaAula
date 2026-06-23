import { describe, it, expect } from "vitest";
import { safeNext } from "@/lib/auth/google";

describe("safeNext", () => {
  it("allows a same-origin relative path", () => {
    expect(safeNext("/level/1")).toBe("/level/1");
  });
  it("rejects protocol-relative URLs", () => {
    expect(safeNext("//evil.com")).toBe("/levels");
  });
  it("rejects absolute URLs", () => {
    expect(safeNext("https://evil.com")).toBe("/levels");
  });
  it("rejects non-rooted paths", () => {
    expect(safeNext("evil")).toBe("/levels");
  });
  it("falls back for empty/nullish input", () => {
    expect(safeNext("")).toBe("/levels");
    expect(safeNext(null)).toBe("/levels");
    expect(safeNext(undefined)).toBe("/levels");
  });
  it("honors a custom fallback", () => {
    expect(safeNext(null, "/home")).toBe("/home");
  });
});
