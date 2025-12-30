import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import Post from '../Post';
import { Heart } from 'lucide-react';

export default function Profile() {
  const { username } = useParams(); // Getting username from URL
  const { user: currentUser } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching only this user's articles
  useEffect(() => {
    const fetchUserArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://realworld.habsida.net/api/articles?author=${username || currentUser?.username}&limit=5`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Failed to fetch user articles", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserArticles();
  }, [username, currentUser]);

  return (
    <div className="profile-page">
      {/* --- DARK BANNER --- */}
      <div className="bg-[#333333] pt-10 pb-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4 border-2 border-gray-600">
          <img 
            src={currentUser?.image || "https://api.dicebear.com/7.x/identicon/svg?seed=default"} 
            className="w-full h-full object-cover"
            alt="avatar"
          />
        </div>
        <h1 className="text-white text-2xl font-bold mb-4">{username || currentUser?.username}</h1>
        
        {/* Hearty Button */}
        <button className="flex items-center gap-1 border border-gray-500 text-gray-400 px-3 py-1 rounded hover:bg-gray-700 hover:text-white transition-all text-sm">
           <Heart size={14} />
           <span>Follow {username || currentUser?.username}</span>
        </button>
      </div>

     
      <main className="max-w-7xl mx-auto px-4 md:px-20 lg:px-[240px] mt-8 pb-20">
        
        {/* "My Articles" vs "Favorited" */}
        <div className="flex gap-4 border-b border-gray-200 mb-6">
           <button className="text-green-500 border-b-2 border-green-500 pb-2 px-4 text-sm font-medium">
             My Articles
           </button>
           <button className="text-gray-400 pb-2 px-4 text-sm font-medium hover:text-gray-600">
             Favorited Articles
           </button>
        </div>

        {/* --- ARTICLE LIST --- */}
        {loading ? (
          <div className="text-center py-10">Loading articles...</div>
        ) : (
          <div className="flex flex-col gap-6">
            {articles.length > 0 ? (
              articles.map(article => (
                <Post key={article.slug} article={article} />
              ))
            ) : (
              <div className="text-gray-400 py-10">No articles are here... yet.</div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}