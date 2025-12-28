import { Link } from 'react-router-dom';
import { Pencil, Settings, User } from 'lucide-react';
import SettingLogo from './UI/SettingLogo';

export default function Navbar() {
  const iconColor = 'text-[#61BB61]'
  const brandGreen = '#61BB61'
  const navLinkStyle = "text-[#333333] text-[16px] font-semibold";

  return (
    <header className="bg-white shadow-sm py-4 ">
    
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-20 lg:px-[240px]">
        
       
        <Link to="/" className='text-[#61BB61] text-[24px] font-bold' >
          Realworld Blog
        </Link>

        
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li>
            <Link to="/" className={navLinkStyle}>
              Home
            </Link>
          </li>
          
          <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
            <Pencil size={18} className={iconColor} fill={brandGreen} />
            <Link to="/new-post" className={navLinkStyle} >New Post</Link>
          </li>

          <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
            <SettingLogo/>
            <Link to="/setting" className={navLinkStyle}>Settings</Link>
          </li>

          <li className="flex items-center gap-2 hover:text-green-500 transition-colors">
            <User size={18} className={iconColor} fill={brandGreen}/>
            <Link to="/profile" className={navLinkStyle}>eni9mu5</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}