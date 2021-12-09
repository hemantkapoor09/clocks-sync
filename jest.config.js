module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.vue",
    "!**/node_modules/**",
    "!src/app.vue",
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 77,
      functions: 77,
      lines: 77,
      statements: 77
    }
  },
  reporters: ["default", "jest-junit"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};