import { FlowerRepository } from '../domain/FlowerRepository'

interface Dependencies {
  flowerRepository: FlowerRepository
}

export const getFlowerDetails =
  ({ flowerRepository }: Dependencies) =>
  (id: string) =>
    flowerRepository.getFlowerDetails(id)
