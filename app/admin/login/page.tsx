"use client"
import {Button, CustomInput} from '@/Components/Elements'
import React, { useState } from 'react'
import "./style.css"
import { useRouter } from 'next/navigation'
import { adminLogin, setError, setSuccess, initialize} from '@/app/Redux/slice'
import { useDispatch } from 'react-redux'
import { RootState, store } from '@/app/Redux/store'
import { toast } from 'react-toastify'

export default function Page() {

  const router = useRouter();
  const dispatch = useDispatch<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 


  const handleLogin = async () => {
    await dispatch(adminLogin({
      email,
      password,
    }))
    const success = (store.getState() as RootState).admin.success;
    const error = (store.getState() as RootState).admin.error;
    if(success !== null) {
      toast.success(success, {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light'
      })
      dispatch(setSuccess(null));
      router.push('/admin'); 
    } else if(error !== null) {
      toast.error(error, {
        position:'top-right',
        autoClose:2000,
        theme: 'light'
      } )
      dispatch(setError(null));
    }
    // dispatch(initialize({}))
  }

  return (
    <div>
      <div className='form-body'>
        <CustomInput
          type='email'
          value={`${email}`} 
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <CustomInput 
          type='password'
          value={`${password}`}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <Button 
          onClick={handleLogin}
        >Log in</Button>

      </div>
    </div>
  );
}
