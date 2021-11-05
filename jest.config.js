module.exports = {
  roots: ["<rootDir>/src"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
