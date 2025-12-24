import { Heart, User } from "lucide-react"
import Button from "./UI/Button"
import Tag from "./UI/Tag"
import Author from "./UI/Author"
import { Link } from "react-router-dom"

export default function Post({ article }) {
  if (!article) return null; //safety check
  //destructure data from article Api
  const {
    title,
    description,
    author,
    taglist = [],// bug found : Data in API may not have taglist and ending undefined
    createdAt,
    favouriteCount,
    slug,
  } = article

  return (
    <div className="w-full h-[230px] bg-white border border-gray-200 rounded-md p-5 flex flex-col justify-between shadow-sm">
      {/* HEADER: Author & Like Button */}
      <div className="flex justify-between items-center">
        <Author
          name={author.username}
          date={new Date(createdAt).toLocaleDateString()}
          image={author.image}
        />

        {/* Like Button */}
        <Button variant="outline" size="sm">
          <Heart size={12} />
          <span>{favouriteCount}</span>
        </Button>
      </div>

      <div className="mt-3">
        {/* line-clamp-1: Ensures title stays on one line */}
        <Link to={`/articles/${slug}`}>
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1 mb-2">
            {title}
          </h2>
        </Link>

        <p className="text-gray-400 text-sm font-light line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {taglist.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
