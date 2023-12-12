"use client"
import React, {useEffect, useState} from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import { adminGetBatchDetails, adminRemoveBatch } from '@/app/Redux/slice'
import { toast } from 'react-toastify'
import Image from 'next/image'

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
  const [page, setPage] = useState(FEATURES[0].name); 

   // all api calls   
  async function fetchDetails(){
    const res = await dispatch(adminGetBatchDetails({batchID})); 
    return res.payload.data;
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

  const Body = () => {

    return <div className='batch-body' ></div>
  }


  return (
    <div className='batch'>
       <Sidebar />
      <Body />

    </div>
  )
}

export default Page;
