import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/navigation'
import Inicio from './pages/Inicio'
import Clases from './pages/Clases'
import Entrenadores from './pages/Entrenadores'
import Horarios from './pages/Horarios'
import Contacto from './pages/Contacto'

import { Routes, Route, BrowserRouter } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navigation />
      <div className='mt-5 pt-4'>


      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/horarios" element={<Horarios />} />
      </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
