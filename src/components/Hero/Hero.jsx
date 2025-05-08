import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
    <div className="hero-text">
    <h1>We Ensur better education fir a better world</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam laboriosam, placeat harum dolorum velit, iusto repellat nobis rerum quae quaerat ratione qui incidunt eveniet ex, suscipit dolorem voluptates tempore!</p>
    <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Hero