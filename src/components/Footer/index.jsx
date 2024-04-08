import './Footer.scss'
import Logo from '../../assets/images/logo-bl.svg'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={Logo} alt="Kasa" />
      <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
