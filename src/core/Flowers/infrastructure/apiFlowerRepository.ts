import { ApiClient } from '../../Shared/domain/ApiClient'
import { FlowerRepository } from '../domain/FlowerRepository'
import { FlowerDto } from './dto/FlowerDto'

interface Dependencies {
  apiClient: ApiClient
}

export const apiFlowerRepository = ({ apiClient }: Dependencies): FlowerRepository => ({
  getFlowers: async () => {
    const { data: flowersDto } = await apiClient.get<FlowerDto[]>('api/v1/product')

    return flowersDto.map(flowers => ({
      binomialName: flowers.binomialName,
      id: flowers.id,
      imgUrl: flowers.imgUrl,
      name: flowers.name,
      price: flowers.price
    }))
  },
  getFlowerDetails: async (id: string) => {
    const { data: flowerDetailsDto } = await apiClient.get<FlowerDto>(`api/v1/product/${id}`)

    return {
      binomialName: flowerDetailsDto.binomialName,
      fertilizerType: flowerDetailsDto.fertilizerType,
      imgUrl: flowerDetailsDto.imgUrl,
      name: flowerDetailsDto.name,
      price: flowerDetailsDto.price,
      wateringsPerWeek: flowerDetailsDto.wateringsPerWeek
    }
  }
})
