import { memo } from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__container__title">Footer</div>
      <div className="footer__container__credit">
        Data provided by{' '}
        <a href="https://www.openbrewerydb.org/documentation" target="_blank" rel="noreferrer">
          Open Brewery DB
        </a>
      </div>
      © 2024 - Khang Nguyen
    </footer>
  )
}

export default memo(Footer)
