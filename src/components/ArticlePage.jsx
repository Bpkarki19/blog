import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../services/api"
import ReactMarkdown from "react-markdown"
import Author from "./UI/Author"
import Tag from "./UI/Tag"
import Button from "./UI/Button"
import { useAuth } from "../context/AuthContext";




export default function ArticlePage() {
  const { slug } = useParams() // Getting slug from the URL parameters
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {user} = useAuth();
  const [isDeleted, setisDeleted] = useState(false);
  //console.log(user.username);
  //console.log(article);

  const deletePost = async () =>{
    try{
      await api.delete(`/articles/${slug}`);
      setisDeleted(true);
      setTimeout(()=>{
        navigate("/");
      },2000);
      
      

    }catch(err){
      console.log("cannot delete post",err);
      alert("Failed to delete post. Please try again");
    }

  }

  const centerContent =
    "max-w-7xl mx-auto pb-20 px-4 md:px-20 lg:px-[240px] py-10 w-full overflow-hidden"

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await api.get(`/articles/${slug}`)
        setArticle(res.data.article)
      } catch (err) {
        console.error("Failed to fetch article", err)
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [slug])
  if(isDeleted){
    return(
      <div className="text-center py-40">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Post deleted successfully!</h2>
        <p className="text-gray-500">Redirecting you to the home page...</p>
      </div>

    );
  }
  if (loading) return <div className="text-center py-20">Loading article </div>
  if (!article)
    return <div className="text-center py-20">Article not found!</div>
  const isAuthor = user && user.username === article.author.username;
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
            color="text-[#AAAAAA]"
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
                pre: ({ ...props }) => (
                  <div
                    className="whitespace-pre-wrap break-words overflow-x-hidden"
                    {...props}
                  />
                ),
                code: ({ ...props }) => (
                  <span
                    className="whitespace-pre-wrap break-words"
                    {...props}
                  />
                ),
              }}
            >
              {article.body}
            </ReactMarkdown>
          </article>
        </div>
        <div></div>

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
          
          {isAuthor ?(
            <>
            <Button size="md" onClick={() => navigate(`/editor/${article.slug}`)}>
            Edit{" "}
            </Button>
            <Button size="md" onClick={deletePost}>Delete</Button>
            </> 
          ):(
            <Button size="md" >Favourite article</Button>

          )}
          
        </div>
      </main>
    </div>
  )
}
