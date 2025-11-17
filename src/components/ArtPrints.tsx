import React, { useState, useEffect } from "react";
import Header from "./layouts/Header";
import LoginModal from "./layouts/LoginModal";
import SignUpModal from "./layouts/SignUpModal";

// Art Card Component for Masonry
const ArtCard: React.FC<{ index: number }> = ({ index }) => {
  // Vary image heights for masonry effect
  const heights = [280, 320, 300, 360, 290, 340, 310, 350, 300, 330, 280, 360, 290, 340, 320, 300];
  const height = heights[index % heights.length];
  
  const images = [
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=400&q=80",
  ];
  
  const titles = [
    "Abstract Harmony",
    "Urban Dreams",
    "Nature's Canvas",
    "Color Symphony",
    "Minimalist Flow",
    "Vibrant Essence",
    "Serene Landscape",
    "Bold Expression",
  ];
  
  const imageUrl = images[index % images.length];
  const title = titles[index % titles.length];
  
  return (
    <div style={{
      borderRadius: 10,
      background: "#fff",
      boxShadow: "0 1px 6px #0002",
      marginBottom: window.innerWidth < 600 ? 16 : 24,
      breakInside: "avoid",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: `${height}px`,
          objectFit: "cover",
          display: "block"
        }}
      />
      <div style={{
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        <div style={{fontWeight: 600, fontSize: 16, color: "#151f33"}}>{title}</div>
        <div style={{display: "flex", flexWrap: "wrap", gap: 8}}>
          <span style={pill}>Modern</span>
          <span style={pill}>Abstract</span>
          <span style={pill}>Art Print</span>
        </div>
      </div>
    </div>
  );
};

// Pills styling
const pill: React.CSSProperties = {
  background: "#def2ea",
  color: "#36a97c",
  borderRadius: 6,
  padding: "2px 8px",
  fontSize: 11,
  fontWeight: 600,
};

// ArtPrints Component
const ArtPrints: React.FC<{ 
  onBack: () => void;
  onNavigateToHome?: () => void;
  onNavigateToArtPrints?: () => void;
  onNavigateToArtists?: () => void;
}> = ({ onBack, onNavigateToHome, onNavigateToArtPrints, onNavigateToArtists }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [, forceUpdate] = useState(0);
  
  useEffect(() => {
    const handleResize = () => forceUpdate(n => n + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate number of columns based on screen width
  const getColumns = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    if (window.innerWidth < 1200) return 3;
    return 4;
  };

  const columns = getColumns();
  const padding = window.innerWidth < 600 ? 16 : window.innerWidth < 900 ? 24 : 32;

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        margin: 0,
        padding: 0
      }}
    >
      <Header
        onLoginClick={() => { setShowLogin(true); setShowSignUp(false); }}
        onSignUpClick={() => { setShowSignUp(true); setShowLogin(false); }}
        onArtPrintsClick={onNavigateToArtPrints || (() => {})}
        onArtistsClick={onNavigateToArtists}
        onHomeClick={onNavigateToHome || onBack}
        currentPage="artprints"
      />
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          padding: `${padding}px`,
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{
          fontSize: window.innerWidth < 600 ? 32 : 48,
          fontWeight: 700,
          marginBottom: 32,
          color: "#171c23",
          letterSpacing: -1,
        }}>
          Art Prints Gallery
        </h1>

        <div
          style={{
            columnCount: columns,
            columnGap: window.innerWidth < 600 ? 16 : 24,
            width: '100%',
          }}
        >
          {Array.from({ length: 24 }).map((_, idx) => (
            <ArtCard key={idx} index={idx} />
          ))}
        </div>
      </div>
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSignUpClick={() => { setShowLogin(false); setShowSignUp(true); }}
      />
      <SignUpModal
        open={showSignUp}
        onClose={() => setShowSignUp(false)}
        onLoginClick={() => { setShowSignUp(false); setShowLogin(true); }}
      />
    </div>
  );
};

export default ArtPrints;

