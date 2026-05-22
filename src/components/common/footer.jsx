import React from 'react';

const ModernFooter = () => {
  return (
    <footer style={{
      backgroundColor: '#0A2540',
      color: '#FFFFFF',
      padding: '60px 40px 30px 40px',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
        
        {/* BRAND & LOGO SECTION */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', fontWeight: '800', margin: '0 0 15px 0', letterSpacing: '1px' }}>
            AZURE HORIZON<span style={{ color: '#A07817' }}>.</span>
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
            Experience the perfect blend of modern luxury and rich ancient heritage in Anuradhapura, Sri Lanka.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            {['Home', 'About Rooms', 'Special Offers', 'Contact Us'].map(link => (
              <li key={link}><a href={`#${link}`} style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#FFFFFF'} onMouseLeave={e => e.target.style.color = '#94A3B8'}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Contact Info</h4>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 10px 0' }}>📍 Anuradhapura, Sri Lanka</p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: '0 0 10px 0' }}>📞 +94 25 123 4567</p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', margin: 0 }}>✉️ info@azurehorizon.com</p>
        </div>

        {/* NEWSLETTER */}
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: '700', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Newsletter</h4>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '15px', marginTop: 0 }}>Subscribe for luxury deals.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="Your Email" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #1A3E61', backgroundColor: '#0F2D4A', color: '#FFFFFF', outline: 'none', flex: 1, fontSize: '14px' }} />
            <button style={{ padding: '10px 16px', backgroundColor: '#A07817', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Join</button>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', height: '1px', backgroundColor: '#1A3E61', margin: '40px 0 20px 0' }} />
      <div style={{ textalign: 'center', color: '#64748B', fontSize: '0.85rem', textAlign: 'center' }}>
        © {new Date().getFullYear()} Azure Horizon. All Rights Reserved. Created with ❤️ by Anji Nangi.
      </div>
    </footer>
  );
};

export default ModernFooter;