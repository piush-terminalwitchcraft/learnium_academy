"use client"
import React from 'react'
import "./style.css"
import { Batch } from '@/Utils/Types'
import { Button, CustomInput } from '@/Components/Elements'
import randomColor from 'randomcolor';
import { randomInt } from 'crypto';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  return (
    <div>
      <div className='classroom-header'>
        <CustomInput placeholder='Search batches' type='string'/>
        <Button onClick={()=>{router.push('/Admin/Classroom/New')}}>Add batches</Button>
      </div>
      <div className='classroom-list'>
        {
          exampleBatches.map((batch: Batch) => {
            var color1 = randomColor({
              luminosity: 'light',
              hue: 'blue'
            });
            var color2 = randomColor({
              luminosity: 'dark',
              hue: 'blue'
            });

            if(batch.course === 'NEET'){
              color1 = randomColor({
                luminosity: 'light',
                hue: 'red'
              });
              color2 = randomColor({
                luminosity: 'dark',
                hue: 'red'
              });
            }
            const backgroundColor = `linear-gradient(${color1} 0%, ${color2} 100%)`;
            return <div 
              style={{backgroundImage: backgroundColor}}
            className='classroom-list-item' key={batch.batchID}>
              <div className='top'>
              <div className='heading'>
                {batch.batchName}
              </div>
              <div className='year'>
                {batch.academicYear}
              </div>
              <div className='course'>
                {batch.course}
              </div>
              </div>
              <div className='description'>
                <div>No of students - {batch.studentsID.length}</div>
                <div>No of exams - {3}</div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}


const exampleBatches: Batch[] = [
  {
    batchID: "2",
    academicYear: "2022-23",
    course: "NEET",
    batchName: "NEET 2022-23",
    studentsID: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  }, {
    batchID: "3",
    academicYear: "2022-23",
    course: "NEET",
    batchName: "NEET2 2022-23",
    studentsID: ["1", "2", "3", "4", "5", "7", "8", "9", "10"],
  }, {
    batchID: "4",
    academicYear: "2022-23",
    course: "JEE",
    batchName: "JEE 2022-23",
    studentsID: ["1", "2", "3", "4", "5", "6", "9", "10"],
  }, {
    batchID: "5",
    academicYear: "2022-23",
    course: "JEE2",
    batchName: "JEE2 2022-23",
    studentsID: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  }, {
    batchID: "6",
    academicYear: "2022-23",
    course: "JEE3",
    batchName: "JEE3 2022-23",
    studentsID: ["1", "3", "4", "5", "6", "7", "8", "9", "10"],
  }, {
    batchID: "7",
    academicYear: "2022-23",
    course: "JEE4",
    batchName: "JEE4 2022-23",
    studentsID: ["1", "2", "3", "5", "6", "7", "8", "9", "10"],
  }, {
    batchID: "8",
    academicYear: "2022-23",
    course: "JEE5",
    batchName: "JEE5 2022-23",
    studentsID: ["1", "2", "3", "4",  "9", "10"],
  }
]