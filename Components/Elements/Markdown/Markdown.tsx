"use client"
import 'katex/dist/katex.css';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import katex from "katex";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getCodeString } from "rehype-rewrite";
import './style.css';
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);
// const Markdown = dynamic(
//   () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
//   { ssr: false }
// );

function HomePage() {
  const [value, setValue] = useState(`This is to display the 
\`$c = \\pm\\sqrt{a^2 + b^2}$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`
\`$c = \\pm\\sqrt{a^2 + b^2}$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

\`$c = \\pm\\sqrt{a^2 + b^2}$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

\`$c = \\pm\\sqrt{a^2 + b^2}$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

\`$c = \\pm\\sqrt{a^2 + b^2}$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`

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
\`\`\``);


  return (
    <article className='markdown'>
    <div>
      <MDEditor value={value} onChange={(e)=> setValue(e || "")} 
        preview='preview'
        hideToolbar={true}
        previewOptions={{
           components:{
              code: (data: { children: any ,className: string}) => {
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


