import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <>
      <h1 className="travel-trip">Trave Trip</h1>
      <ul className="nav-items">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/trip" className="nav-link">
          <li className="nav-item">Trip</li>
        </Link>
      </ul>
      <>
        <button type="button" className="logout">
          Logout
        </button>
      </>
    </>
  </nav>
)

export default Header
