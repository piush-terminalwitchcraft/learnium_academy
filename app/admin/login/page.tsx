"use client"
import {Button, CustomInput} from '@/Components/Elements'
import React from 'react'
import "./style.css"
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter();

  const handleLogin = () => {
    router.push('/Admin')  
  }

  return (
    <div>
      <div className='form-body'>
        <CustomInput
          type='email'
        />

        <CustomInput 
          type='password'
        />

        <Button 
          onClick={handleLogin}
        >Log in</Button>

      </div>
    </div>
  );
}
