import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Catering from './pages/Catering'
import Delivery from './pages/Delivery';
import FoodTruck from './pages/FoodTruck';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/foodtruck' element={<FoodTruck />} />
      </Routes>
    </Router>
  );
}

export default App;