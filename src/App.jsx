import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        {/* අපේ පොදු මෙනු බාර් එක */}
        <Navbar />
        
        {/* පිටු මාරු වෙන කලාපය */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<div style={{padding: '50px', textAlign:'center'}}><h2>Rooms Page Coming Soon...</h2></div>} />
          <Route path="/about" element={<div style={{padding: '50px', textAlign:'center'}}><h2>About Us Page Coming Soon...</h2></div>} />
          <Route path="/admin" element={<div style={{padding: '50px', textAlign:'center'}}><h2>Admin Panel Coming Soon...</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;