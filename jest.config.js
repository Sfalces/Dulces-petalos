const { createDefaultPreset } = require('ts-jest')

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    ...tsJestTransformCfg
  },
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1',
    '^_di/(.*)$': '<rootDir>/src/_di/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
