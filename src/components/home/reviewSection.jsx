import React, { useState } from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sachini Perera",
      role: "Verified Guest",
      rating: 5,
      comment: "Absolutely amazing experience! The ocean suite views were breathtaking and the hospitality was exceptional. Being just minutes away from Sri Maha Bodhi made our spiritual trip so peaceful. Highly recommended!",
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Kamal Silva",
      role: "Family Vacationer",
      rating: 5,
      comment: "Excellent service and ultra-modern infrastructure. The private safari arrangement to Wilpattu was seamless. Kids loved the infinity pool. Will definitely return next season!",
      date: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Michelle Alwis",
      role: "Solo Traveler",
      rating: 4,
      comment: "The wellness spa treatment was top-notch. Very clean rooms and friendly front desk staff available 24/7. Authentic Sri Lankan food at the fine dining restaurant was delicious.",
      date: "3 days ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Infinite scroll එක කැඩෙන්නේ නැතුව දිගටම යන්න reviews list එක double කලා
  const doubleReviews = [...reviews, ...reviews];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section style={{
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      padding: '100px 40px',
      backgroundColor: '#F5F7FA', // ඔයා කලින් ඕකේ කරපු Soft ලා පසුබිම
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      boxSizing: 'border-box',
      gap:'50px'
    }}>
      {/* 🔄 Infinite Auto-Scroll එක සඳහා අවශ්‍ය CSS Keyframes */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .reviews-scroll-container {
          animation: scrollUp 20s linear infinite;
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div style={{ flex: '1 1 350px', textAlign: 'left' }}>
          <span style={{ 
            color: '#A07817', 
            fontWeight: '700', 
            fontSize: '13px', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '12px'
          }}>
            Guest Experiences
          </span>
          <h2 style={{ 
            fontSize: '3rem', 
            color: '#0A2540', 
            fontWeight: '850', 
            margin: '0 0 20px 0',
            lineHeight: '1.15',
            letterSpacing: '-1px'
          }}>
            What Our <br/>
            Clients Say <br/>
            About Us<span style={{ color: '#A07817' }}>.</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: '1.65', margin: 0 }}>
            Explore real feedback from travelers who experienced the premium luxury and hospitality of Azure Horizon.
          </p>
        </div>

        {/* RIGHT SIDE: SCROLLING WINDOW */}
        <div 
          onMouseEnter={() => setIsPaused(true)} // මවුස් එක තිබ්බම scroll වෙන එක නවතිනවා
          onMouseLeave={() => setIsPaused(false)} // මවුස් එක ගත්තම ආයේ scroll වෙනවා
          style={{
            flex: '1 1 650px',
            height: '420px', // කාඩ්පත් 1.5ක් හෝ 2ක් විතරක් පෙනෙන ලස්සන window එකක්
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            // උඩ සහ යට ලස්සනට මැකීලා පේන්න දාපු transparent fade effect එකක්
            maskImage: 'linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)'
          }}
        >
          {/* SCROLLING TRACK */}
          <div 
            className="reviews-scroll-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              animationPlayState: isPaused ? 'paused' : 'running' // මවුස් එක තිබ්බම pause වෙනවා
            }}
          >
            {doubleReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                style={{
                  backgroundColor: '#FFFFFF', // 👈 හැම කාඩ් එකක්ම එකම පිරිසිදු සුදු පාටයි
                  borderRadius: '20px',
                  padding: '30px 35px',
                  textAlign: 'left',
                  boxShadow: '0 4px 20px rgba(10,37,64,0.03)',
                  border: '1px solid #DFE5ED', // 👈 හැම කාඩ් එකකටම එකම බෝඩර් එකයි, පාට මාරු වෙන්නේ නෑ
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '25px',
                  alignItems: 'center',
                }}
              >
                {/* USER PROFILE */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', minWidth: '190px' }}>
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0A2540' }} 
                  />
                  <div>
                    <h4 style={{ margin: '0 0 2px 0', color: '#0A2540', fontWeight: '700', fontSize: '15px' }}>
                      {review.name}
                    </h4>
                    <span style={{ color: '#64748B', fontSize: '12px', fontWeight: '500', display: 'block' }}>
                      {review.role}
                    </span>
                    <span style={{ color: '#94A3B8', fontSize: '11px' }}>{review.date}</span>
                  </div>
                </div>

                {/* COMMENT & STARS */}
                <div style={{ flex: '1 1 300px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                    {[...Array(5)].map((star, index) => (
                      <span key={index} style={{ color: index < review.rating ? '#FFD700' : '#CBD5E1', fontSize: '14px' }}>★</span>
                    ))}
                  </div>
                  <p style={{ color: '#334155', fontSize: '0.96rem', lineHeight: '1.6', margin: 0 }}>
                    "{review.comment}"
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;