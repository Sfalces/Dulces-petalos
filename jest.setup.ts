import '@testing-library/jest-dom'
import { registerCoreModules } from './src/_di/registers/registerCoreModules'
import { TextEncoder, TextDecoder } from 'util'
;(global as any).TextEncoder = TextEncoder
;(global as any).TextDecoder = TextDecoder

beforeAll(() => {
  registerCoreModules()
})

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})
