"use client"
import React, { useState } from 'react'
import './style.css'
import { Button, CustomInput, TagInput } from '@/Components/Elements'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { adminAddBatch, adminAddStudent } from '@/app/Redux/slice'

export default function Page() {

  const router = useRouter()
  const dispatch = useDispatch<any>()
  
  const [tags, setTags] = useState<string[]>([])
  const [academicYear, setAcademicYear] = useState("");
  const [course, setCourse] = useState("");
  const [batchName, setBatchName] = useState("");

  async function CreateClassroom(){
    try {
      const res = await dispatch(adminAddBatch({
        academicYear,
        course,
        batchName,
      }));
      const batchID = res.payload.data.batchID;

      console.log(res.payload.data.batchID);
      const promises = tags.map( async (tag) => {
        const promise = await dispatch(adminAddStudent({
          batchID,
          userEmail: tag
        }))
        return promise;
      })

      const results = await Promise.all(promises);
      console.log(results, res);
      return res;
      // console.log(batchName, academicYear, course);
    } catch (error) {
      throw error; 
    }
  }

  return (
    <div className='new-classroom-body'>
        <div>Enter batch name</div>
        <CustomInput placeholder='Batch name' type='string' value={batchName}
        onChange={(e)=>setBatchName(e.target.value)}/>
        <div>Enter academic year</div>
        <CustomInput placeholder='Academic year' type='string' value={academicYear}
        onChange={(e)=>setAcademicYear(e.target.value)}/>
        <div>Enter course</div>
        <CustomInput placeholder='Course' type='string' value={course}
        onChange={(e)=>setCourse(e.target.value)}/>
        <div>Enter email/ roll number of students enrolled</div>
        <TagInput tags={tags} onTagsChange={setTags}/>
        <Button onClick={()=>{CreateClassroom()}}>Add new classroom</Button>
        {/* <CustomInput placeholder='No of students' type='number'/> */}
        {/* <CustomInput placeholder='No of exams' type='number'/> */}

    </div>
  )
}
