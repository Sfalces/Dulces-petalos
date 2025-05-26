import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img data-testid={'logo'} src={'/img/Logo.svg'} />
      </Link>
    </div>
  )
}
