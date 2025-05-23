import { render, screen } from '@testing-library/react'
import { Home } from '../Home'

describe('Home component', () => {
  it('muestra el título "Dulces pétalos"', () => {
    render(<Home />)
    expect(screen.getByText('Dulces pétalos')).toBeDefined()
  })
})
