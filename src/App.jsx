import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomsPage from './pages/rooms';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div>
        {/* අපේ පොදු මෙනු බාර් එක */}
        <Navbar />
        
        {/* පිටු මාරු වෙන කලාපය */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage/>}/>
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<div style={{padding: '50px', textAlign:'center'}}><h2>Admin Panel Coming Soon...</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;