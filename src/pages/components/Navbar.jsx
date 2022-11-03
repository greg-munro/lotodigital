import React from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const Navbar = () => {
  return (
    <>
       <nav>
        <div className='nav-logo'>
        <Link to="/">
          <img
            className='nav-loto'
            src='https://i.postimg.cc/ZKW8xXmB/lotologo.png'
            alt='loto-logo'
          /> </Link>
        </div>
        <div className='nav-btns-right'>
          <Link className='clients-btn' href="/clients">clients</Link>
          <Link className="contact-btn" href="mailto:gregmunro90@gmail.com?subject=Website enquiry">contact</Link>
        </div>
      </nav>

    </>
  )
}

export default Navbar