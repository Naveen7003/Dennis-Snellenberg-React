import React from 'react';

const HoveringText = ({ text, translate, setimageScroll, setIsHovering }) => {
  const handleMouseEnter = () => {
    setimageScroll(translate);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='hover:px-40 hover:text-gray-400 transition-all p-20 flex justify-between items-center border-t-2'
    >
      <h1 className='text-9xl'>{text}</h1>
      <p className='text-lg'>Design & Development</p>
    </div>
  );
};

export default HoveringText;
