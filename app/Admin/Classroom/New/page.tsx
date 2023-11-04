import React from 'react'
import './style.css'
import { Button, CustomInput, TagInput } from '@/Components/Elements'

export default function () {
  return (
    <div className='new-classroom-body'>
        <div>Enter batch name</div>
        <CustomInput placeholder='Batch name' type='string'/>
        <div>Enter academic year</div>
        <CustomInput placeholder='Academic year' type='string'/>
        <div>Enter course</div>
        <CustomInput placeholder='Course' type='string'/>
        <div>Enter email/ roll number of students enrolled</div>
        <TagInput/>
        <Button>Submit</Button>
        {/* <CustomInput placeholder='No of students' type='number'/> */}
        {/* <CustomInput placeholder='No of exams' type='number'/> */}

    </div>
  )
}
