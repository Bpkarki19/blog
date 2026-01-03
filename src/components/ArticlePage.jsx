import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import Author from "./UI/Author"
import Tag from "./UI/Tag"
import Button from "./UI/Button"

export default function ArticlePage() {
  const { slug } = useParams() // Getting slug from the URL parameters
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const centerContent = "max-w-7xl mx-auto pb-20 px-4 md:px-20 lg:px-[240px] py-10 w-full overflow-hidden"

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(
          `https://realworld.habsida.net/api/articles/${slug}`
        )
        setArticle(res.data.article)
      } catch (err) {
        console.error("Failed to fetch article", err)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [slug]);
  if (loading) return <div className="text-center py-20">Loading article </div>
  if (!article)
    return <div className="text-center py-20">Article not found!</div>
  return (
    <div className="article-page">
      {/* 1. ARTICLE BANNER ) */}
      <div className={`bg-[#333333] py-8  ${centerContent}`}>
        <div className="mx-auto">
          <h1 className="text-white text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <Author
            variant="large"
            name={article.author.username}
            date={new Date(article.createdAt).toLocaleDateString()}
            image={article.author.image}
            color='text-[#AAAAAA]'
          />
        </div>
      </div>

      {/*ARTICLE CONTENT */}
      <main className={centerContent}>
        
        <div className="max-w-none text-gray-800 text-lg leading-relaxed mb-10 break-words whitespace-pre-wrap">
          <article className="prose lg:prose-xl max-w-none break-words prose-pre:whitespace-pre-wrap prose-pre:break-words">
            <ReactMarkdown
              components={{
              // This part forces ANY <pre> or <code> tag to wrap text
              pre: ({...props}) => <div className="whitespace-pre-wrap break-words overflow-x-hidden" {...props} />,
              code: ({...props}) => <span className="whitespace-pre-wrap break-words" {...props} />
            }}>
              {article.body}</ReactMarkdown>
          </article>
        </div>
        <div>
          
          

        </div>

        {/* 3. TAGS */}
        <div className="flex gap-2 border-t border-gray-200 pt-6">
          {article.tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/*bottom author*/}
          <div className="flex flex-row gap-8 justify-center pt-[46px]">
            <Author
            variant="large"
            name={article.author.username}
            date={new Date(article.createdAt).toLocaleDateString()}
          />
          <Button size="md">Favourite article</Button>
          <Button 
          size="md"
          onClick={()=>navigate(`/editor/${article.slug}`)}>
            Edit </Button>
          <Button size="md">Delete</Button>


          </div>
      </main>
    </div>
  )
}
