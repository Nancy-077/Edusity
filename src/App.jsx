import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Program from './components/programs/program'
import Title from './components/Title/Title'
import About from './components/About/about'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'
import VideoPlayer from "./components/VidoePlayer/VidoePlayer"

function App() {

  const [playState, setPlayState]= useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What we Offer'/>
     <Program/>
     <About setPlayState={setPlayState}/>
     <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get In Touch'/>
      <Contact/>
      <Footer/>

     </div>

     <VideoPlayer playState={playState} setPlayState={setPlayState}/>
   
 
    </div>
  )
}

export default App