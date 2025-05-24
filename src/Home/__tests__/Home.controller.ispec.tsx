import { render, screen } from '@testing-library/react'
import '../Home.css'
import { MockProxy } from 'jest-mock-extended'
import { FlowerRepository } from 'core/Flowers/domain/FlowerRepository'
import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { aFlower } from 'core/Flowers/infrastructure/__builders__/FlowersBuilder'
import { HomeController } from '../Home.controller'

describe('Home component', () => {
  let mockedGetFlowers: MockProxy<FlowerRepository>

  beforeEach(() => {
    mockedGetFlowers = mockAsFunction('flowerRepository')

    mockedGetFlowers.getFlowers.mockResolvedValue([aFlower()])
  })

  it('should shows a flower card', async () => {
    render(<HomeController />)

    expect(screen.findByText('Rosa')).toBeDefined()
  })
})
