"use client"
import Image from 'next/image';

import './style.css'
import { useState } from 'react';
import { Button, CustomInput } from '@/Components/Elements'
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from 'react-redux';
import Link from 'next/link';

export default function Home() {

  const JEEResources = () => {
    const [visible, setIsVisible] = useState<number | null>(null);

    return (
      <div className='resources flex justify-evenly'>
        <div className='resource-item'
          onMouseOver={()=> setIsVisible(1)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> Foundational (5-10) </div>
          {
          visible === 1 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/jee/foundational/maths'}>Maths</Link></div>
              <div className='description'><Link href={'/resources/jee/foundational/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/jee/foundational/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>
         <div className='resource-item'
          onMouseOver={()=> setIsVisible(2)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> 11th standard</div>
          {
          visible === 2 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/jee/11/maths'}>Maths</Link></div>
              <div className='description'><Link href={'/resources/jee/11/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/jee/11/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>

          <div className='resource-item'
          onMouseOver={()=> setIsVisible(3)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> 12th standard </div>
          {
          visible === 3 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/jee/12/maths'}>Maths</Link></div>
              <div className='description'><Link href={'/resources/jee/12/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/jee/12/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>
     
      </div>
    );
  }
  const NEETResources = () => {
    const [visible, setIsVisible] = useState<number | null>(null);

    return (
      <div className='resources flex justify-evenly'>
        <div className='resource-item'
          onMouseOver={()=> setIsVisible(1)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> Foundational (5-10) </div>
          {
          visible === 1 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/neet/foundational/biology'}>Biology</Link></div>
              <div className='description'><Link href={'/resources/neet/foundational/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/neet/foundational/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>
         <div className='resource-item'
          onMouseOver={()=> setIsVisible(2)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> 11th standard</div>
          {
          visible === 2 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/neet/11/biology'}>Biology</Link></div>
              <div className='description'><Link href={'/resources/neet/11/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/neet/11/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>

          <div className='resource-item'
          onMouseOver={()=> setIsVisible(3)} 
          onMouseOut={()=>setIsVisible(null)}
        >
          <div className='item'> 12th standard </div>
          {
          visible === 3 && (
            <div className='dropdown'>
              <div className='description'><Link href={'/resources/neet/12/biology'}>Biology</Link></div>
              <div className='description'><Link href={'/resources/neet/12/physics'}>Physics</Link></div>
              <div className='description'><Link href={'/resources/neet/12/chemistry'}>Chemistry</Link></div>
            </div>
          )
        }
        </div>
     
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className='flex justify-between' id='main-header-mobile'>
        <div>
          <div className='main-header'>
            Learnium academy,<br /> the best coaching to crack <br /> JEE & NEET <br />
            <span className='italic underlined'>seamlessely, with ease </span>
          </div>
          <div className='main-counselling-form'>
            <div>Attend free counselling now </div>
            <div className='flex justify-start'>

              <CustomInput type='tel' placeholder='Enter phone number ' style={{ "height": "48px", width: "90%" }} />
              <Button style={{ "height": "48px", "margin": "0 8px" }}>
                <Image src="send.svg" alt='send image' width={48} height={48}  />
              </Button>
            </div>
          </div>
        </div>
        <video autoPlay={true} muted >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='main-subheader'>Courses</div>
      <div className='main-course left'>
        <div className='content'>
          <div className='title'>JEE</div>
          <div className='item'>Access free courses and test links</div>
          <JEEResources />
          <div className='title m-5'>Courses</div>
          <div  className='item'>Courses and features for class 11</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus <Button><a href='/courses/jee/11'>Enroll now!</a></Button> </div>
          <div className='item'>Courses and features for class 12</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus <Button><a href='/courses/jee/12'>Enroll now!</a></Button> </div>
          
        </div>
      </div>
      <div className='main-course right'>
        <div className='content'>
          <div  className='title'>NEET</div>
          <div className='item'>Access free courses and test link</div>
          <NEETResources />
          <div  className='title'>Courses</div>
          <div  className='item'>Courses and features for class 11</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus at, iste quaerat quod ratione numquam illum accusantium, <Button><a href='/courses/neet/11'>Enroll now!</a></Button> </div>
          <div className='item'>Courses and features for class 12</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus a <Button><a href='/courses/neet/12'>Enroll now!</a></Button> </div>
          
        </div>
      </div>
      <div className='main-course'>
        <div className='content'>
          <div  className='title'>Foundation</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus </div>
          
        </div>
      </div>

      <div className='main-subheader'>Take LSAT</div>
      <div className='main-lsat-form'>
        <div>Give LSAT exam now</div>
        <div className='flex justify-center'>

          <CustomInput type='email' placeholder='Enter your phone number ' style={{ "height": "48px" }} />
          <Button style={{ "height": "48px", "margin": "0 8px" }}>
                <Image src="send.svg" alt='send image' width={42} height={42}  />
          </Button>
        </div>
      </div>

      <div className='main-subheader'>Our Aim</div>
      <div className='description'> Lorem ipsum dolor sit amet consectetur </div>
          
      <div className='main-subheader'>About our team </div>
      <div className='description'> Lorem ipsum dolor sit amet consectetur </div>
          
    </main>
  )
}


