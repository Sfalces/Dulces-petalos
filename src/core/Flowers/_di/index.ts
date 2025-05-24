import { asFunction } from '_di/resolvers'
import { apiFlowerRepository } from '../infrastructure/apiFlowerRepository'
import { getFlowers } from '../useCases/getFlowers'
import { getFlowerDetails } from '../useCases/getFlowerDetails'
import { FlowerRepository } from '../domain/FlowerRepository'

export const flowersModules = {
  flowerRepository: asFunction<FlowerRepository>(apiFlowerRepository),
  getFlowers: asFunction(getFlowers),
  getFlowerDetails: asFunction(getFlowerDetails)
}
