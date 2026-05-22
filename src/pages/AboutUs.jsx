import React from 'react';
import ModernFooter from '../components/common/footer';

const AboutUs = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#334155', fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
      {/* 1. HERO SECTION */}
      <div style={{
        position: 'relative', width: '100%', height: '60vh',
        backgroundImage: 'linear-gradient(to right, rgba(10,37,64,0.8), rgba(10,37,64,0.4)), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', padding: '0 10%'
      }}>
        <div style={{ maxWidth: '600px', color: 'white' }}>
          <span style={{ color: '#FFD700', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px' }}>Our Story</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '10px 0 20px 0' }}>Welcome to Azure Horizon</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#E2E8F0' }}>
            Where historical grandeur meets modern luxury. Nestled in the heart of Anuradhapura, we offer an escape into elegance, comfort, and unparalleled service.
          </p>
        </div>
      </div>

      {/* 2. HOTEL DETAILS / HISTORY */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0A2540', fontWeight: '800', marginBottom: '20px' }}>A Legacy of Luxury</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748B', marginBottom: '20px' }}>
            Established with a vision to redefine hospitality, Azure Horizon Resort & Spa blends the rich cultural heritage of Sri Lanka with contemporary sophistication. From our carefully curated ocean-view suites to our fine-dining experiences, every detail is designed to leave a lasting impression.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748B' }}>
            Our mission is to provide a sanctuary where guests can rejuvenate their minds and bodies. Whether you are exploring ancient ruins or relaxing by our infinity pool, we ensure a seamless and memorable stay.
          </p>
        </div>
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" alt="Resort" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', backgroundColor: '#0A2540', color: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h3 style={{ margin: 0, fontSize: '2rem', color: '#FFD700' }}>15+</h3>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* 3. SPECIALTIES & FACILITIES */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#0A2540', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>Why Choose Us</span>
          <h2 style={{ fontSize: '2.5rem', color: '#0A2540', fontWeight: '800', marginTop: '10px', marginBottom: '50px' }}>Our Specialties</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { icon: '🌿', title: 'Herbal Spa', desc: 'Rejuvenate with authentic Ayurvedic treatments.' },
              { icon: '🍽️', title: 'Fine Dining', desc: 'Savor international and local cuisines by master chefs.' },
              { icon: '🏊', title: 'Infinity Pool', desc: 'Relax in our temperature-controlled pool with a view.' },
              { icon: '🚙', title: 'Safari Tours', desc: 'Exclusive guided tours to nearby national parks.' }
            ].map((spec, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '40px 20px', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{spec.icon}</div>
                <h3 style={{ fontSize: '1.2rem', color: '#0A2540', marginBottom: '10px' }}>{spec.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: '1.5' }}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SPECIAL OFFERS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0A2540', fontWeight: '800' }}>Special Offers</h2>
          <p style={{ color: '#64748B', fontSize: '1.1rem' }}>Take advantage of our seasonal packages for an unforgettable getaway.</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 350px', maxWidth: '500px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" alt="Honeymoon" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '30px' }}>
              <span style={{ backgroundColor: '#FFD700', color: '#0A2540', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>COUPLES</span>
              <h3 style={{ fontSize: '1.5rem', color: '#0A2540', margin: '15px 0 10px 0' }}>Romantic Honeymoon Package</h3>
              <p style={{ color: '#64748B', marginBottom: '20px' }}>Enjoy a 3-night stay in our Grand Ocean Suite with a complimentary couple's spa treatment and candlelit dinner.</p>
              <button style={{ width: '100%', padding: '12px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Claim Offer</button>
            </div>
          </div>
          
          <div style={{ flex: '1 1 350px', maxWidth: '500px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Family" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '30px' }}>
              <span style={{ backgroundColor: '#22C55E', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>FAMILY</span>
              <h3 style={{ fontSize: '1.5rem', color: '#0A2540', margin: '15px 0 10px 0' }}>Weekend Family Escape</h3>
              <p style={{ color: '#64748B', marginBottom: '20px' }}>Book a Luxury Family Villa and get free breakfast, kids club access, and a guided tour of Anuradhapura ruins.</p>
              <button style={{ width: '100%', padding: '12px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Claim Offer</button>
            </div>
          </div>
        </div>
      </div>
      <ModernFooter />
    </div>
  );
};

export default AboutUs;
