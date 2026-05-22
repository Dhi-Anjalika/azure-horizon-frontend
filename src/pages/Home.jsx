import React, { useState, useEffect } from 'react';
import ReviewsSection from '../components/home/reviewSection';
import ModernFooter from '../components/common/footer';

const Home = () => {
  // State Management for Interactivity
  const [activeTab, setActiveTab] = useState('all');
  const [vehicleType, setVehicleType] = useState('Luxury Sedan');
  const [pickupDate, setPickupDate] = useState('');
  const [isBotOpen, setIsBotOpen] = useState(false);

  // 🎠 1. COVER PHOTO SLIDER STATE & DATA
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
      title: "Welcome to Azure Horizon",
      subtitle: "Where Luxury Meets the Endless Golden Ocean",
      badge: "PREMIUM RESORT"
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
      title: "Exclusive Season Offers!",
      subtitle: "Get up to 35% OFF on Deluxe Ocean Suites this week.",
      badge: "LIMITED DISCOUNT",
      offer: "Use Code: AZURE35"
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80",
      title: "Unmatched Wellness & Spa",
      subtitle: "Complimentary Herbal Spa Treatment with every Family Booking.",
      badge: "SPECIAL PACKAGE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Data Sources
  const destinations = [
    { id: 1, name: "Sri Maha Bodhi", distance: "10 mins away", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", desc: "The oldest historically authenticated tree in the world, offering a serene spiritual escape." },
    { id: 2, name: "Ruwanwelisaya Stupa", distance: "15 mins away", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80", desc: "An architectural marvel of ancient Sri Lanka, magnificent when illuminated at night." },
    { id: 3, name: "Wilpattu National Park", distance: "45 mins away", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80", desc: "Experience an unforgettable wildlife safari featuring leopards and luxury camping." }
  ];

  const rooms = [
    { id: 1, type: 'standard', name: "Standard Coastal View", price: "$100", tag: "Cozy & Affordable", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=500&q=80" },
    { id: 2, type: 'deluxe', name: "Deluxe Ocean Sanctuary", price: "$180", tag: "Most Popular", img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=500&q=80" },
    { id: 3, type: 'suite', name: "Azure Horizon Royal Suite", price: "$350", tag: "Pure Luxury", img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=500&q=80" }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80", caption: "Luxury Spa Center" },
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80", caption: "Fine Dining Restaurant" },
    { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80", caption: "Infinity Swimming Pool" },
    { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80", caption: "Main Beach Lobby" }
  ];

  const filteredRooms = activeTab === 'all' ? rooms : rooms.filter(r => r.type === activeTab);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F8FAFC', fontFamily: '"Inter", "Segoe UI", sans-serif', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>

      {/* 🎠 1. DYNAMIC HERO SLIDER (COVER PHOTO WITH DISCOUNTS) */}
      <div style={{ width: '100%', height: '80vh', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <div style={{
              width: '100%', height: '100%',
              backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.4), rgba(10, 37, 64, 0.7)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              color: 'white', textAlign: 'center', padding: '0 20px', boxSizing: 'border-box'
            }}>
              <span style={{ backgroundColor: '#FFD700', color: '#0A2540', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                {slide.badge}
              </span>
              <h1 style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '15px', textShadow: '0 10px 30px rgba(0,0,0,0.5)', maxWidth: '900px', fontFamily: 'serif', lineHeight: '1.1' }}>
                {slide.title}
              </h1>
              <p style={{ fontSize: '1.4rem', color: '#F8FAFC', fontWeight: '400', marginBottom: '35px', maxWidth: '700px', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                {slide.subtitle}
              </p>
              {slide.offer && (
                <div style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', border: '1px dashed #FFD700', padding: '10px 20px', borderRadius: '8px', marginBottom: '30px', display: 'inline-block' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '1px' }}>{slide.offer}</span>
                </div>
              )}
              <button style={{ backgroundColor: '#0A2540', color: 'white', border: 'none', padding: '15px 40px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'background-color 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#A07817'} onMouseLeave={e => e.target.style.backgroundColor = '#0A2540'}>
                EXPLORE OFFERS
              </button>
            </div>
          </div>
        ))}
        {/* Slider Navigation Dots */}
        <div style={{ position: 'absolute', bottom: '130px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '15px', zIndex: '10' }}>
          {slides.map((_, idx) => (
            <div key={idx} onClick={() => setCurrentSlide(idx)} style={{ width: idx === currentSlide ? '30px' : '10px', height: '10px', borderRadius: '5px', backgroundColor: idx === currentSlide ? '#FFD700' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }}></div>
          ))}
        </div>

        {/* Floating Search Panel On Top of Slider */}
        <div style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', zIndex: '10', width: '100%', padding: '0 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '20px 30px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.25)', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', color: '#333', width: '100%', maxWidth: '1100px', boxSizing: 'border-box' }}>
            <div style={{ flex: 1, minWidth: '150px', textAlign: 'left' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748B', display: 'block', marginBottom: '5px' }}>CHECK-IN DATE</label>
              <input type="date" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1, minWidth: '150px', textAlign: 'left' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748B', display: 'block', marginBottom: '5px' }}>CHECK-OUT DATE</label>
              <input type="date" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1, minWidth: '130px', textAlign: 'left' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748B', display: 'block', marginBottom: '5px' }}>ROOM SUITE</label>
              <select style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '8px', backgroundColor: 'white', boxSizing: 'border-box' }}>
                <option>Standard Pack</option>
                <option>Deluxe Suite</option>
                <option>Presidential Suite</option>
              </select>
            </div>
            <button style={{ backgroundColor: '#0A2540', color: 'white', border: 'none', padding: '14px 35px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-end', height: '48px', boxShadow: '0 4px 12px rgba(10,37,64,0.2)', transition: 'background-color 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#A07817'} onMouseLeave={e => e.target.style.backgroundColor = '#0A2540'}>
              EXPLORE SLOTS
            </button>
          </div>
        </div>
      </div>

      {/* 📊 2. REAL-TIME SMART UTILITIES BAR - FULL WIDTH */}
      <div style={{ width: '100%', padding: '20px 40px', boxSizing: 'border-box', marginTop: '10px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '14px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'center', border: '1px solid #F1F5F9' }}>
          <div>
            <h4 style={{ margin: 0, color: '#64748B', fontSize: '12px', letterSpacing: '0.5px' }}>ANURADHAPURA WEATHER</h4>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#0A2540' }}>☀️ 31°C / Perfect for Sightseeing</p>
          </div>
          <div style={{ borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0' }}>
            <h4 style={{ margin: 0, color: '#64748B', fontSize: '12px', letterSpacing: '0.5px' }}>REAL-TIME AVAILABILITY</h4>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#22C55E' }}>🔒 Only 8 Rooms Left Today</p>
          </div>
          <div>
            <h4 style={{ margin: 0, color: '#64748B', fontSize: '12px', letterSpacing: '0.5px' }}>GUEST SATISFACTION</h4>
            <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#0A2540' }}>⭐⭐⭐⭐⭐ 4.9/5 TrustScore</p>
          </div>
        </div>
      </div>

      {/* 🎛️ 3. NO WHITE SPACE - BANNER SECTION - FULL WIDTH */}
      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0px', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9' }}>
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80" alt="Resort Area" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }} />
          <div style={{ padding: '50px' }}>
            <span style={{ color: '#0A2540', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Elite Hospitality</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0A2540', marginTop: '5px', marginBottom: '20px', fontWeight: '700', lineHeight: '1.2' }}>Crafted To Meet Your Dream Vacation</h2>
            <p style={{ color: '#64748B', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>
              Azure Horizon Resort & Spa features an ultra-modern infrastructure combined with the historic spirit of Anuradhapura. Enjoy centralized air conditioning, elite pool accesses, dynamic local safari setups, and full-spectrum customer care modules tailored entirely for your relaxation.
            </p>
          </div>
        </div>
      </div>

      {/* 🎛️ 4. ACCOMMODATION ZONE - FULL WIDTH */}
      <div style={{ width: '100%', padding: '40px 40px', boxSizing: 'border-box', textAlign: 'center' }}>
        <span style={{ color: '#0A2540', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>Our Spaces</span>
        <h2 style={{ fontSize: '2.2rem', color: '#0A2540', marginTop: '5px', marginBottom: '30px', fontWeight: '700' }}>Curated Luxury Accommodations</h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          {['all', 'standard', 'deluxe', 'suite'].map(tab => (
            <button
              key={tab} onClick={() => setActiveTab(tab)}
              style={{ padding: '10px 24px', borderRadius: '25px', border: 'none', fontWeight: '600', cursor: 'pointer', textTransform: 'capitalize', backgroundColor: activeTab === tab ? '#0A2540' : '#E2E8F0', color: activeTab === tab ? 'white' : '#475569', transition: '0.3s' }}
            >
              {tab === 'all' ? 'All Rooms' : `${tab} Style`}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {filteredRooms.map(room => (
            <div key={room.id} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.02)', textAlign: 'left', border: '1px solid #F1F5F9' }}>
              <div style={{ position: 'relative' }}>
                <img src={room.img} alt={room.name} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: '#FFD700', color: '#0A2540', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{room.tag}</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#0A2540', fontSize: '1.35rem', fontWeight: '700' }}>{room.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0A2540' }}>{room.price}<span style={{ fontSize: '14px', fontWeight: 'normal', color: '#64748B' }}> / night</span></span>
                  <button style={{ backgroundColor: '#0A2540', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Instant Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🖼️ 5. PHOTO GALLERY SECTION - FULL WIDTH */}
      <div style={{ backgroundColor: 'white', padding: '60px 40px', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <span style={{ color: '#0A2540', fontWeight: 'bold', fontSize: '13px', textTransform: 'uppercase' }}>Visual Tour</span>
          <h2 style={{ fontSize: '2.2rem', color: '#0A2540', fontWeight: '700', marginTop: '5px', marginBottom: '35px' }}>Azure Horizon Image Gallery</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {galleryImages.map((img, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '240px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
                <img src={img.url} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(10,37,64,0.95))', padding: '20px', color: 'white', textAlign: 'left' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.5px' }}>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📍 6. HISTORIC DESTINATIONS - FULL WIDTH */}
      <div style={{ padding: '60px 40px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'left', marginBottom: '40px' }}>
          <span style={{ color: '#0A2540', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px' }}>Explore Around</span>
          <h2 style={{ fontSize: '2.2rem', color: '#0A2540', fontWeight: '700', marginTop: '5px' }}>Closest Historical Destinations</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {destinations.map(place => (
            <div key={place.id} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9' }}>
              <img src={place.image} alt={place.name} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '25px' }}>
                <span style={{ backgroundColor: '#0A2540', color: 'white', fontSize: '11px', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold' }}>{place.distance}</span>
                <h3 style={{ color: '#0A2540', fontSize: '1.3rem', margin: '15px 0 10px 0', fontWeight: '700' }}>{place.name}</h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚗 7. VEHICLE BOOKING LOGISTICS - FULL WIDTH */}
      <div style={{ width: '100%', padding: '20px 40px 60px 40px', boxSizing: 'border-box' }}>
        <div style={{ backgroundImage: 'linear-gradient(135deg, #0A2540 0%, #1E3A5F 100%)', color: 'white', borderRadius: '24px', padding: '50px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px', boxShadow: '0 20px 40px rgba(10,37,64,0.15)' }}>
          <div style={{ flex: '1 1 450px' }}>
            <span style={{ color: '#FFD700', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px' }}>Premium Travel Logistics</span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '5px', marginBottom: '15px', fontWeight: '700' }}>Need a Ride? Book Your Hotel Vehicle</h2>
            <p style={{ color: '#94A3B8', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Make your tours seamless. Book a luxury private Sedan, heavy SUV, or family KDH van straight from our terminal to any ancient site or airport.
            </p>
          </div>

          <div style={{ backgroundColor: 'white', color: '#333', padding: '30px', borderRadius: '16px', flex: '1 1 380px', maxWidth: '480px', boxSizing: 'border-box' }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#0A2540', fontSize: '1.25rem', fontWeight: '700' }}>Quick Ride Reservation</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748B', display: 'block', marginBottom: '6px' }}>SELECT CAR CATEGORY</label>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px', backgroundColor: 'white' }}>
                <option value="Luxury Sedan">Luxury Sedan (BMW Premier)</option>
                <option value="Prado SUV">4x4 Luxury SUV (Prado Series)</option>
                <option value="KDH Van">Family Tour Van (KDH Premium)</option>
              </select>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748B', display: 'block', marginBottom: '6px' }}>PICKUP DATE & TIME</label>
              <input type="datetime-local" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px' }} />
            </div>
            <button onClick={() => alert(`Perfect! Azure Horizon Logistics has received your ${vehicleType} request for ${pickupDate || 'scheduled time'}.`)} style={{ width: '100%', backgroundColor: '#FFD700', color: '#0A2540', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,215,0,0.3)' }}>
              Confirm Ride Request
            </button>
          </div>
        </div>
      </div>
      {/*REVIEW SECTION*/}
      <ReviewsSection />

      {/* 🗺️ 8. MODERN SPLIT GOOGLE MAP SECTION - FULL WIDTH */}
      <div style={{ width: '100%', padding: '0 40px 60px 40px', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>

          {/* Map Information Left Panel */}
          <div style={{ padding: '50px', backgroundColor: '#0A2540', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: '#FFD700', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Location Guide</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginTop: '5px', marginBottom: '20px' }}>Getting To Azure Horizon</h2>
            <p style={{ color: '#94A3B8', lineHeight: '1.7', marginBottom: '30px', fontSize: '1rem' }}>
              Nestled beautifully in the heart of the sacred city of Anuradhapura, our resort provides unparalleled access to ancient ruins, pristine lakes, and fine culinary hubs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>📍</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: '#FFD700' }}>Resort Address</h4>
                  <p style={{ margin: 0, color: '#F1F5F9', fontSize: '14px' }}>New Town, Anuradhapura, Sri Lanka.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>⏰</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: '#FFD700' }}>Front Desk Hours</h4>
                  <p style={{ margin: 0, color: '#F1F5F9', fontSize: '14px' }}>24/7 Concierge & Reception Support</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '24px' }}>📞</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: '#FFD700' }}>Hotline Assistance</h4>
                  <p style={{ margin: 0, color: '#F1F5F9', fontSize: '14px' }}>+94 25 222 4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Right Panel */}
          <div style={{ height: '450px', position: 'relative' }}>
            <iframe
              title="Azure Horizon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63163.791559132225!2d80.37920115!3d8.33467475!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!3m3!1m2!1s0x3afcf4f364ca98e1%3A0x19dfa996796c0ba7!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1716380000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

      {/* 🌟 NEW: CULINARY EXCELLENCE (BUFFET & DINING) */}
      <div style={{ width: '100%', padding: '80px 40px', boxSizing: 'border-box', backgroundColor: '#FFFFFF' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#A07817', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>Epicurean Journeys</span>
          <h2 style={{ fontSize: '2.8rem', color: '#0A2540', fontWeight: '800', marginTop: '10px', fontFamily: 'serif' }}>Culinary Excellence & Buffets</h2>
          <p style={{ color: '#64748B', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Indulge in a world of flavors. Our signature restaurants offer grand international buffets, live cooking stations, and exclusive fine dining experiences crafted by award-winning chefs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80" alt="Breakfast Buffet" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div style={{ padding: '30px', backgroundColor: '#FAFAFA' }}>
              <h3 style={{ color: '#0A2540', fontSize: '1.4rem', margin: '0 0 10px 0' }}>Grand Breakfast Buffet</h3>
              <p style={{ color: '#64748B', margin: '0 0 15px 0' }}>Start your day with an opulent spread of continental pastries, tropical fruits, and live egg stations.</p>
              <span style={{ color: '#A07817', fontWeight: '700' }}>Complimentary for All Guests</span>
            </div>
          </div>

          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80" alt="Seafood Night" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div style={{ padding: '30px', backgroundColor: '#FAFAFA' }}>
              <h3 style={{ color: '#0A2540', fontSize: '1.4rem', margin: '0 0 10px 0' }}>Ocean's Catch Seafood Night</h3>
              <p style={{ color: '#64748B', margin: '0 0 15px 0' }}>Every Friday night, enjoy a limitless buffet of the freshest Indian Ocean seafood and premium steaks.</p>
              <span style={{ color: '#A07817', fontWeight: '700' }}>Special Rate for Direct Bookings</span>
            </div>
          </div>
        </div>
      </div>

      {/* 👑 NEW: GUEST PRIVILEGES & BENEFITS */}
      <div style={{ width: '100%', padding: '80px 40px', boxSizing: 'border-box', backgroundColor: '#0A2540', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#FFD700', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>Exclusive Rewards</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginTop: '10px', fontFamily: 'serif' }}>Why Book Directly With Us?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { icon: '🚗', title: 'Airport Transfers', desc: 'Complimentary luxury SUV transfer for stays of 3 nights or more.' },
              { icon: '💆‍♀️', title: 'Spa Credits', desc: 'Receive a $50 credit towards our signature Ayurvedic treatments.' },
              { icon: '🥂', title: 'Welcome Amenities', desc: 'Enjoy a bottle of premium champagne and a fruit basket upon arrival.' },
              { icon: '⏰', title: 'Flexible Timings', desc: 'Guaranteed early check-in at 10 AM and late check-out at 4 PM.' }
            ].map((benefit, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#FFD700', marginBottom: '15px' }}>{benefit.title}</h3>
                <p style={{ color: '#CBD5E1', lineHeight: '1.6' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👤 9. MODERN UNIFIED FOOTER COMPONENT */}
      <ModernFooter />

      {/* 🤖 10. SMART AI CHATBOT (FLOATING) */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '1000' }}>
        <button onClick={() => setIsBotOpen(!isBotOpen)} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#0A2540', color: 'white', border: 'none', fontSize: '24px', cursor: 'pointer', boxShadow: '0 8px 25px rgba(10,37,64,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {isBotOpen ? '✖' : '💬'}
        </button>
        {isBotOpen && (
          <div style={{ position: 'absolute', bottom: '75px', right: '0', width: '320px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
            <div style={{ backgroundColor: '#0A2540', color: 'white', padding: '15px 20px', fontWeight: 'bold', fontSize: '14px' }}>🤖 Azure Horizon Virtual Agent</div>
            <div style={{ padding: '20px', height: '180px', overflowY: 'auto', backgroundColor: '#F8FAFC', fontSize: '13px' }}>
              <p style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0', margin: 0 }}>Hello! Welcome to Azure Horizon. Looking for seasonal discounts or room availability today?</p>
            </div>
            <div style={{ padding: '10px', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '8px' }}>
              <input type="text" placeholder="Type message..." style={{ flex: 1, padding: '8px', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '13px' }} />
              <button onClick={() => alert("Chatbot backend connected!")} style={{ backgroundColor: '#0A2540', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}>Send</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;