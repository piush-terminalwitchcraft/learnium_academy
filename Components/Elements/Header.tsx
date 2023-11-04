import React from 'react'
import './style.css'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex header'>
      <div>
        <Image src={'/logo_transparent.png'} height={100} width={100} alt='logo-image' />
      </div>
      <ul className='flex header-list'>
        <li>Home</li>
        <li>Courses</li>
        <li>Articles</li>
        <li>Contact us</li>
        <li>Login</li>

      </ul>
    </div>
  )
}
