import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Studenci</Link></li>
          <li><Link to="/subjects">Przedmioty</Link></li>
          {/* <li><Link to="/groups">Grupy</Link></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
