
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'
import HomePage from './components/HomePage'
import { Navigate } from 'react-router-dom'
import CreateNewPost from './components/Pages/CreateNewPost'
import Setting from './components/Pages/Setting'


function App() {
  console.log(CreateNewPost);
  return (
    <>
    <Router>
      <Navbar/>{/*roof*/}
      {/* the rooms */}
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/articles/:slug" element={<ArticlePage/>}/>
        <Route path="/new-post" element = {<CreateNewPost/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
    
    
      
    </>
  )
}

export default App
