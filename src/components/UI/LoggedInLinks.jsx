import SettingLogo from './SettingLogo';
import { Pencil, User } from 'lucide-react';
export default function LoggedinLink() {
  const navLinkStyle = "text-[#333333] text-[16px] font-semibold"
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
        <Link to="/profile" className={navLinkStyle}>
          Real_username
        </Link>
      </li>
    </>
  )
}
