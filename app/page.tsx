
import Image from 'next/image'
import './style.css'
import { Button, CustomInput } from '@/Components/Elements'

export default function Home() {
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

              <CustomInput type='email' placeholder='Enter phone number ' style={{ "height": "40px", width: "99%" }} />
              <Button style={{ "height": "40px", "margin": "0 8px" }}><svg style={{ "height": "30px" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64ccc5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Button>
            </div>
          </div>
        </div>
        <video autoPlay={true} muted >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* <Image src={'/teachwwwwwwwwwwwwwwwer.png'} height={300} width={300} alt='logo-image' /> */}
      </div>
      <div className='main-subheader'>Courses</div>
      <div className='main-course left'>
        <div className='content'>
          <div className='title'>JEE Course</div>
          <div  className='item'>Courses and features for class 11</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus </div>
          <div className='item'>Courses and features for class 12</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus</div>
          
        </div>
      </div>
      <div className='main-course right'>
        <div className='content'>
          <div  className='title'>NEET Course</div>
          <div  className='item'>Courses and features for class 11</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus at, iste quaerat quod ratione numquam illum accusantium, </div>
          <div className='item'>Courses and features for class 12</div>
          <div className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae praesentium hic accusamus doloribus a</div>
          
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

          <CustomInput type='email' placeholder='Enter your phone number ' style={{ "height": "40px" }} />
          <Button style={{ "height": "40px", "margin": "0 8px" }}><svg style={{ "height": "30px" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#64ccc5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Button>
        </div>
      </div>

      <div className='main-subheader'>Our Aim</div>
      <div className='description'> Lorem ipsum dolor sit amet consectetur </div>
          
      <div className='main-subheader'>About our team </div>
      <div className='description'> Lorem ipsum dolor sit amet consectetur </div>
          
    </main>
  )
}


