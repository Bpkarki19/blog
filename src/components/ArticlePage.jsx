import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import Author from "./UI/Author"
import Tag from "./UI/Tag"

export default function ArticlePage() {
  const { slug } = useParams() // Get the slug from the URL parameters
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

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
      <div className="bg-[#333333] py-8 mb-8">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="text-white text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <Author
            variant="large"
            name={article.author.username}
            date={new Date(article.createdAt).toLocaleDateString()}
            image={article.author.image}
          />
        </div>
      </div>

      {/* 2. ARTICLE CONTENT */}
      <main className="max-w-7xl mx-auto px-10 pb-20">
        {/* The Markdown Renderer */}
        <div className="prose max-w-none text-gray-800 text-lg leading-relaxed mb-10">
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>

        {/* 3. TAGS */}
        <div className="flex gap-2 border-t border-gray-200 pt-6">
          {article.tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </main>
    </div>
  )
}
