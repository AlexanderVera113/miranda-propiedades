import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail'; // <-- Importamos la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<Properties />} />
        {/* Ruta dinámica: El ":id" permite que la URL cambie (ej: /propiedad/1) */}
        <Route path="/propiedad/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;