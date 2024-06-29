import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const HeroText = () => {

  const { scrollY } = useScroll()

  const [direction, setDirection] = useState(1)

  // agar sidha scroll kar rhe hai to direction ki value 1 and  
  // agar ulta scroll kar rhe hai to direction ki value -1

  useEffect(() => {

    const handleScroll = () => {
      const scrollingValue = scrollY.get() - scrollY.getPrevious()

      if (scrollingValue > 0) {
        setDirection(1)
      } else {
        setDirection(-1)
      }
    }

    scrollY.on("change", handleScroll)

  }, [scrollY]);



  return (
    <motion.div
      className='absolute top-[60%] whitespace-nowrap'

      initial={{
        x: -3350
      }}
      animate={{
        x: direction > 0 ? -6700 : 0
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <h1 className='whitespace-nowrap inline-block font-normal text-[15vw] text-white'>Dennis Snellenberg - </h1>
      <h1 className='whitespace-nowrap inline-block font-normal text-[15vw] text-white'>Dennis Snellenberg - </h1>
      <h1 className='whitespace-nowrap inline-block font-normal text-[15vw] text-white'>Dennis Snellenberg - </h1>
      <h1 className='whitespace-nowrap inline-block font-normal text-[15vw] text-white'>Dennis Snellenberg - </h1>
      <h1 className='whitespace-nowrap inline-block font-normal text-[15vw] text-white'>Dennis Snellenberg - </h1>
    </motion.div>
  );
};

export default HeroText;