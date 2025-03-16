import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import {ThemeContext} from "./Context/ThemeContext"
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeContext/>
    <div className='App'>
       <Header/>
       <Home/>
       <Footer/>
    </div>
    </>
  )
}

export default App
