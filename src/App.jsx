import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Cards'
import Nav from './Nav'
import Home from './Home'
import Slider from './Slider'
import WaterStreams from './WaterStreams'
import Rainfall from './Rainfall'
import ArtesianWells from './ArtesianWells'
import Team from './Team'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  const [count, setCount] = useState(0)

  return (
   <>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/artesian' element={<ArtesianWells/>}/>
      <Route path='/rainfall' element={<Rainfall/>}/>
      <Route path='/water' element={<WaterStreams/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
