import { Heart, Settings } from 'lucide-react';
import Button from '../UI/Button'; 

export default function Profile() {
  return (
    <div className="profile-page">
      
      <div className="bg-[#333333] pt-10 pb-6 flex flex-col items-center">
        
       
        <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4 border-2 border-gray-600">
           <img 
             src="https://api.dicebear.com/7.x/identicon/svg?seed=eni9mu5" 
             alt="avatar" 
             className="w-full h-full object-cover"
           />
        </div>

    
        <h1 className="text-white text-2xl font-bold mb-4">eni9mu5</h1>

        
        <button className="flex items-center gap-1 border border-gray-500 text-gray-400 px-3 py-1 rounded hover:bg-gray-700 hover:text-white transition-all text-sm">
           <Heart size={14} />
           <span>Text</span>
        </button>

      </div>

      <main className="max-w-7xl mx-auto px-[240px] mt-8">
        <div className="flex gap-4 border-b border-gray-200 mb-6">
           <button className="text-green-500 border-b-2 border-green-500 pb-2 px-4 text-sm font-medium">
             Your Feed
           </button>
           <button className="text-gray-400 pb-2 px-4 text-sm font-medium hover:text-gray-600">
             Your Feed
           </button>
        </div>

        {/*(Popular tags, Posts)*/}
      </main>
    </div>
  );
}