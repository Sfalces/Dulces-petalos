import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { ApiClient } from 'core/Shared/domain/ApiClient'
import { MockProxy } from 'jest-mock-extended'
import { Flower } from 'core/Flowers/domain/Flower'
import { apiFlowerRepository } from '../apiFlowerRepository'
import { FlowerDetails } from 'core/Flowers/domain/FlowerDetails'

describe('apiFlowerRepository', () => {
  let mockedApiClient: MockProxy<ApiClient>

  beforeEach(() => {
    mockedApiClient = mockAsFunction('apiClient')
  })

  it('should get the flowers', async () => {
    const fakeFlowers: Flower[] = [
      {
        id: '1',
        name: 'Rosa',
        price: 10,
        binominalName: 'RosusLupus',
        fertilizerType: 'yes',
        heightInCm: 1,
        wateringsPerWeek: 1,
        imgUrl: 'image'
      },
      {
        id: '2',
        name: 'Lirio',
        price: 12,
        binominalName: 'LirioLupus',
        fertilizerType: 'yes',
        heightInCm: 1,
        wateringsPerWeek: 1,
        imgUrl: 'image'
      }
    ]

    mockedApiClient.get.mockResolvedValue({ data: fakeFlowers, status: 200 })

    const repo = apiFlowerRepository({ apiClient: mockedApiClient })

    const result = await repo.getFlowers()

    expect(mockedApiClient.get).toHaveBeenCalledWith('api/v1/product')
    expect(result).toEqual(fakeFlowers)
  }),
    it('should get the flower details', async () => {
      const fakeFlowerDetails: FlowerDetails = {
        id: '1',
        name: 'Rosa',
        price: 10,
        binominalName: 'RosusLupus',
        fertilizerType: 'yes',
        heightInCm: 1,
        wateringsPerWeek: 1,
        imgUrl: 'image'
      }

      mockedApiClient.get.mockResolvedValue({ data: fakeFlowerDetails, status: 200 })

      const repo = apiFlowerRepository({ apiClient: mockedApiClient })

      const result = await repo.getFlowerDetails('1')

      expect(mockedApiClient.get).toHaveBeenCalledWith('api/v1/product/1')
      expect(result).toEqual(fakeFlowerDetails)
    })
})
