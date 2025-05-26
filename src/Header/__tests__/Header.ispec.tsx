import { render, screen } from '@testing-library/react'
import { Header } from '../Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header component', () => {
  it('Muestra el logo de dulces pétalos', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByTestId('logo')).toBeDefined()
  })
})
