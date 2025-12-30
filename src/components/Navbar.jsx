import { Link, } from 'react-router-dom';
import LoggedinLink from './UI/LoggedInLinks';
import LoggedOutLink from './UI/LoggedOutLink';

export default function Navbar({user}) {
  const navLinkClass = ({isActive})=>`flex items-center gap-1 transition-colors ${isActive ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'}`
  
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
          {/*conditional logic*/}
          {user ? (
          <LoggedinLink user={user}/>
          ):(
            <LoggedOutLink/>
          )}

          
        </ul>

      </nav>
    </header>
  );
}