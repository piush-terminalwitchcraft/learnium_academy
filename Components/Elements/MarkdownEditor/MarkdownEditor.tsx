"use client"
import 'katex/dist/katex.css';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import katex from "katex";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getCodeString } from "rehype-rewrite";
import "./style.css";
import { Articles } from '@/Utils/Types';
import { Button, CustomInput, TagInput } from '..';
import { useDispatch } from 'react-redux';
import { adminAddArticle, adminUpdateArticle } from '@/app/Redux/slice';
import PreviousMap from 'postcss/lib/previous-map';
import { toast } from 'react-toastify';
import { TOAST_STYLE } from '@/Utils/Constants';
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);
interface CodeProps {
  children: any;
  className: string;
  node?: {
    children?: any;
  };
}
function HomePage(props: {article: Articles}) {

  const initialCategories = props.article.category.map((c)=> c.categoryName);
  const initialMetatags = props.article.metatags? props.article.metatags.map((m)=> m.metatagName) : [];

  const [value, setValue] = useState(props.article.content);
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState(initialCategories);
  const [metatags, setMetatags] = useState(initialMetatags);
  const [documents, setDocuments] = useState([])
  const dispatch = useDispatch<any>();

  const handleCategoryChange = (newCategories: string[]) => { setCategories(newCategories); }
  const handleMetatagChange = (newMetatags: string[]) => { setMetatags(newMetatags); }
  const handleSave = () => {
    console.log(title, value, categories, metatags)
    try {
      if(props.article.articleID === "") {
        dispatch(adminAddArticle({
          title: "dc",
          content: value,
          category: categories,
          metatags,
          documents: documents,
        }))       
      } else {
        dispatch(adminUpdateArticle({
          articleID: props.article.articleID,
          content: value,
          category: categories,
          metatags,
          documents: documents,
        }))
      }
      toast.success('🦄 Article updated successfully!', TOAST_STYLE); 
    } catch (error) {
      toast.error(`Something went wrong ${error}`, TOAST_STYLE);
    }
  }


  return (
    <article className='markdown-editor'>
    <Button onClick={()=>handleSave()} >Save</Button>
    <div>
      {
        props.article.articleID === "" ? 
            <div>
              <CustomInput 
              value={`${title}`} 
              placeholder='Enter title of the article'
              onChange={(e)=> setTitle(e.target.value)} type='string'/>
            </div>
            : 
            null
      }
      <div>Add categories</div>
      <TagInput 
          tags={initialCategories}
          onTagsChange={handleCategoryChange}
        />
      <div>Add metatags</div>
      <TagInput 
          tags={initialMetatags} 
          onTagsChange={handleMetatagChange}
      />
    </div>
    <div>
      <MDEditor value={value} onChange={(e)=> setValue(e || "")} 
        previewOptions={{
           components:{
              code: (data: CodeProps) => {
              console.log(data)
              const { children, className, ...props} = data; 
              const txt = children || "";
              console.log(className)

              if (className === undefined) {
                  const html = katex.renderToString(
                    txt.replace(/^\$(.*)\$/, "$1"),
                    {
                      throwOnError: false
                    }
                  );
                  return <code className="language-KaTeX code-highlight" dangerouslySetInnerHTML={{ __html: html }} />;
              }
              const code =
                props.node && props.node.children
                  ? getCodeString(props.node.children)
                  : txt;
              if (
                typeof code === "string" &&
                typeof className === "string" &&
                /^language-katex/.test(className.toLocaleLowerCase())
              ) {
                const html = katex.renderToString(code, {
                  throwOnError: false
                });
                // console.log("props", code, txt, className, props);
                return <code dangerouslySetInnerHTML={{ __html: html }} />;
              }
              return <code className={String(className)}>{children}</code>;
            }
           }
         }}
       />
      <div style={{ paddingTop: 50 }}>
        
      </div>
    </div>
    </article>
  );
}

export default HomePage;

const markdownText = `
\`$c = \\pm\\sqrt{a^2 + b^2}$\`
in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

\`\`\`KaTeX
\\f\\relax{x} = \\int_{-\\infty}^\\infty
\\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
\\,d\\xi
\`\`\`
\`\`\`css
.w-md-editor-text-input,
.w-md-editor-text-pre > code,
.w-md-editor-text-pre {
font-size: 2rem !important;
line-height: 2.5rem !important;
}
\`\`\`
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


