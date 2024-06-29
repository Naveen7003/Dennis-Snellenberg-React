import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroImage from './HeroImage'
import HeroText from './HeroText'
import HeroFlex from './HeroFlex'

const HomePage = () => {
  return (
    <div className='h-auto'>
      <Navbar />
      <HeroImage />
      <HeroFlex />
      <HeroText />
    </div>
  )
}

export default HomePage