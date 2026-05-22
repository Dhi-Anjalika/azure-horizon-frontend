import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/login/loginModel';
import SignUpModal from '../components/login/signupModel';

const Navbar = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isBookHovered, setIsBookHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        {/* 1. LOGO SECTION - Enhanced Typography */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFD700',
            display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(255,215,0,0.4)'
          }}>
            <span style={{ color: '#0A2540', fontWeight: '900', fontSize: '20px', fontFamily: 'serif' }}>A</span>
          </div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: 'white', letterSpacing: '1px' }}>
              Azure <span style={{ color: '#FFD700' }}>Horizon</span>
            </div>
            <div style={{ fontSize: '10px', color: '#94A3B8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '-4px' }}>
              Resort & Spa
            </div>
          </Link>
        </div>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/rooms" style={linkStyle}>Rooms</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/gallery" style={linkStyle}>Gallery</Link>
        </div>

        {/* 3. RIGHT SIDE: PROFILE & ACTIONS */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={isLoginHovered ? '#FFD700' : '#94A3B8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: '0.3s' }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
              style={{ color: isLoginHovered ? '#FFD700' : '#E2E8F0', fontWeight: '600', fontSize: '14px', transition: '0.3s' }}
            >
              Login
            </span>
            <span style={{ color: '#475569', fontSize: '14px' }}>/</span>
            <span
              onClick={(e) => { e.stopPropagation(); setIsSignUpOpen(true); }}
              style={{ color: '#E2E8F0', fontWeight: '500', fontSize: '14px', transition: '0.3s' }}
            >
              Sign Up
            </span>
          </div>

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

        {/* HAMBURGER MENU ICON (MOBILE) */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu} style={{ display: 'none', cursor: 'pointer' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, width: '100%', backgroundColor: '#0A2540',
          display: 'flex', flexDirection: 'column', padding: '20px', gap: '20px', zIndex: 999,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)', borderTop: '1px solid #1E3A8A'
        }}>
          <Link to="/" onClick={toggleMobileMenu} style={mobileLinkStyle}>Home</Link>
          <Link to="/rooms" onClick={toggleMobileMenu} style={mobileLinkStyle}>Rooms</Link>
          <Link to="/about" onClick={toggleMobileMenu} style={mobileLinkStyle}>About Us</Link>
          <Link to="/gallery" onClick={toggleMobileMenu} style={mobileLinkStyle}>Gallery</Link>
          <hr style={{ borderColor: '#1E3A8A', width: '100%', margin: '10px 0' }} />
          <div onClick={() => { toggleMobileMenu(); setIsModalOpen(true); }} style={mobileLinkStyle}>
            Login / Sign Up
          </div>
          <button style={{
            backgroundColor: '#FFD700', color: '#0A2540', border: 'none', padding: '15px',
            borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', width: '100%'
          }}>
            Book Now
          </button>
        </div>
      )}

      {/* CSS For Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .desktop-actions { display: none !important; }
            .mobile-menu-icon { display: block !important; }
          }
        `}
      </style>

      {/* MODALS */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToLogin={() => { setIsSignUpOpen(false); setIsModalOpen(true); }}
      />
    </>
  );
};

// Common Link Styles
const linkStyle = {
  color: '#E2E8F0', textDecoration: 'none', fontWeight: '500', fontSize: '15px', transition: 'color 0.3s',
};

const mobileLinkStyle = {
  color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '18px', padding: '10px 0', borderBottom: '1px solid transparent'
};

export default Navbar;