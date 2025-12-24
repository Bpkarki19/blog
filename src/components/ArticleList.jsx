import { useState, useEffect } from "react"
import axios from "axios"
import Post from "./Post"
import Pagination from "./Pagination"

export default function ArticleList() {
  const [articles, setArticles] = useState([]) //list of posts
  const [loading, setLoading] = useState(true) //show loader
  const [currentPage, setCurrentPage] = useState(1) //pagination
  const [error, setError] = useState(null) // storing error messages
  const [totalCount, setTotalCount] = useState(0) // pagination numbers

  const limit = 5 //number of posts per page

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      setError(null)

      const offset = (currentPage - 1) * limit
      try {
        const response = await axios.get(
          `https://realworld.habsida.net/api/articles?limit=${limit}&offset=${offset}`
        )

        setArticles(response.data.articles)
        setTotalCount(response.data.articlesCount)
      } catch (err) {
        if (err.response && err.response.status === 429) {
          setError("Too many requests! pleasee wait a minute")
        } else {
          setError("Failed to load articles.Try again later.")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [currentPage]) // re running when page number change

  return (
    <>
      {loading && (
        <div className="text-center py-20 text-green-500 font-bold">
          Loading
        </div>
      )}
      {error && (
        <div className="text-center py-20 text-red-500 font-bold">{error}</div>
      )}
      {!loading && !error && (
        <>
          <div className="flex flex-col gap-6">
            {" "}
            {/*gapping posts*/}
            {articles?.map((article) => (
              <Post key={article.slug} article={article} />
            ))}
          </div>
          <Pagination
            totalCount={totalCount}
            pageSize={limit}
            currentPage={currentPage}
            onPageChange={(num) => setCurrentPage(num)}
          />{" "}
          {/*function to update state*/}
        </>
      )}
    </>
  )
}
