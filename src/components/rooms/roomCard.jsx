import React, { useState } from 'react';

const RoomCard = ({ room, onCompareToggle, isCompared }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Carousel Next/Prev Controls
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev + 1) % room.images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 30px 60px rgba(10,37,64,0.08)' : '0 4px 20px rgba(0,0,0,0.01)',
        border: isHovered ? '1px solid #A07817' : '1px solid #EAF0F6',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* 📸 IMAGE CAROUSEL SECTION */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <img src={room.images[currentImgIdx]} alt={room.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        {/* CAROUSEL BUTTONS */}
        <button onClick={prevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontWeight: '700' }}>‹</button>
        <button onClick={nextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontWeight: '700' }}>›</button>

        {/* CAROUSEL DOTS INDICATORS */}
        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
          {room.images.map((_, i) => (
            <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: currentImgIdx === i ? '#FFD700' : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>

        {/* 🏷️ TAG & RATINGS */}
        <span style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#0A2540', color: '#FFFFFF', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>{room.tag}</span>
        <span style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.9)', color: '#0A2540', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '700' }}>⭐ {room.rating}</span>
      </div>

      {/* 📝 CARD BODY */}
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* TITLE & PRICE */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#0A2540', margin: 0, fontWeight: '800' }}>{room.title}</h3>
          <div style={{ textAlign: 'right' }}>
            {room.originalPrice && <span style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'line-through', marginRight: '6px' }}>{room.originalPrice}</span>}
            <span style={{ fontSize: '1.5rem', color: '#A07817', fontWeight: '800' }}>{room.price}</span>
            <span style={{ fontSize: '12px', color: '#64748B' }}>/night</span>
          </div>
        </div>

        <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 15px 0' }}>{room.description}</p>

        {/* 🛏️ KEY AMENITIES WITH ICONS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>🛏️ {room.bedType}</span>
          <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>👥 Max {room.maxGuests}</span>
          <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>🌐 Free Wi-Fi</span>
          <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>❄️ AC</span>
          {room.size && <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>📐 {room.size}</span>}
          {room.breakfast && <span style={{ fontSize: '13px', backgroundColor: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', color: '#334155', fontWeight: '500' }}>🍳 {room.breakfast}</span>}
        </div>

        {/* 🚨 EXTRA UX FEATURES: URGENCY, CANCELLATION & COMPARE */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '12px', borderTop: '1px solid #F1F5F9', paddingTop: '15px' }}>
          <span style={{ color: '#EF4444', fontWeight: '700' }}>🔥 Only {room.left} left!</span>
          <span style={{ color: '#10B981', fontWeight: '600' }}>🛡️ {room.cancellation}</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: '#0A2540', fontWeight: '600' }}>
            <input type="checkbox" checked={isCompared} onChange={() => onCompareToggle(room)} style={{ cursor: 'pointer' }} /> Compare
          </label>
        </div>

        {/* 🎯 CTA BUTTONS */}
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
          <button style={{ flex: 1, padding: '12px', backgroundColor: '#E2E8F0', color: '#0A2540', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>View Details</button>
          <button style={{ flex: 1, padding: '12px', backgroundColor: '#0A2540', color: '#FFFFFF', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = '#A07817'} onMouseLeave={e => e.target.style.backgroundColor = '#0A2540'}>Book Now</button>
        </div>

      </div>
    </div>
  );
};

export default RoomCard;