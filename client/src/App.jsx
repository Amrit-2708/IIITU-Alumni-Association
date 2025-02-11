import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import './App.css'
import Navbar from './components/Navbar'
import AlumniList  from './components/AlumniList'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/list' element={<AlumniList />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
