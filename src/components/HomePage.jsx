import Banner from "../components/Banner"
import ArticleList from "../components/ArticleList"
import PopularTags from "./PopularTags"

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 md:px-20 lg:px-[240px]  pt-[10px] pb-[16px] "> 
        <PopularTags />
      </div>
      <main className="max-w-7xl mx-auto px-4 md:px-20 lg:px-[240px]  ">
        <ArticleList />
      </main>
    </>
  )
}
