import { AxiosInstance } from "axios";
import httpCommon from "../http-common";

describe("http instance", () => {
  it("should return a type axiosInstance", () => {
    const res = httpCommon;
    expect(res).toBeDefined();
  });
});
