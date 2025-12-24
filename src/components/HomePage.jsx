import Banner from '../components/Banner';
import ArticleList from '../components/ArticleList'; 

export default function HomePage() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto px-[240px] py-10">
        <ArticleList />
      </main>
    </>
  );
}