import { Heart, User } from 'lucide-react';
import Button from './UI/Button';
import Tag from './UI/Tag';
import Author from './UI/Author';

export default function Post() {
  return (
   
    <div className="w-full h-[230px] bg-white border border-gray-200 rounded-md p-5 flex flex-col justify-between shadow-sm">
      
      {/* HEADER: Author & Like Button */}
      <div className="flex justify-between items-center">
        <Author 
          name="John Lobster" 
          date="01 January 2023" 
          image="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
        />
        

        {/* Like Button */}
        <Button variant='outline' size='sm'>
            <Heart size={12}/>
            <span>12</span>
        </Button>
      </div>

      
      <div className="mt-3">
        {/* line-clamp-1: Ensures title stays on one line */}
        <h2 className="text-xl font-bold text-gray-800 line-clamp-1 mb-2">
          If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!
        </h2>
        
        <p className="text-gray-400 text-sm font-light line-clamp-3">
          Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. 
          Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.
        </p>
      </div>

      
      <div className="flex flex-wrap gap-2 mt-auto">
        <Tag>reactJs</Tag>
      </div>
    </div>
  );
}