import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='fixed z-50 p-10 w-full h-20 top-0 left-0 flex items-center justify-between'>
      
        <NavbarLeft />
        <NavbarRight />
        <Menu />
      
    </div>
  )
}

export default Navbar
