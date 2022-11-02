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
          <Link className='projects-btn' href="/clients">clients</Link>
          <Link href="mailto:gregmunro90@gmail.com?subject=Website enquiry">contact</Link>
        </div>
      </nav>

    </>
  )
}

export default Navbar