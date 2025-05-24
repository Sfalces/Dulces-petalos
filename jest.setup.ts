import '@testing-library/jest-dom'
import { registerCoreModules } from './src/_di/registers/registerCoreModules'

beforeAll(() => {
  registerCoreModules()
})
