import { Heart} from "lucide-react"
import Button from "./UI/Button"
import Tag from "./UI/Tag"
import Author from "./UI/Author"
import { Link } from "react-router-dom";
import api from "../services/api";
import { useState } from "react";

export default function Post({ article }) {
  console.log(article);
  const [currentArticle, setCurrentArticle] = useState(article);

  if (!currentArticle) return null; //safety check
  //destructure data from article Api
  
  const {
    title,
    description,
    author,
    tagList = [],// bug found : Data in API may not have taglist and ending undefined
    createdAt,
    favoritesCount,
    favorited,
    slug,
  } = currentArticle;
  //console.log('article==>',article.favoritesCount);

  const handleLike = async ()=>{
    try{
      const method = favorited ? "delete":"post";
      const response = await api[method](`/articles/${slug}/favorite`);
      setCurrentArticle(response.data.article);
    }catch(err){
      console.error("could not like post",err);
    }
    
  };

  return (
    <div className="w-full h-[230px] bg-white border border-[#AAAAAA] rounded-md p-5 flex flex-col justify-between ">
      {/* HEADER: Author & Like Button */}
      <div className="flex justify-between items-center">
        <Author
          name={author.username}
          date={new Date(createdAt).toLocaleDateString()}
          image={author.image}
        />

        {/* Like Button */}
        <Button variant={favorited ? "primary":"outline"} size="sm" onClick={handleLike}>
          <Heart size={12} fill = {favorited ? "white":"none"}/>
          <span>{favoritesCount}</span>
        </Button>
      </div>

      {/*Title*/}
      <div className="mt-3">
        {/* line-clamp-1: Ensures title stays on one line */}
        <Link to={`/articles/${slug}`}>
          <h2 className="text-[32px] font-bold text-[#333333] line-clamp-1 mb-2">
            {title}
          </h2>
        </Link>

        <p className="text-[#333333] text-[16px] font-light line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tagList.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
