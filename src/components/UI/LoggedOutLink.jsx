import { NavLink } from "react-router-dom"

export default function LoggedOutLink() {
  const navLinkStyle = "text-[#333333] text-[16px] font-semibold"
  
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
