import React from 'react'
import MarkdownIt from 'markdown-it';
import mdKatex from 'markdown-it-katex';
import 'katex/dist/katex.min.css'; // Import Katex CSS
import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'isomorphic-dompurify';


export default function Markdown(props:{markdownText: string}) {
 
  const md = new MarkdownIt().use(mdKatex); 
  
  const {markdownText} = props;
  const html = md.render(markdownText);
  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <div>
      <article className='prose prose-base prose-slate mx-auto'>
        {ReactHtmlParser(sanitizedHTML)}
      </article>
    </div>
  )
}
