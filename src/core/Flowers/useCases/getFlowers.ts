import { FlowerRepository } from '../domain/FlowerRepository'

interface Dependencies {
  flowerRepository: FlowerRepository
}

export const getFlowers =
  ({ flowerRepository }: Dependencies) =>
  () =>
    flowerRepository.getFlowers()
