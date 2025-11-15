import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (cube) {
        gsap.set(cube, { rotationX: -20, rotationY: -30 });
        gsap.to(cube, {
            rotationY: 330,
            rotationX: -40,
            duration: 4,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true
        });
    }

    gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 3.5,
        ease: 'power1.inOut'
    })

  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
        <div ref={cubeRef} className="cube">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
        </div>
        <h1 className="preloader-title">PAYCOIN</h1>
        <p className="preloader-subtitle">LET'S START TRADING & MINING TODAY</p>
    </div>
  );
};

export default Preloader;