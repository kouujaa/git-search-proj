import React from "react";
import api from "../httpServices";

describe("htttService", () => {
  it("return token", () => {
    const token = api.getToken("4f262cc9e20d3043da02");
    expect(token).toBeDefined();
  });
});
