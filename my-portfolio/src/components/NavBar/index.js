import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const NavBar = () => (
  <div id="navigation-bar">
    <nav>
      <ul>
        <li>
          <Link className="logo" to="/hello">
            <img src={LogoS} alt="Logo" />
          </Link>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <a href="#" id="menu-icon"></a>
      </ul>
    </nav>
  </div>
)

export default NavBar
