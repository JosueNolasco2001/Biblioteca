import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage.jsx'
import Homepages from './pages/homepages.jsx'
import Books from './pages/books.jsx'
import Search from './pages/search.jsx'
import './index.css'
import './App.css'

function App() {

  return (
 
   
<HashRouter>
   <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/index2" element={<Homepages />}></Route>
      <Route path="/Books" element={<Books />}></Route>
      <Route path="/Search" element={<Search />}></Route>


    </Routes>
    </HashRouter> 
   

  )
}

export default App
