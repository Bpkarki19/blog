import Banner from "../components/Banner"
import ArticleList from "../components/ArticleList"
import PopularTags from "./PopularTags"

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto px-[240px] pt-2">
        <PopularTags />
      </div>
      <main className="max-w-7xl mx-auto px-[240px] py-10">
        <ArticleList />
      </main>
    </>
  )
}
