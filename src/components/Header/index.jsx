import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/images/logo.svg'

function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="Kasa" />
      </Link>
      <nav>
        <ul className="header-menu">
          <li className={`header-menu__item ${currentPath === '/' ? 'active' : ''}`}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={`header-menu__item ${currentPath === '/a-propos' ? 'active' : ''}`}>
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
