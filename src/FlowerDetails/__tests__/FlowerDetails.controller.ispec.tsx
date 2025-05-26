import { mockAsFunction } from '_di/__mocks__/mockAsFunction'
import { FlowerRepository } from 'core/Flowers/domain/FlowerRepository'
import { aFlower } from 'core/Flowers/infrastructure/__builders__/FlowersBuilder'
import { MockProxy } from 'jest-mock-extended'
import { FlowerDetails } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Home } from '../../Home'

describe('FlowerDetails', () => {
  let mockedGetFlowerDetails: MockProxy<FlowerRepository>

  beforeEach(() => {
    mockedGetFlowerDetails = mockAsFunction('flowerRepository')

    mockedGetFlowerDetails.getFlowerDetails.mockResolvedValue(aFlower())
  })

  it('should shows flower details', async () => {
    render(
      <MemoryRouter>
        <FlowerDetails />
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getAllByText('Rosa')).toBeDefined())

    expect(screen.getByText('Fertilizar con nitrato')).toBeDefined()
  })

  it('should navigate to home if clicks on Inicio', async () => {
    render(
      <MemoryRouter>
        <Home />
        <FlowerDetails />
      </MemoryRouter>
    )

    const inicio = screen.getByText('Inicio')
    await userEvent.click(inicio)

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Busca en nuestra tienda')).toBeDefined()
    })
  })
})
