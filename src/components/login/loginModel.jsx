import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  // States for form handling & interactive features
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Modal එක open නැත්නම් මුකුත් render කරන්නේ නෑ
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
    // මෙතනට ඔයාගේ Backend Authentication (API Call) එක දාන්න පුළුවන්
  };

  return (
    // 1. BACKDROP OVERLAY
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 22, 38, 0.82)', // Deep dark overlay Blur එකත් එක්ක
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      
      {/* 2. MODAL CONTAINER */}
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '440px',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        position: 'relative',
        animation: 'modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        border: '1px solid #E2E8F0'
      }}>
        
        {/* ❌ CLOSE BUTTON */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#F1F5F9',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#64748B',
            fontWeight: 'bold',
            transition: '0.2s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#E2E8F0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#F1F5F9'}
        >
          ✕
        </button>

        {/* MODAL CONTENT BODY */}
        <div style={{ padding: '40px 35px' }}>
          
          {/* HEADER SECTION */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0A2540', margin: '0 0 8px 0' }}>
              Welcome Back<span style={{ color: '#FFD700' }}>.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '14px', margin: 0, fontWeight: '400' }}>
              Login to manage your premium bookings
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* EMAIL INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
                EMAIL ADDRESS
              </label>
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* PASSWORD INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
                PASSWORD
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: '45px' }} // Space for eye icon
                />
                {/* Show/Hide Password Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {showPassword ? '👁️' : '🙈'}
                </button>
              </div>
            </div>

            {/* REMEMBER ME & FORGOT PASSWORD */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', marginTop: '4px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: '#0A2540', cursor: 'pointer' }}
                />
                Remember me
              </label>
              <a href="/forgot-password" style={{ color: '#0A2540', textDecoration: 'none', fontWeight: '600' }}>
                Forgot Password?
              </a>
            </div>

            {/* SIGN IN BUTTON */}
            <button 
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? '#061626' : '#0A2540', // Deep Blue with Darker Blue on Hover
                color: 'white',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: isHovered ? '0 10px 20px rgba(10,37,64,0.25)' : '0 4px 12px rgba(10,37,64,0.15)',
                transition: 'all 0.3s ease',
                marginTop: '10px',
                transform: isHovered ? 'translateY(-1px)' : 'none'
              }}
            >
              Sign In
            </button>

          </form>

          {/* DIVIDER */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '25px 0', color: '#CBD5E1' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
            <span style={{ padding: '0 15px', fontSize: '12px', color: '#94A3B8', fontWeight: '500' }}>OR</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
          </div>

          {/* FOOTER REGISTRATION LINK */}
          <div style={{ textAlign: 'center', fontSize: '14px', color: '#64748B' }}>
            Don't have an account?{' '}
            <Link to="/register" onClick={onClose} style={{ color: '#0A2540', textDecoration: 'none', fontWeight: '700' }}>
              Create an account
            </Link>
          </div>

        </div>

      </div>
      
      {/* Component එක මුලින්ම load වෙද්දී ලස්සනට slide up වෙන්න දාපු CSS Keyframe Animation එක */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

    </div>
  );
};

// Common Input Style Module
const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  border: '1px solid #CBD5E1',
  borderRadius: '12px',
  fontSize: '14px',
  color: '#333333',
  backgroundColor: '#F8FAFC',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'inherit',
};

export default LoginModal;