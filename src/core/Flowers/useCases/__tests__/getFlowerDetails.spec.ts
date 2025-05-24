import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { FlowerRepository } from 'core/Flowers/domain/FlowerRepository'
import { aFlower } from 'core/Flowers/infrastructure/__builders__/FlowersBuilder'
import { MockProxy } from 'jest-mock-extended'
import { getFlowers } from '../getFlowers'
import { getFlowerDetails } from '../getFlowerDetails'

describe('getFlowers', () => {
  let mockedFlowerRepository: MockProxy<FlowerRepository>

  beforeEach(() => {
    mockedFlowerRepository = mockAsFunction('flowerRepository')
  })

  it('return flower details from the apiFlowerRepository', async () => {
    const expectedFlowerDetails = aFlower()
    mockedFlowerRepository.getFlowerDetails.mockResolvedValue(expectedFlowerDetails)

    const result = await getFlowerDetails({ flowerRepository: mockedFlowerRepository })('1')
    expect(result).toBe(expectedFlowerDetails)
  })
})
