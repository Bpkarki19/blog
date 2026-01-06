import { Link,NavLink } from "react-router-dom"
import {User } from 'lucide-react';
export default function LoggedOutLink() {
  const navLinkStyle = "text-[#333333] text-[16px] font-semibold"
  const iconColor = 'text-[#61BB61]'
  const brandGreen = '#61BB61'
  return (
    <>
      <li>
        <NavLink to="/sign-in" className={navLinkStyle}>
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink to="/sign-up" className={navLinkStyle}>
          Sign up
        </NavLink>
      </li>
      
    </>
  )
}
