import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header component', () => {
  it('Muestra el logo de dulces pétalos', () => {
    render(<Header />)
    expect(screen.getByTestId('logo')).toBeDefined()
  })
})
