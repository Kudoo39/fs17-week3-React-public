import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo"></div>

      <div className="navigation__nav">
        <Link to="/" className="navigation__nav__link">
          <div>Home</div>
        </Link>
        <Link to="/breweries" className="navigation__nav__link">
          <div>List of Breweries</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav
