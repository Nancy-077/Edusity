import React, { useEffect, useState } from 'react'
import Logo from '../../assets/edusity_assets/logo.png'
import './navbar.css'
import {Link} from 'react-scroll'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'


function navbar() {

   const [sticky, setSticky]=useState(false);


  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
           window.scrollY > 50? setSticky(true): setSticky(false)
             })
  },[])
  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu= ()=>{
       mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className= {`container ${sticky? 'dark-nav': ''}`} >
        <img src={Logo} alt=""  className='logo'/>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonial</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact us</Link></li>
        </ul>
         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
    
  )
}


export default navbar