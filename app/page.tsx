
import Image from 'next/image'
import './style.css'
import { Button, CustomInput } from '@/Components/Elements'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <script src="float-panel.js"></script>
      <div className='flex justify-between'>
        <div>
          <div className='main-header'>
          Learnium academy,<br/> the best coaching to crack <br/> JEE & NEET <br/>  
          <span className='italic underlined'>seamlessely, with ease </span> 
          </div>
          <div className='main-counselling-form flex'>
            <div>Attend our free counselling now </div> 
            <CustomInput type='email' placeholder='Enter your phone number'/>
            <Button>{'>'}</Button>
          </div>
        </div>
        <Image src={'/teacher.png'} height={300} width={300} alt='logo-image' />
      </div>
      <div className='main-subheader'>About our team </div>
      <video autoPlay={true} muted>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className='main-subheader'>Courses</div>
      <div className=''>JEE Courses</div>
    </main>
  )
}
