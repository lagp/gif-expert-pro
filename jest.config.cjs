const { createDefaultPreset } = require("ts-jest");

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.cjs'],
  ...createDefaultPreset(),
}
