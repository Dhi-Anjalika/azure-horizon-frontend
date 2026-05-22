import React, { useState } from 'react';

const SignUpModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  // Fields සඳහා state management
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Modal එක open නැත්නම් මුකුත් render කරන්නේ නැහැ
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user with:", { username, email, mobile, password, agreeTerms });
    // මෙතනට ඔයාගේ Backend Sign Up API (e.g., Axios/Fetch post request) එක සම්බන්ධ කරන්න පුළුවන්
  };

  return (
    // 1. BACKDROP OVERLAY (පිටුපස ඇති කොටස Blur කරන overlay එක)
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 22, 38, 0.82)', 
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      
      {/* 2. MODAL CARD CONTAINER */}
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '460px',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        position: 'relative',
        animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
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
            zIndex: 10
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#E2E8F0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#F1F5F9'}
        >
          ✕
        </button>

        {/* MODAL CONTENT BODY */}
        <div style={{ padding: '40px 35px' }}>
          
          {/* HEADER SECTION */}
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0A2540', margin: '0 0 8px 0' }}>
              Create Account<span style={{ color: '#FFD700' }}>.</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '14px', margin: 0, fontWeight: '400' }}>
              Join Azure Horizon to experience premium luxury
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* USERNAME INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
                FULL NAME / USERNAME
              </label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* EMAIL INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
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

            {/* MOBILE NUMBER INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
                MOBILE NUMBER
              </label>
              <input 
                type="tel" 
                required
                placeholder="+94 7X XXX XXXX"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* PASSWORD INPUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative' }}>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>
                CREATE PASSWORD
              </label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: '45px' }}
                />
                {/* Password Toggle Button */}
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

            {/* TERMS & CONDITIONS CHECKBOX */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', marginTop: '6px' }}>
              <input 
                type="checkbox" 
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#0A2540', cursor: 'pointer', marginTop: '2px' }}
              />
              <label style={{ color: '#475569', lineHeight: '1.4', cursor: 'pointer' }}>
                I agree to the <a href="/terms" style={{ color: '#0A2540', textDecoration: 'none', fontWeight: '600' }}>Terms of Service</a> and <a href="/privacy" style={{ color: '#0A2540', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>.
              </label>
            </div>

            {/* REGISTER BUTTON */}
            <button 
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isHovered ? '#061626' : '#0A2540', // Hover වෙද්දී තද නිල් පාට වෙනවා
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
              Sign Up
            </button>

          </form>

          {/* DIVIDER */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', color: '#CBD5E1' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
            <span style={{ padding: '0 15px', fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>ALREADY HAVE AN ACCOUNT?</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
          </div>

          {/* LOGIN SWITCH LINK */}
          <div style={{ textAlign: 'center', fontSize: '14px', color: '#64748B' }}>
            Already registered?{' '}
            <button 
              type="button"
              onClick={onSwitchToLogin} // Click කලොත් Login modal එකට මාරු වෙන්න callback එක
              style={{ background: 'none', border: 'none', color: '#0A2540', fontWeight: '700', cursor: 'pointer', fontSize: '14px', padding: 0, textDecoration: 'none' }}
            >
              Sign In here
            </button>
          </div>

        </div>

      </div>
      
      {/* CSS Slide Up CSS Animation */}
      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

    </div>
  );
};

// Input Field පොදු Style Module එක
const inputStyle = {
  width: '100%',
  padding: '12px 16px',
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

export default SignUpModal;