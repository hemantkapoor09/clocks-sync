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
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    }
  },
  reporters: ["default", "jest-junit"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};