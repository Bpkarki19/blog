import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Post from './components/Post'
import Pagination from './components/Pagination'
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-10 py-10">
        <Post/>
       
      </main>
      <Pagination/>
      
      
    </Router>
    
    
      
    </>
  )
}

export default App
