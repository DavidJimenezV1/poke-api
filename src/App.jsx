import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import { supabase } from "./supabase"; // <--- Agregar esta línea

import Menu from './componentes/menu';
import Aleatorios from './componentes/aleatorios';
import Capturados from './componentes/capturados';
import Favoritos from './componentes/favoritos';
import Listas from './componentes/listas';
import Pokemon from './componentes/pokemon';
import Usuarios from './componentes/usuario';
import Login from './componentes/login'; // <--- Agregar esta línea

import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null); // <--- Agregar esta línea
  const [cargando, setCargando] = useState(true); // <--- Agregar esta línea

  useEffect(() => { // <--- Agregar este bloque useEffect
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }
    verificarSesion();

    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) return <p>Cargando...</p>; // <--- Agregar esta línea

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />} {/* <--- Modificar esta línea */}
        <Routes>
          <Route path="/" element={usuario ? <Listas /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/Favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/Usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/Capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/Pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/Aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} /> {/* <--- Modificar esta línea */}
          <Route path="/login" element={<Login />} /> {/* <--- Agregar esta línea */}
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;