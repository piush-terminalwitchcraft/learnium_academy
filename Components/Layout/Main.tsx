import React, {ReactNode} from 'react'
import "./style.css"

interface MainProps{
    children: ReactNode;
}

export default function Main({children}: MainProps) {
  return (
    <main className='main'>
        {children} 
    </main>
  )
}

