import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './componants/sidebar'
import SearchBar from './componants/searchNav'
import MovieCard from './componants/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="xx">
    <div className="side">

     <SideBar/> 
    </div>
     
     <div className="body">

   <SearchBar/>
   <MovieCard/>
     </div>
   </div>
 <p>gggggggggggggggg</p>
    </>
  )
}

export default App
