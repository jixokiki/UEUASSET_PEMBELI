import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Division from './Division';
import Division2 from './Division2';


const ParallaxComponents = () => {
  return (
    <ParallaxProvider>
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <Parallax y={[0, 0]} tagOuter="figure">
        <img src="https://placekitten.com/800/600" alt="Kitten 1" />
      </Parallax>

      <Parallax y={[0, 100]} tagOuter="figure">
        <img src="https://placekitten.com/800/601" alt="Kitten 2" />
      </Parallax>

      <Parallax y={[0, 200]} tagOuter="figure">
        <img src="https://placekitten.com/800/602" alt="Kitten 3" />
      </Parallax>

      {/* Tambahkan lebih banyak elemen Parallax sesuai kebutuhan */}
    </div>
  </ParallaxProvider>
  );
}

export default ParallaxComponents
