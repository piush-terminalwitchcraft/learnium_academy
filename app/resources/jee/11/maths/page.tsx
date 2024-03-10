"use client"
import React, { useEffect, useState } from 'react'
import './../style.css'
import { Button, Card } from '@/Components/Elements';
import Image from 'next/image';
import Dropdown from '@/Components/Elements/Dropdown/Dropdown';



export default function Page() {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [showTopicList, setShowTopicList] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("All topics");
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  const [isMobile, setIsMobile] = useState(false)
  
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth <= 600) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("resize", ()=> {
      console.log(window.innerHeight, window.innerWidth)
    })
  })




  const topics = [
    "All topics",
    "Sets and functions",
    "Relations and functions",
    "Trigonometric Functions",
    "Principle of Mathematical Induction",
    "Complex Numbers and Quadratic Equations",
    "Linear Inequalities",
    "Permutations and Combinations",
    "Binomial Theorem",
    "Sequence and Series",
    "Straight Lines",
    "Conic Sections",
    "Introduction to Three–dimensional Geometry",
    "Limits and Derivatives",
    "Mathematical Reasoning",
    "Statistics",
    "Probability"
  ];
  const topicOptions = topics.map(topic => ({ label: topic, value: topic }));

  // Define the type for each topic's data
  type TopicData = {
    resources: { name: string; url: string; previewImg: string }[];
    testLinks: { name: string; duration: string; url: string }[];
    otherResources: { name: string; url: string; previewImg: string }[];
  };

  // Define the type for the entire topicData object
  type TopicDataType = {
    [key: string]: TopicData;
  };
  const topicData:TopicDataType = {
    "All topics": {
      resources: [
        { 
          name: "Formula cheatsheet", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
          previewImg:"https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
        },   
        { 
          name: "Formula cheatsheet", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
          previewImg:"https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
        },
        { 
          name: "Formula cheatsheet", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
          previewImg:"https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
        },
        { 
          name: "Formula cheatsheet", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
          previewImg:"https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961",
        },

        // Add more resources as needed
      ],
      testLinks: [
        { 
          name: "Test 1", 
          duration: "2 hrs", 
          url: "https://docs.google.com/forms/d/e/1FAIpQLScDB70xIRKVF32S5w9a9akGZ0BWluQlxx4kpOiqkLEipxrqJQ/viewform" 
        },
        // Add more test links as needed
      ],
      otherResources: [
        { 
          name: "Previous year question 2020", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1",
          previewImg: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961"
        },
        // Add more other resources as needed
      ]
    },
    "Sets and functions":{
      resources:[
         { 
          name: "Previous year question 2020", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1",
          previewImg: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961"
        },

      ],
      testLinks:[],
      otherResources:[
         { 
          name: "Previous year question 2020", 
          url: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/Edusat%20Registrations.pdf?alt=media&token=4779ca4e-d85d-43a7-a19a-064380b7b8d1",
          previewImg: "https://firebasestorage.googleapis.com/v0/b/learnium-6b9e3.appspot.com/o/240114_06h43m51s_screenshot.png?alt=media&token=0d39e5fa-b5e4-4913-856f-98b93933d961"
        },

      ]
    },
    "Relations and functions":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Trigonometric Functions":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Principle of Mathematical Induction":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Complex Numbers and Quadratic Equations":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Linear Inequalities":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Permutations and Combinations":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Binomial Theorem":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Sequence and Series":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Straight Lines":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Conic Sections":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Introduction to Three–dimensional Geometry":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Limits and Derivatives":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Mathematical Reasoning":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Statistics":{
      resources:[],
      testLinks:[],
      otherResources:[]
    },
    "Probability":{
      resources:[],
      testLinks:[],
      otherResources:[]
    }

    // Define data for other topics in a similar way
  };

  return (

    <div className='main-page'>
      <div className='is-not-mobile'>
        <div className='banner'>Select a Topic</div>
        <ul className='topic-list'>
          {topics.map((topic, index) => (
            <li key={index} onClick={() => handleTopicClick(topic)}>{topic}</li>
        ))}
      </ul>   
      </div> 
      <div className='is-mobile'>
        <Dropdown
          // style={{"borderRadius": "4px", "backgroundColor": "#DAFFFB", padding:"0px" , margin: "4px", fontSize: "1.4rem", width:""}}
          options={topicOptions}
          placeholder="Select a topic"
          defaultValue="All topics" // Optional: Set a default value
          onChange={(selectedTopic) => {
            console.log("Selected topic:", selectedTopic);
            // Add your logic for handling the selected topic
            handleTopicClick(selectedTopic)
          }}
        />
      </div>

      <div className='resource-list'>
        <div className='banner'>Resources</div> 
        <div className='flex flex-wrap'>
          {topicData[selectedTopic].resources.map((resource, index) => (
              <Card key={index} style={{"width":"256px", "height":"256px"}}>
                <Image alt='hi' src={resource.previewImg} width={128} height={128} />
                <div>{resource.name}</div>
                <a href={resource.url} download>
                  <Button>Download</Button>
                </a>
              </Card>
            ))}        
        </div>
        <div className='banner'>Test links</div> 
        <div className='flex flex-wrap'>
         {topicData[selectedTopic].testLinks.map((testLink, index) => (
              <Card key={index} style={{"width":"256px", "height":"128px"}}>
                <div>{testLink.name}</div> 
                <div>Duration - {testLink.duration}</div>
                <a href={testLink.url} target='_blank'>
                  <Button>Open test</Button>
                </a>
              </Card>
            ))}
        </div>
        <div className='banner'>Other resources/ References</div> 
        <div className='flex flex-wrap'>
         {topicData[selectedTopic].otherResources.map((otherResource, index) => (
              <Card key={index} style={{"width":"256px", "height":"256px"}}>
                <Image alt='hi' src={otherResource.previewImg} width={128} height={128} />
                <div>{otherResource.name}</div>
                <a href={otherResource.url} download>
                  <Button>Download</Button>
                </a>
              </Card>
            ))}
        </div>

      </div>
    </div>
  )
}
