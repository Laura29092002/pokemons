import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
