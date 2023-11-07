"use client"
import React from 'react'
import './style.css'
import Image from 'next/image'

export default function Header() {

  const [isMobile, setIsMobile] = React.useState(false); 

  return (
    <nav className='header'>
      <div>
        <Image src={'/logo_transparent.png'} height={100} width={100} alt='logo-image' />
      </div>
      <ul id='header-list'
      className={isMobile ? 'header-list-mobile' : ''}
      >
        <li>Home</li>
        <li>Courses</li>
        <li>Articles</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
      <div id='header-mobile' onClick={()=>{setIsMobile(!isMobile)}}>
        {
          isMobile ?
          <div ><svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64ccc5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M3 3.32001L21 21.32" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div> :
          <div ><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64CCC5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></div>
        }
      </div>
    </nav>
  )
}
