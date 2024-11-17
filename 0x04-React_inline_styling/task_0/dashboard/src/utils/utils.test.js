import { describe, expect } from "@jest/globals";
import {
  getFullYear,
  getLatestNotification,
  getFooterCopy,
} from "./utils";


describe("getFullYear returns the current year", () => {
    test("getFullYear", () => {
        expect(getFullYear()).toBe(2024);
    });
});

describe("getLatestNotification returns the latest notification", () => {
    test("getLatestNotification", () => {
        expect(getLatestNotification()).toBe(
            "<strong>Urgent requirement</strong> - complete by EOD"
        );
    });
});

describe("getFooterCopy returns the correct string when the argument is true", () => {
    test("getFooterCopy", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
});
