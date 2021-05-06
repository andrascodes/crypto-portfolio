/** @typedef {import('ts-jest')} */
/**
 * This is our jest configuration
 *
 * @type {import('@jest/types').Config.InitialOptions}
 */

const jestConfig = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
};

module.exports = jestConfig;
