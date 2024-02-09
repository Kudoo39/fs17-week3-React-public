import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <div className="navigation">
      <a href="https://www.openbrewerydb.org/documentation" target="_blank" rel="noreferrer">
        <div className="navigation__logo"></div>
      </a>

      <div className={`navigation__nav`}>
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
