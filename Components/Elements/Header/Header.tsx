"use client"
import React, { useEffect, useState } from 'react'
import './style.css'
import Image from 'next/image'
import { Button } from './../';

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
            <div>
              <Image src={'/isOpen.svg'} width={32} height={32} style={{"marginTop":"8px"}} alt='is open?'/>
            </div>
            :
            <div><Image src={'/isClosed.svg'} width={48} height={48} alt='is close?' /></div> 
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

