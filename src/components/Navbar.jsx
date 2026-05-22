import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/login/loginModel'; // 👈 කලින් හදපු LoginModal එක මෙතනට import කරගන්න
import SignUpModal from '../components/login/signupModel';

const Navbar = () => {
  // Buttons wala interactive hover states sandaha state management
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);
  
  // 🔑 MODAL එක OPEN/CLOSE කරන්න භාවිතා කරන STATE එක
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        backgroundColor: '#0A2540', // Deep Azure Blue
        color: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        {/* 1. LOGO SECTION */}
        <div style={{ fontSize: '24px', fontWeight: '800', color: '#FFD700', letterSpacing: '0.5px' }}>
          Azure Horizon<span style={{ color: 'white' }}>.</span>
        </div>

        {/* 2. NAVIGATION LINKS */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/rooms" style={linkStyle}>Rooms</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
        </div>

        {/* 3. RIGHT SIDE: PROFILE, LOGIN & ACTION BUTTONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Profile Icon SVG & Authentication links */}
          <div 
            onClick={() => setIsModalOpen(true)} // 👈 මුළු Profile/Login section එකම click කරද්දී modal එක open වෙන්න
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            {/* User Profile SVG Icon */}
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isLoginHovered ? '#FFD700' : '#94A3B8'} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ transition: '0.3s' }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            
            {/* Modern Login / Sign Up UI buttons */}
            <span 
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
              style={{ 
                color: isLoginHovered ? '#FFD700' : '#E2E8F0', 
                fontWeight: '600', 
                fontSize: '14px',
                transition: '0.3s'
              }}
            >
              Login
            </span>
            <span style={{ color: '#475569', fontSize: '14px' }}>/</span>
            <span onClick={() => setIsSignUpOpen(true)}
              style={{ 
                color: '#E2E8F0', 
                fontWeight: '500', 
                fontSize: '14px' 
              }}
            >
              Sign Up
            </span>
          </div>

          {/* Premium Book Now Button */}
          <button 
            onMouseEnter={() => setIsBookHovered(true)}
            onMouseLeave={() => setIsBookHovered(false)}
            style={{
              backgroundColor: isBookHovered ? '#E6C200' : '#FFD700', 
              color: '#0A2540',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: isBookHovered ? '0 4px 15px rgba(255,215,0,0.4)' : '0 4px 10px rgba(255,215,0,0.2)',
              transition: 'all 0.3s ease',
              transform: isBookHovered ? 'translateY(-1px)' : 'none'
            }}
          >
            Book Now
          </button>

        </div>
      </nav>

      {/* 📥 4. LOGIN MODAL COMPONENT */}
      {/* State එක අනුව Modal එක auto popup වෙනවා, Close කලාම state එක false වෙනවා */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {/* 📥 SIGN UP MODAL */}
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSwitchToLogin={() => { setIsSignUpOpen(false); setIsLoginOpen(true); }} // Register එකේ ඉඳන් Login වලට මාරු වෙන්න
      />
    </>

  );
};

// Common Link Style
const linkStyle = {
  color: '#E2E8F0',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '15px',
  transition: '0.3s',
};

export default Navbar;