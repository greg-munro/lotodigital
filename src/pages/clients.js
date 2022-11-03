import React from 'react'
import Navbar from './components/Navbar'
import './clients.css'

const clients = () => {
  return (
    <>
      <Navbar />
      <div className='client-cards'>
        {/* 1 */}
        <div class='container'>
          <div class='card'>
            <div class='imgBx'>
              <img src='https://tinypic.host/images/2022/11/02/Screenshot-2022-11-02-at-11.56.04.png' />
            </div>
            <div class='contentBx'>
              <h2>Greg Munro</h2>
              <h5>frontend developer, barcelona</h5>
              <div class='size'></div>
              <div class='color'></div>
              <a href='https://greg-munro.com/' target='_blank'>
                visit
              </a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div class='container-1'>
          <div class='card-1'>
            <div class='imgBx-1'>
              <img src='https://tinypic.host/images/2022/11/02/Screenshot-2022-11-02-at-12.02.39.png' />
            </div>
            <div class='contentBx-1'>
              <h2>Berghain Bootcamp</h2>
              <h5>quiz game based on techno music</h5>
              <div class='size-1'></div>
              <div class='color-1'></div>
              <a href='https://gmunro90.github.io/Berghain-Bootcamp/' target='_blank'>
                visit
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div class='container-2'>
          <div class='card-2'>
            <div class='imgBx-2'>
              <img src='https://i.postimg.cc/VLQ6thRR/Screenshot-2022-11-02-at-12-15-13.png' />
            </div>
            <div class='contentBx-2'>
              <h2>Food Talleres</h2>
              <h5>cooking classes website, barcelona</h5>
              <div class='size-2'></div>
              <div class='color-2'></div>
              <a href='https://talleres-barcelona-food.netlify.app/' target='_blank'>
                visit
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default clients

export const Head = () => <title>loto digital</title>
