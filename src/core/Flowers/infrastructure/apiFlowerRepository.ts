import { ApiClient } from '../../Shared/domain/ApiClient'
import { Flower } from '../domain/Flower'
import { FlowerDetails } from '../domain/FlowerDetails'
import { FlowerRepository } from '../domain/FlowerRepository'

interface Dependencies {
  apiClient: ApiClient
}

export const apiFlowerRepository = ({ apiClient }: Dependencies): FlowerRepository => ({
  getFlowers: async () => {
    const { data } = await apiClient.get<Flower[]>('api/v1/product')
    return data
  },
  getFlowerDetails: async (id: string) => {
    const { data } = await apiClient.get<FlowerDetails>(`api/v1/product/${id}`)
    return data
  }
})
