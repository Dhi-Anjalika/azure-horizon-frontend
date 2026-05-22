import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import ModernFooter from '../components/common/footer';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomsData.find(r => r.id === parseInt(id));

  const [step, setStep] = useState(1);
  const [mealPlan, setMealPlan] = useState('Breakfast Only');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) return <div style={{ padding: '100px', textAlign: 'center' }}>Room Not Found</div>;

  const mealOptions = [
    { name: 'Breakfast Only', price: 0, desc: 'Included in room price' },
    { name: 'Half Board', price: 45, desc: 'Breakfast & Dinner Buffet' },
    { name: 'Full Board', price: 80, desc: 'Breakfast, Lunch & Dinner Buffet' },
    { name: 'All Inclusive', price: 120, desc: 'All meals + Premium Drinks' }
  ];

  const extraMealPrice = mealOptions.find(m => m.name === mealPlan).price;
  const total = room.price + extraMealPrice + 45; // 45 is taxes

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FAFAFA', fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
      
      {/* HEADER */}
      <div style={{ backgroundColor: '#0A2540', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'serif' }}>Secure Your Stay</h1>
        <p style={{ color: '#94A3B8', marginTop: '10px' }}>Complete your booking for the {room.title}</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        
        {/* LEFT: FORM STEPS */}
        <div style={{ flex: '1 1 600px' }}>
          
          {/* Progress Indicator */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            <div style={{ flex: 1, height: '4px', backgroundColor: step >= 1 ? '#A07817' : '#E2E8F0', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', backgroundColor: step >= 2 ? '#A07817' : '#E2E8F0', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', backgroundColor: step >= 3 ? '#A07817' : '#E2E8F0', borderRadius: '2px' }} />
          </div>

          {step === 1 && (
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h2 style={{ color: '#0A2540', marginBottom: '30px' }}>1. Guest Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>FIRST NAME</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>LAST NAME</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>PHONE NUMBER</label>
                <input type="tel" placeholder="+1 234 567 890" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
              </div>
              <button onClick={() => setStep(2)} style={{ padding: '16px 30px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Continue to Dining</button>
            </div>
          )}

          {step === 2 && (
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h2 style={{ color: '#0A2540', marginBottom: '30px' }}>2. Dining & Extras</h2>
              <p style={{ color: '#64748B', marginBottom: '20px' }}>Select your preferred dining experience during your stay.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                {mealOptions.map((meal) => (
                  <div 
                    key={meal.name}
                    onClick={() => setMealPlan(meal.name)}
                    style={{ 
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                      padding: '20px', borderRadius: '12px', cursor: 'pointer',
                      border: mealPlan === meal.name ? '2px solid #A07817' : '1px solid #E2E8F0',
                      backgroundColor: mealPlan === meal.name ? '#FDFCF8' : 'white'
                    }}
                  >
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: '#0A2540', fontSize: '1.1rem' }}>{meal.name}</h4>
                      <span style={{ color: '#64748B', fontSize: '14px' }}>{meal.desc}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#0A2540' }}>
                      {meal.price === 0 ? 'Included' : `+$${meal.price}/day`}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => setStep(1)} style={{ padding: '16px 30px', backgroundColor: 'transparent', color: '#0A2540', border: '1px solid #0A2540', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Back</button>
                <button onClick={() => setStep(3)} style={{ padding: '16px 30px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Continue to Payment</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h2 style={{ color: '#0A2540', marginBottom: '30px' }}>3. Payment Details</h2>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>CARD NUMBER</label>
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>EXPIRY DATE</label>
                  <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#64748B', marginBottom: '8px' }}>CVV</label>
                  <input type="text" placeholder="123" style={{ width: '100%', padding: '14px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => setStep(2)} style={{ padding: '16px 30px', backgroundColor: 'transparent', color: '#0A2540', border: '1px solid #0A2540', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Back</button>
                <button onClick={() => alert("Booking Confirmed! Welcome to Azure Horizon.")} style={{ padding: '16px 30px', backgroundColor: '#A07817', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', flex: 1 }}>Confirm & Pay ${total}</button>
              </div>
            </div>
          )}

        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div style={{ flex: '1 1 350px', alignSelf: 'flex-start' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#0A2540' }}>Booking Summary</h3>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px solid #F1F5F9' }}>
              <img src={room.images[0]} alt="room" style={{ width: '100px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#0A2540' }}>{room.title}</h4>
                <div style={{ fontSize: '13px', color: '#64748B' }}>1 Room, 2 Guests</div>
                <div style={{ fontSize: '13px', color: '#64748B' }}>Oct 15 - Oct 16</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#334155' }}>
              <span>Room Rate (1 Night)</span>
              <span>${room.price}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#334155' }}>
              <span>Dining ({mealPlan})</span>
              <span>${extraMealPrice}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', color: '#334155' }}>
              <span>Taxes & Fees</span>
              <span>$45</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '2px solid #E2E8F0' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0A2540' }}>Total Price</span>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#A07817' }}>${total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;
