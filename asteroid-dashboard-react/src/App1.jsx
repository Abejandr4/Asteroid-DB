import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes de pantalla (rutas principales)
import Inicio from "./components/AsteroidDashboard.jsx";
import Ceres from "./screens/ceres.jsx"; 
import Vesta from "./screens/vesta.jsx";
import Ida from "./screens/ida.jsx";

function App1() {
  return (
    <Router>
      {/* Contenedor principal que permite el scroll si el contenido supera el alto de la pantalla */}
      <div className="min-h-screen overflow-auto">
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Inicio />} />
          <Route path="/Ceres" element={<Ceres />} />
          <Route path="/Vesta" element={<Vesta />} />
          <Route path="/Ida" element={<Ida />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
