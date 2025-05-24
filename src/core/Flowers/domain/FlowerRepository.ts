import { Flower } from './Flower'
import { FlowerDetails } from './FlowerDetails'

export interface FlowerRepository {
  getFlowers: () => Promise<Flower[]>
  getFlowerDetails: (id: string) => Promise<FlowerDetails>
}
