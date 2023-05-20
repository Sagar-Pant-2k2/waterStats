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
import ModalWindow from './Modal'
function App() {

  const [display, setDisplay] = useState("none");
  const openModal = ()=>{
    setDisplay("flex");
  }
  const closeModal = ()=>{
    setDisplay("none");
  }

  return (
   <>
    <ModalWindow display={display} closeModal={closeModal}/>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/artesian' element={<ArtesianWells openModal={openModal} closeModal={closeModal}/>}/>
      <Route path='/rainfall' element={<Rainfall/>}/>
      <Route path='/water' element={<WaterStreams/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
