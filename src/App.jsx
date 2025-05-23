// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';

import { supabase } from "./supabase";

import Menu from './componentes/menu';
import Aleatorios from './componentes/aleatorios';
import Capturados from './componentes/capturados';
import Favoritos from './componentes/favoritos';
import Listas from './componentes/listas';
import Pokemon from './componentes/pokemon';
import Usuarios from './componentes/usuario';
import Login from './componentes/login';
import Registro from './componentes/registro/index.jsx';
import Administrador from './componentes/administrador/index.jsx'; // <--- Importar el nuevo componente Administrador

import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
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

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}
        <Routes>
          <Route path="/" element={usuario ? <Listas /> : <Navigate to="/login" />} />
          <Route path="/Favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/Usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/Capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/Pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
          <Route path="/Aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin" element={usuario ? <Administrador /> : <Navigate to="/login" />} /> {/* <--- Nueva ruta para Administrador */}
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;