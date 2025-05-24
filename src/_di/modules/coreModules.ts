import { flowersModules } from 'core/Flowers/_di'
import { sharedModules } from '../../core/Shared/_di'

export const coreModules = {
  ...flowersModules,
  ...sharedModules
}
