import React from 'react'
import './about.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

function about({setPlayState}) {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />

          
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi assumenda quis, illum, praesentium dicta ratione architecto totam delectus ipsam voluptate maxime, neque quidem reprehenderit vitae nam veniam beatae dolores accusamus tenetur placeat. Sed aspernatur quisquam veritatis nulla magni, laudantium quasi dolorum doloribus, harum maiores voluptate atque aperiam? Maiores, sunt.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nesciunt at dolor vel nemo eligendi earum. Itaque soluta eum aperiam, quam quibusdam iusto nesciunt animi necessitatibus, quaerat saepe aliquid natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem pariatur nisi iusto nesciunt aperiam nemo nobis consequuntur, at quis animi tempora, inventore eum, non corporis ipsum voluptatem. Minima, deserunt!</p>
        </div>
    </div>
  )
}

export default about