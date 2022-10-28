import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <>
       <nav>
        <div className='nav-logo'>
        <Link to="/">
          <img
            className='nav-loto'
            src='/static/lotologo.png'
            alt='loto-logo'
          /> </Link>
        </div>
        <div className='nav-btns-right'>
          <a className='projects-btn'><Link to="/projects">projects</Link></a>
          <a className='contact-btn'><Link to="/contact">contact</Link></a>
        </div>
      </nav>

    </>
  )
}

export default Navbar