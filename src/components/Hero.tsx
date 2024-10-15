import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/home.jpg)] bg-center lg:bg-[35%] bg-cover'
    style={{backgroundSize:"110%"}}
    >
      <Navbar />
    <div className='text-light-green-100 container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
        <div className='text-green-100-[50px] sm:text-[80px] font-bold leading-tight left justify-start items-center '>
          <div>
            <p>"Embrace Nature,</p>
            <p>Embrace Life."</p>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Hero
