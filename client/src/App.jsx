import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import './App.css'
import Navbar from './components/Navbar'
import AlumniList  from './components/AlumniList'
import Loginpage from './components/Loginpage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/list' element={<AlumniList />}></Route>
      <Route path='/login' element={<Loginpage />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
