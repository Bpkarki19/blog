
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
import EditPost from './components/Pages/EditPost'


export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      {/* the rooms */}
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/articles/:slug" element={<ArticlePage/>}/>
        <Route path="/new-post" element = {<CreateNewPost/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/sign-in' element={<Login/>}/>
        <Route path="/sign-up" element={<Registration/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/editor/:slug" element={<EditPost />} />

      </Routes>
    </Router>
    
    
      
    </>
  )
}


