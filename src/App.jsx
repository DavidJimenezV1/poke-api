import { useState} from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Aleatorios from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Listas from './componentes/listas'
import Pokemon from './componentes/pokemon'
import Usuarios from './componentes/usuario'
import Menu from './componentes/menu';
import './App.css'

function App() {
  

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Listas/>}/>
        <Route path="/Favoritos" element={<Favoritos/>}/>
        <Route path="/Usuarios" element={<Usuarios/>}/>
        <Route path="/Capturados" element={<Capturados/>}/>
        <Route path="/Pokemon" element={<Pokemon/>}/>
        <Route path="/Aleatorios" element={<Aleatorios/>}/>
      </Routes>
    </Router>
  )
}

export default App
