import React from 'react';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;