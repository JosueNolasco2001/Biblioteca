import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage.jsx'
import './index.css'
import './App.css'

function App() {

  return (
 
    <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>

    </Routes>
  </HashRouter>
  )
}

export default App
