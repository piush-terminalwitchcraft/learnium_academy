"use client"
import Main from '@/Components/Layout/Main'
import React from 'react';
import "./style.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ADMIN_FEATURES } from '@/Utils/Constants';
import { AdminFeature } from '@/Utils/Types';
import { Card } from '@/Components/Elements';
import Link from 'next/link';
export default function AdminPage () {
  const router = useRouter(); 

  const Profile = () => {
    return (
      <div className='admin-profile'>
        <Image 
          alt='Profile pic'
          src={'/profile_photo.png'}
          height={64}
          width={64}
          onClick={()=>{
            router.push('/Admin/Profile')
          }}  
        />
        
        <div>You are logged in as XYZ</div>
      </div>
    );
  }
  
  

  return (
    <div>
      <Profile/>  
      <h1>Features</h1>
      <div className='admin-features'>
        {
          ADMIN_FEATURES.map((feature: AdminFeature)=>{
            return(
              <Card key={feature.name} style={{"width":"256px"}}>
                <Link href={feature.link}>

                <Image 
                  src={feature.image}
                  alt={`${feature.name}`}
                  width={128}
                  height={128}
                />
                <h2>{feature.name}</h2>
                </Link>
              </Card>
            )
          })
        }
      </div>
      <h1>Insights</h1>
      <div>
        <h2>400+ batches as of now</h2>
        <h2>236 articles as of now</h2>
      </div>
    </div>
  )

}
