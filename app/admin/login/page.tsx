"use client"
import {Button, CustomInput} from '@/Components/Elements'
import React from 'react'
import "./style.css"
import { useRouter } from 'next/navigation'

export default function page() {

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
          children={"Log in"}
          onClick={handleLogin}
        />

      </div>
    </div>
  );
}
