"use client"
import React, { useEffect, useState } from 'react'
import './style.css'
import Image from 'next/image'
import { Button } from '.';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false); 

  const [isMobile, setIsMobile] = useState(false)
  
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth <= 600) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener('resize', ()=> {
      console.log(window.innerHeight, window.innerWidth)
  })
  })


  return (
    <nav className='header'>
      <div id='header-mobile' onClick={()=>{setIsOpen(!isOpen)}}>
        {
          isOpen ?
            <div><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64ccc5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 4L20 20M20 4L4 20" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
            :
            <div><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64ccc5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M3 14H21M3 18H21M3 6H21" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div> 
        }
      </div>
      <div>
        {
          // check if width is less than 600 px

          !!isMobile ? 
          <div style={{"fontSize":"2rem", paddingBottom:"0px"}}>Learnium</div> 
          : 
          <Image src={'/logo_transparent.png'} height={100} width={100} alt='logo-image' />
        }
      </div>
      { !!isMobile ? <Button style={{marginLeft:"60px", backgroundColor:"var(--background)"}} >Login</Button> : null}
      <ul id='header-list'
      className={isOpen ? 'header-list-mobile' : ''}
      >
        <li>Home</li>
        <li>Courses</li>
        <li>Articles</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}
