"use client"
import { CustomInput, MarkdownEditor } from '@/Components/Elements';
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
  const newArticle: Articles = {
    content: "# Start editing",
    title: "Untitled",
    articleID: "",
    date: "",
    documents: [],
    category: [],
    metatags: [],
    createdBy: "", 
  }
  const [article, setArticle] = useState<Articles>(newArticle);

  function handleSidebarClick(action: string){
    if(ADMIN_ARTICLES_FEATURES[0].name === action){
      setPage(ADMIN_ARTICLES_FEATURES[0].name); 
    }
    else if( ADMIN_ARTICLES_FEATURES[1].name === action){
      setArticleID(null)
      setArticle(newArticle)
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
    async function fetchArticleData() {
      const res = await dispatch(adminGetArticle(articleID));
      const data: Articles = res.payload.data;
      return data; 
    }

    useEffect( () =>{
      if( articleID !== null && article.articleID !== articleID) {
        fetchArticleData().then((data)=> {
          setArticle(data || newArticle);
          console.log(article);
        })
      }
    },[])

    return (
      <div>
        <MarkdownEditor article={article}/>
      </div>
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
    if( ADMIN_ARTICLES_FEATURES[0].name === page ){
      return <SearchAndEdit />
    }
    else {
      return(
        <div className='articles-body'>
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

