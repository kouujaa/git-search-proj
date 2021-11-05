import { formatTimeAgo } from "../time";
import moment from "moment";

describe("time", () => {
  it("should return a string on epoc time input", () => {
    const result = formatTimeAgo(1635924990);
    expect(result).toBeDefined();
  });
  it("should return a string on time moment time", () => {
    const result = formatTimeAgo(moment().toDate());
    expect(result).toBeDefined();
  });
  it("should return a string on time moment ", () => {
    const result = formatTimeAgo(null);
    expect(result).toBeDefined();
  });
});

export {};
