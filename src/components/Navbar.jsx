import { Link } from 'react-router-dom';
import { PencilLine, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm py-4 px-50">
    
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <Link to="/" className="text-2xl font-bold text-green-500">
          Realworld Blog
        </Link>

        
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-green-500 transition-colors">
              Home
            </Link>
          </li>
          
          <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
            <PencilLine size={18} />
            <Link to="/new-post">New Post</Link>
          </li>

          <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
            <Settings size={18} />
            <Link to="/settings">Settings</Link>
          </li>

          <li className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <User size={18} className="bg-gray-200 rounded-full p-0.5" />
            <Link to="/profile">eni9mu5</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}