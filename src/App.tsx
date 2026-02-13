import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Pokemon from './pages/Pokemon'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:id' element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
