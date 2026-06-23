import { describe, it, expect } from "vitest";
import {
  lessonKey,
  finalTestKey,
  courseKey,
  isCourseComplete,
  keysToRecord,
  getLocalCompleted,
  addLocalKey,
} from "@/lib/progress";

describe("key builders", () => {
  it("builds the shared key space", () => {
    expect(lessonKey("1", "2", "to-be")).toBe("1/2/to-be");
    expect(finalTestKey("1")).toBe("final:1");
    expect(courseKey("1")).toBe("course:1");
  });
});

describe("isCourseComplete", () => {
  const lessonKeys = ["1/1/a", "1/1/b"];
  it("is true only when every lesson AND the final are done", () => {
    const done = { "1/1/a": true, "1/1/b": true, "final:1": true };
    expect(isCourseComplete(done, "1", lessonKeys)).toBe(true);
  });
  it("is false with a missing lesson", () => {
    expect(isCourseComplete({ "1/1/a": true, "final:1": true }, "1", lessonKeys)).toBe(false);
  });
  it("is false with the final missing", () => {
    expect(isCourseComplete({ "1/1/a": true, "1/1/b": true }, "1", lessonKeys)).toBe(false);
  });
});

describe("keysToRecord", () => {
  it("turns a key list into a boolean map", () => {
    expect(keysToRecord(["a", "b"])).toEqual({ a: true, b: true });
  });
});

describe("localStorage primitives without a window", () => {
  it("degrade safely on the server (no throw, empty result)", () => {
    expect(getLocalCompleted()).toEqual({});
    expect(() => addLocalKey("x")).not.toThrow();
  });
});
