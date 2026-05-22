import React from 'react';

const ModernFooter = () => {
  return (
    <footer style={{
      backgroundColor: '#061626',
      color: '#FFFFFF',
      padding: '60px 40px 30px 40px',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '40px' }}>

        {/* BRAND & LOGO SECTION */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: '800', margin: '0 0 15px 0', letterSpacing: '1px' }}>
            AZURE HORIZON<span style={{ color: '#A07817' }}></span>
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
            Experience the perfect blend of modern luxury and rich ancient heritage in Anuradhapura, Sri Lanka.
          </p>

          {/* SOCIAL MEDIA LOGOS */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={socialIconStyle}>
              {/* Facebook SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg>
            </a>
            <a href="#" style={socialIconStyle}>
              {/* Instagram SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="#" style={socialIconStyle}>
              {/* Twitter/X SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            {['Home', 'Rooms', 'Gallery', 'About Us'].map(link => (
              <li key={link}><a href="/" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#FFFFFF'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* CONTACT US DETAILS */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Contact Us</h4>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>📍</span> New Town, Anuradhapura, Sri Lanka
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>📞</span> +94 25 123 4567
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>✉️</span> reservations@azurehorizon.com
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>🕒</span> Open 24/7 for support
          </p>
        </div>

        {/* NEWSLETTER */}
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Newsletter</h4>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '15px', marginTop: 0 }}>Subscribe for exclusive luxury deals.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="Your Email" style={{ padding: '12px 14px', borderRadius: '8px', border: '1px solid #1A3E61', backgroundColor: '#0F2D4A', color: '#FFFFFF', outline: 'none', flex: 1, fontSize: '14px' }} />
            <button style={{ padding: '12px 20px', backgroundColor: '#A07817', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#825E0F'} onMouseLeave={e => e.target.style.backgroundColor = '#A07817'}>Join</button>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', height: '1px', backgroundColor: '#1A3E61', margin: '40px 0 20px 0' }} />
      <div style={{ color: '#64748B', fontSize: '0.85rem', textAlign: 'center' }}>
        © {new Date().getFullYear()} Azure Horizon Resort & Spa. All Rights Reserved. Created with ❤️ by Anjalika Dissanayaka.
      </div>

      <style>
        {`
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        `}
      </style>
    </footer>
  );
};

const socialIconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '36px',
  height: '36px',
  backgroundColor: '#0F2D4A',
  color: '#94A3B8',
  borderRadius: '50%',
  textDecoration: 'none',
  transition: 'all 0.3s ease'
};

export default ModernFooter;