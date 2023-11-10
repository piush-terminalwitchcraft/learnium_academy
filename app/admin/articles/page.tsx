"use client"
import { CustomInput, Markdown } from '@/Components/Elements';
import React, { useState } from 'react'
import "./style.css"
import { ADMIN_ARTICLES_FEATURES } from '@/Utils/Constants';
import Image from 'next/image';
import { Articles } from '@/Utils/Types';


export default function page() {


  const [page, setPage] = useState(ADMIN_ARTICLES_FEATURES[0].name); 

  function handleSidebarClick(action: string){
    if(ADMIN_ARTICLES_FEATURES[0].name === action){
      setPage(ADMIN_ARTICLES_FEATURES[0].name); 
    }
    else if( ADMIN_ARTICLES_FEATURES[1].name === action){
      setPage(ADMIN_ARTICLES_FEATURES[1].name);
    } else {
      setPage(ADMIN_ARTICLES_FEATURES[0].name);
    }  
  }


  const SearchAndEdit = () => {

    const [editMode, setEditMode] = useState(false);  
    return (
      <div className='articles-body'>
        {
          editMode ? 
            <div>
              Edit mode baby 
            </div>
            :
            <div> 
              <CustomInput type='string' placeholder='Search articles' />
              {
                exampleArticles.map((article: Articles)=>{
                  return <div className='article-search-item'>
                    <div className='lsp'>
                      {article.title}
                    </div>
                    <div className='text'>
                      {article.date}
                    </div>
                    <div className='text'>
                      {article.createdBy}
                    </div>

                  </div>
                })
              }
            </div>
        }
      </div>
    )
  }

  const NewArticle = () => {

  }
  const Sidebar = () => {
    return (
      <div className='articles-sidebar'>
        {
          ADMIN_ARTICLES_FEATURES.map((feature: {name: string, image: string}) => {
            return(
              <div className='flex articles-sidebar-items'>
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
    console.log(page)
    if( ADMIN_ARTICLES_FEATURES[0].name === page ){
      return <SearchAndEdit />
    }
    else {
     return(<div className='articles-body'>
        <Markdown markdownText={markdownText}/>
      </div>
    )
    }
  }

  return (
    <div className='articles'>
      <Sidebar />
      <Body />
    </div>
  )
}


const markdownText = `
Inline equation: $E=mc^2$
## SmartyPants

|                |ASCII                            |HTML                         |
|----------------|---------------------------------|-----------------------------|
|Single backticks|\`'Isn't this fun?'\`            |'Isn't this fun?'            |
|Quotes          |\`"Isn't this fun?"\`            |"Isn't this fun?"            |
|Dashes          |\`-- is en-dash, --- is em-dash\`|-- is en-dash, --- is em-dash|

Display equation:
$$
\\int_{n}^{m}\\int_{a}^{b} f(x) \\, f(y) dx \\, dy 
$$`;

const exampleArticles : Articles[] = [
  {
    articleID: "1",
    title: "Article 1", 
    content: markdownText,
    category: ["Chemistry", "Organic"],
    metatags: [], 
    date: "10/12/2023",
    createdBy: "Me", 
    documents: []
  }, 
  {
    articleID: "2",
    title: "Article 2", 
    content: markdownText,
    category: ["Chemistry", "Organic"],
    metatags: [], 
    date: "10/12/2023",
    createdBy: "Me", 
    documents: []
  },
  {
    articleID: "3",
    title: "Article 3", 
    content: markdownText,
    category: ["Chemistry", "Organic"],
    metatags: [], 
    date: "10/12/2023",
    createdBy: "Me", 
    documents: []
  }


]
