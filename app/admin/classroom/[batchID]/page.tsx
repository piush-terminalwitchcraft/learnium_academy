"use client"
import React, {useEffect, useState} from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import { adminAddStudent, adminGetBatchDetails, adminRemoveBatch } from '@/app/Redux/slice'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { BatchDetails } from '@/Utils/Types'
import { Button, CustomInput } from '@/Components/Elements'

const FEATURES = [
  {
    name: "Overview",
    image: "/upload_articles.png"
  },
  {
    name: "Manage students",
    image: "/upload_articles.png"
  },
  {
    name: "Manage exam results",
    image: "/upload_articles.png"
  }

]


function Page({params}: {params: {batchID: string}}) {

  // all variables, states 
  const {batchID} = params;
  const dispatch = useDispatch<any>();
  const [page, setPage] = useState(FEATURES[1].name); 
  const [batchDetails, setBatchDetails] = useState<BatchDetails|undefined>();

   // all api calls   
  async function fetchDetails(){
    const res = await dispatch(adminGetBatchDetails({batchID})); 
    console.log(res)
    setBatchDetails(res.payload.data);
    return res.payload.data;
  }

  async function addStudent(payload: any){
    const res = await dispatch(adminAddStudent(payload))
    await fetchDetails();
    console.log(res);
    return res;
  }

  async function removeBatch(batchID: string) {
    try {
      const res = await dispatch(adminRemoveBatch({batchID}));
      toast.success("Successfully deleted", {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light'
      })
    } catch (error) {
      toast.error(`Error ${error}`, {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light'
      }) 
    }
  }


  // all functionalities 
   function handleSidebarClick(action: string){
    if(FEATURES[0].name === action){
      setPage(FEATURES[0].name); 
    }
    else if( FEATURES[1].name === action){
      setPage(FEATURES[1].name);
    } else {
      setPage(FEATURES[2].name);
    }  
  }


  // all components
 const Sidebar = () => {
    return (
      <div className='batch-sidebar'>
        {
          FEATURES.map((feature: {name: string, image: string}) => {
            return(
              <div className='flex batch-sidebar-items' key={feature.name}>
                <Image src={feature.image} width={48} height={48} alt={feature.name + "logo"}/>
                <div key={feature.name} 
                  onClick={()=>{
                    handleSidebarClick(feature.name);
                  }}  
                >
                  {feature.name}
                </div>
              </div>
            )
          })  
        }
      </div>
    )
  }
  
  const Overview = () => {

    return (
      <></>
    )
  }

  const ManageStudents = () => {

    useEffect(()=>{},[batchDetails])
    const [email, setEmail] = useState<string>('');    

    return (
      <div>
        <CustomInput type='email' placeholder='Enter email address to add students'
          className='batch-students-input'
          value={`${email}`}
          style={{'width': "60vw"}}
          onChange={(e)=>setEmail(e.target.value)} 
          onKeyDown={(e)=>{
            console.log(email)
            if(e.key === 'Enter'){ 
              addStudent({
                batchID: batchDetails?.batchdetails.batchID,
                userEmail: email
              }) 
            }
          }} 

        />
        <ul>
          {batchDetails?.batchdetails.studentsID.map((student)=> {
            return(
              <li key={student.userID}
              className='flex' style={{"width":"95%","margin":"16px", "padding":"4px"}}>
                <div style={{"flex":"2"}}>{student.userName}</div>
                <div style={{"flex":"2"}}>{student.userEmail} </div>
                <Button style={{"flex":"1"}}>Remove from batch</Button>

              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const ManageExams = () => {

    useEffect(()=>{},[batchDetails])

    const [examID, setExamID] = useState<string|null>(null);
    return (
      <>
        {/* See all exams */} 
        {
          examID? 
            <div>E1</div>
          : 
            <div>
              {batchDetails?.exams.map((exam)=>{
                return (
                  <div key={exam.examName}>

                  </div>
                )
              })} 
            </div>
        }
      </>
    )
  }

  const Body = () => {
    const PageBody = () => {
      if(page === FEATURES[0].name){
        return (
          <div>
            {FEATURES[0].name}
            <Overview/>
          </div>
        ) 
      } else if(page === FEATURES[1].name) {
        return (
          <ManageStudents/>
        ) 
      } else {
        return (
          <div>
            <ManageExams/>
          </div>
        ) 
      }
    }
    return (
      <div className='batch-body' >
        <PageBody />
      </div>
    );
  }

  
  useEffect(()=>{
    fetchDetails(); 
  },[])

  useEffect(()=>{
  },[batchDetails])

  return (
    <div className='batch'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default Page;
