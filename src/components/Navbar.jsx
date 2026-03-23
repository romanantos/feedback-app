import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => handleClick(e, 'hero')}>
          <span className="navbar__logo-icon">R</span>
          <span className="navbar__logo-text">RAIM</span>
        </a>
        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Services</a></li>
          <li><a href="#approach" onClick={(e) => handleClick(e, 'approach')}>Approach</a></li>
          <li><a href="#results" onClick={(e) => handleClick(e, 'results')}>Results</a></li>
          <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
          <li>
            <a href="#contact" className="btn btn-primary btn--nav" onClick={(e) => handleClick(e, 'contact')}>
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
