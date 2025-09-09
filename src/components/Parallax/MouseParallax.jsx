// src/components/Parallax/MouseParallax.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseParallax = () => {
  const layerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate percentage (-1 to 1)
      const offsetX = (mouseX / innerWidth - 0.5) * 2;
      const offsetY = (mouseY / innerHeight - 0.5) * 2;

      // Animate with GSAP
      gsap.to(layerRef.current, {
        x: offsetX * 30, // adjust intensity
        y: offsetY * 30,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    >
      {/* Background element to move */}
      <div className="w-[200px] h-[200px] bg-pink-500 opacity-20 blur-3xl rounded-full absolute top-1/3 left-1/3" />
    </div>
  );
};

export default MouseParallax;
