import React from 'react'
import Navbar from './components/Navbar'
import './clients.css'

const clients = () => {
  return (
    <>
      <Navbar />
      <div className='client-cards'>
        {/* 1 */}
        <div className='container'>
          <div className='card'>
            <div className='imgBx'>
              <img src='https://i.postimg.cc/VNbPv3Fq/Screenshot-2022-11-03-at-16-11-30.png' alt='greg munro' />
            </div>
            <div className='contentBx'>
              <h2>Greg Munro</h2>
              <h5>frontend developer, barcelona</h5>
              <div className='size'></div>
              <div className='color'></div>
              <a href='https://greg-munro.com/' target='_blank'>
                visit
              </a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className='container-1'>
          <div className='card-1'>
            <div className='imgBx-1'>
              <img src='https://clasijazz.com/wp-content/uploads/2020/09/irene-reig.jpg' alt='irene reig'/>
            </div>
            <div className='contentBx-1'>
              <h2>Irene Reig</h2>
              <h5>Barcelona based Jazz musician</h5>
              <div className='size-1'></div>
              <div className='color-1'></div>
              <a href='https://irenereigmusic.com/' target='_blank'>
                visit
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='container-2'>
          <div className='card-2'>
            <div className='imgBx-2'>
              <img src='https://i.postimg.cc/VLQ6thRR/Screenshot-2022-11-02-at-12-15-13.png' />
            </div>
            <div className='contentBx-2'>
              <h2>Food Talleres</h2>
              <h5>cooking classes website, barcelona</h5>
              <div className='size-2'></div>
              <div className='color-2'></div>
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
