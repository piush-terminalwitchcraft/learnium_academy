"use client"
import { CustomInput, Markdown } from '@/Components/Elements';
import React, { useEffect, useState } from 'react'
import "./style.css"
import { ADMIN_ARTICLES_FEATURES } from '@/Utils/Constants';
import Image from 'next/image';
import { Articles } from '@/Utils/Types';
import { useDispatch } from 'react-redux';
import { adminGetArticle, adminSearchArticle } from '@/app/Redux/slice';


export default function Page() {

  const [page, setPage] = useState(ADMIN_ARTICLES_FEATURES[0].name); 
  const [articleID, setArticleID] = useState<string | null>(null);
  const dispatch = useDispatch<any>();

  function handleSidebarClick(action: string){
    if(ADMIN_ARTICLES_FEATURES[0].name === action){
      setPage(ADMIN_ARTICLES_FEATURES[0].name); 
    }
    else if( ADMIN_ARTICLES_FEATURES[1].name === action){
      setArticleID(null)
      setPage(ADMIN_ARTICLES_FEATURES[1].name);
    } else {
      setPage(ADMIN_ARTICLES_FEATURES[0].name);
    }  
  }


  const SearchAndEdit = () => {

    const [articles, setArticles] = useState<Articles[]>([]);
    const [query, setQuery] = useState<string>('');

    async function fetchArticles() {
      const res = await dispatch(adminSearchArticle(query)); 
      setArticles(res.payload.data);
    }

    useEffect(()=>{
      fetchArticles();
    },[])
    return (
      <div className='articles-body'>
        <CustomInput type='string' placeholder='Search articles' value={`${query}`} 
          onChange={(e)=>setQuery(e.target.value)} 
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){ fetchArticles(); }
          }} 
        />
        {
          articles.map((article: Articles)=>{
            return <div className='article-search-item' key={article.articleID}
              onClick={()=>{
                setArticleID(article.articleID);
                setPage(ADMIN_ARTICLES_FEATURES[1].name)
              }}>
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
    )
  }

  const ArticleEditor = () => {
    const [article, setArticle] = useState<Articles>();

    async function editArticle() {
      const res = await dispatch(adminGetArticle(articleID));
      setArticle(res.payload.data);
    }


    useEffect(()=>{
      if(articleID !== null) {
        editArticle()
      }
    },[])

    return (
      <Markdown markdownText={article? article.articleID : ""} />
    )
  }
  const Sidebar = () => {
    return (
      <div className='articles-sidebar'>
        {
          ADMIN_ARTICLES_FEATURES.map((feature: {name: string, image: string}) => {
            return(
              <div className='flex articles-sidebar-items' key={feature.name}>
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
    // console.log(page)
    if( ADMIN_ARTICLES_FEATURES[0].name === page ){
      return <SearchAndEdit />
    }
    else {
      return(<div className='articles-body'>
        <ArticleEditor /> 
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


