import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { FlowerRepository } from 'core/Flowers/domain/FlowerRepository'
import { aFlower } from 'core/Flowers/infrastructure/__builders__/FlowersBuilder'
import { MockProxy } from 'jest-mock-extended'
import { getFlowers } from '../getFlowers'

describe('getFlowers', () => {
  let mockedFlowerRepository: MockProxy<FlowerRepository>

  beforeEach(() => {
    mockedFlowerRepository = mockAsFunction('flowerRepository')
  })

  it('return flowers from the apiFlowerRepository', async () => {
    const expectedFlowers = [aFlower(), aFlower({ name: 'margarita' })]
    mockedFlowerRepository.getFlowers.mockResolvedValue(expectedFlowers)

    const result = await getFlowers({ flowerRepository: mockedFlowerRepository })()
    expect(result).toBe(expectedFlowers)
  })
})
