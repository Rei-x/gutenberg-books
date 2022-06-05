// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: "jsdom",
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
    "^.+\\.har?$": "./config/transformers/json-transformer.js",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!firebase|@firebase)"],
  silent: true,
};

export default customJestConfig;
