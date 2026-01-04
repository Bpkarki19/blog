import SettingLogo from './SettingLogo';
import { Pencil, User } from 'lucide-react';
import {Link} from 'react-router-dom'



export default function LoggedinLink({username}) {
  const navLinkStyle = "text-[#333333] text-[16px] font-semibold"
  const iconColor = 'text-[#61BB61]'
  const brandGreen = '#61BB61'
  return (
    <>
      <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
        <Pencil size={18} className={iconColor} fill={brandGreen} />
        <Link to="/new-post" className={navLinkStyle}>
          New Post
        </Link>
      </li>
      <li className="flex items-center gap-1 hover:text-green-500 transition-colors">
        <SettingLogo />
        <Link to="/setting" className={navLinkStyle}>
          Settings
        </Link>
      </li>
      <li className="flex items-center gap-2 hover:text-green-500 transition-colors">
        <User size={18} className={iconColor} fill={brandGreen} />
        <Link to={`/profile/${username}`} className={navLinkStyle}>
        {username}
        {console.log('user received',username)}
        </Link>
      </li>
    </>
  )
}
