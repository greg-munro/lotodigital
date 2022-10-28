import * as React from 'react'
import '../index.css'

const IndexPage = () => {
  return (
    <>
      <nav>
        <div className='nav-logo'>
          <img className='nav-loto' src='/static/lotologo.png' alt='loto-logo' />
        </div>
        <div className='nav-btns-right'>
          <span className='projects-btn'>projects</span>
          <span className='contact-btn'>contact</span>
        </div>
      </nav>

      <div className='hero'>
      <h1 className='hero-text'>design & innovation</h1>
      <img src="/static/lotodigital.png" className='lotodigital' />
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
