import { container } from '_di/container'
import { coreModules } from '../modules/coreModules'

export const registerCoreModules = () => container.register({ ...coreModules })
