"use client"
import React, { useState } from 'react'
import './../style.css'
import { Button, Card } from '@/Components/Elements';
import Image from 'next/image';



export default function Page() {
   const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <div className='main-page'>
      <button className='dropdown-btn'>Select a Topic</button>
      <ul className='topic-list'>
          <li>Sets and functions</li>
          <li>Relations and functions</li>
          <li>Trigonometric Functions</li>
          <li>Principle of Mathematical Induction</li>
          <li>Complex Numbers and Quadratic Equations</li>
          <li>Linear Inequalities</li>
          <li>Permutations and Combinations</li>
          <li>Binomial Theorem</li>
          <li>Sequence and Series</li>
          <li>Straight Lines</li>
          <li>Conic Sections</li>
          <li>Introduction to Three–dimensional Geometry</li>
          <li>Limits and Derivatives</li>
          <li> Mathematical Reasoning</li>
          <li>Statistics</li>
          <li>Probability</li>
        </ul>
      <div className='resource-list'>
        <div className='banner'>Resources</div> 
        <div className='flex flex-wrap'>
          <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
       <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
  <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
  <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
  <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
  <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Formula cheatsheet</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>

        </div>
        <div className='banner'>Test links</div> 
        <div className='flex flex-wrap'>
          <Card style={{"width":"256px", "height":"128px"}}>
            <div>Test 1</div> 
            <div>Duration - 2 hrs</div>
            <div></div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScDB70xIRKVF32S5w9a9akGZ0BWluQlxx4kpOiqkLEipxrqJQ/viewform" target='_blank'>
              <Button>Open test</Button>
            </a>
          </Card>

        </div>
        <div className='banner'>Other resources/ References</div> 
          <div className='flex flex-wrap'>
        <Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>Previous year question 2020</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>
<Card style={{"width":"256px", "height":"256px"}}>
            <Image alt='hi' src={'https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961'} width={128} height={128} />
            <div>PYQ 2019</div>
            <a href="https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1" download="Rishabh's Resume" target='_blank'>
              <Button>Download</Button>
            </a>
          </Card>

        </div>

      </div>
    </div>
  )
}
