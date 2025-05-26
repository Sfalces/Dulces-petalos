import { render, screen, waitFor } from '@testing-library/react'
import '../Home.css'
import { MockProxy } from 'jest-mock-extended'
import { FlowerRepository } from 'core/Flowers/domain/FlowerRepository'
import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { aFlower } from 'core/Flowers/infrastructure/__builders__/FlowersBuilder'
import { HomeController } from '../Home.controller'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { FlowerDetails } from '../../FlowerDetails/FlowerDetails'

describe('Home component', () => {
  let mockedGetFlowers: MockProxy<FlowerRepository>

  beforeEach(() => {
    mockedGetFlowers = mockAsFunction('flowerRepository')

    mockedGetFlowers.getFlowers.mockResolvedValue([aFlower(), aFlower({ name: 'Margarita' })])
  })

  it('should shows a flower card', async () => {
    render(
      <MemoryRouter>
        <HomeController />
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Rosa')).toBeDefined)

    expect(screen.getByText('Rosa')).toBeDefined()
  })

  it('should filter the flowers', async () => {
    render(
      <MemoryRouter>
        <HomeController />
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Rosa')).toBeDefined)

    expect(screen.getByText('Rosa')).toBeDefined()
    const input = screen.getByTestId('search')
    await userEvent.type(input, 'Margarita')
    await screen.findByText('Margarita')

    await waitFor(() => {
      expect(screen.queryByText('Rosa')).not.toBeInTheDocument()
    })
  })

  it('should navigate to flower detail', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomeController />} />
          <Route path="flowerDetails" element={<FlowerDetails />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('Rosa')).toBeDefined)
    expect(screen.getByText('Rosa')).toBeDefined()
    const card = screen.getByText('Rosa')
    await userEvent.click(card)

    await waitFor(() => {
      expect(screen.getByText('Flower Details')).toBeDefined()
    })
  })
})
