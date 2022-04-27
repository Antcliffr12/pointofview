import React from 'react'
import './hero.scss';

function HeroSection() {
  return (
    <div className='hero' id="home">
        <div className='hero-bg'>
          
          <video autoplay loop muted src={video} type='video/mp4' />
        </div>
    </div>
  )
}

export default HeroSection