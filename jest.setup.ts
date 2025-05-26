import '@testing-library/jest-dom'
import { registerCoreModules } from './src/_di/registers/registerCoreModules'
import { TextEncoder, TextDecoder } from 'util'
;(global as any).TextEncoder = TextEncoder
;(global as any).TextDecoder = TextDecoder

beforeAll(() => {
  registerCoreModules()
})
