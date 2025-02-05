import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
