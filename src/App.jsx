import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Profile from './components/Pages/Profile'
import CreateNewPost from './components/Pages/CreateNewPost'
import Setting from './components/Pages/Setting'
import Login  from './components/Pages/Login'
import Registration from './components/Pages/Registration'


function App() {
  // React runs this function ONLY ONCE, at the very beginning
  const [currentUser, setCurrentUser] = useState(()=>{
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved):null;
  });
  
 

  const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setCurrentUser(null);
  }
  return (
    <>
    <Router>
      <Navbar user={currentUser}/>{/*roof*/}
      {/* the rooms */}
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/articles/:slug" element={<ArticlePage/>}/>
        <Route path="/new-post" element = {<CreateNewPost/>}/>
        <Route path='/setting' element={<Setting/>}/>
        
        <Route path='/sign-in' element={<Login onLogin={setCurrentUser}/>}/>
        <Route path="/sign-up" element={<Registration/>}/>
        

         
        <Route path='/profile' element={<Profile/>}/>
        
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
    
    
      
    </>
  )
}

export default App
