import React from 'react'



const Navbar = () => {
  return (
    <div className='container pt-8 text'>
        <div className='flex justify-between items-center text-green-100'>
            <div className='text-xl font-medium'>NATURE</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              <li className='menuLink'><a href="/">Home</a></li>
              <li className='menuLink'><a href='/about'>About</a></li>
              <li className='menuLink'><a href='/contact'>Contact</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
