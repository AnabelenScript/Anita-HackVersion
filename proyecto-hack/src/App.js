import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Hoteles from './pages/Hoteles';
import TouristZones from './pages/TouristZones';
import Compra from './pages/Compra';
import Vuelos from './pages/Vuelos';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoteles" element={<Hoteles />} />
          <Route path="/tourist-zones" element={<TouristZones />} />
          <Route path="/Compra" element= {<Compra/>}/>
          <Route path="/Vuelos" element= {<Vuelos/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
