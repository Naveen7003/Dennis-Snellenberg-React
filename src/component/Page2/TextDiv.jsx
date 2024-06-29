import React, { useRef, useState } from "react";
import HoveringText from './HoveringText';
import { motion } from 'framer-motion';

const TextDiv = () => {
  const hoverRef = useRef(null);
  const overlayRef = useRef(null);
  const [imageScroll, setimageScroll] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const HoverTextArray = ['TWICE', 'The Damai', 'Fabric', 'Aanstekelijk'];

  const mouseMoving = (e) => {
    const { clientX, clientY } = e;
    const { x, y } = overlayRef.current.getBoundingClientRect();
    hoverRef.current.style.left = `${clientX - x}px`;
    hoverRef.current.style.top = `${clientY - y}px`;
  };

  return (
    <div
      ref={overlayRef}
      onMouseMove={mouseMoving}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative h-screen"
    >
      <motion.div
        ref={hoverRef}
        id="imagediv"
        className="h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 absolute z-30 overflow-hidden"
        animate={{ scale: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full w-full"
          animate={{ y: `-${imageScroll}%` }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="h-full w-full object-cover object-center"
            src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg"
            alt=""
          />
        </motion.div>
      </motion.div>
      <div>
        {HoverTextArray.map((elem, idx) => (
          <HoveringText
            key={idx}
            translate={idx * 100}
            setimageScroll={setimageScroll}
            text={elem}
            setIsHovering={setIsHovering}
          />
        ))}
      </div>
    </div>
  );
};

export default TextDiv;
