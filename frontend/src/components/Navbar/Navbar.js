import React from "react"

import Button from './Button'

import Logo from '../../assets/logo.png'

function Navbar() {
    return (
       <header className='home'>
           <nav role='navigation' id='nav-main'>
               <div id='brand'>
                   <img src={Logo} alt=''/>
               </div>
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/about-us">About Us +</a>
                       {/*Dropdown*/}
                       <ul id="dropdown">
                           <li><a href='/our-family'>Our Family</a></li>
                           <li><a href='/our-story'>Our Story</a></li>
                       </ul>
                   </li>
                   <li>
                       <a href="/services">Services +</a>
                       {/*Dropdown*/}
                       <ul id="dropdown">
                           <li><a href='/floral-design'>Floral Design</a></li>
                           <li><a href='/photography-and-media'>Photography and Media</a></li>
                       </ul>
                   </li>
                   <li><a href="/Reviews">Reviews</a></li>
                   <li><a href="/contact-us">Contact Us</a></li>
               </ul>
               <Button>Login</Button>
           </nav>
       </header>
    )
}

export default Navbar