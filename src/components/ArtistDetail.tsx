import React, { useState, useEffect } from "react";
import Header from "./layouts/Header";
import LoginModal from "./layouts/LoginModal";
import SignUpModal from "./layouts/SignUpModal";
import { artistsData } from "./artistsData";

// Art Card Component for Masonry
const ArtCard: React.FC<{ image: string; title: string; index: number }> = ({ image, title, index }) => {
  const heights = [280, 320, 300, 360, 290, 340, 310, 350, 300, 330, 280, 360];
  const height = heights[index % heights.length];
  
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
        src={image}
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
          <span style={pill}>Art Print</span>
          <span style={pill}>Available</span>
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

// ArtistDetail Component
const ArtistDetail: React.FC<{ 
  artistId: number;
  onNavigateToHome?: () => void;
  onNavigateToArtPrints?: () => void;
  onNavigateToArtists?: () => void;
}> = ({ artistId, onNavigateToHome, onNavigateToArtPrints, onNavigateToArtists }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [, forceUpdate] = useState(0);
  
  const artist = artistsData.find(a => a.id === artistId) || artistsData[0];
  
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
        onHomeClick={onNavigateToHome}
        currentPage="artists"
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
        {/* Artist Profile Section */}
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 900 ? 'column' : 'row',
          gap: 32,
          marginBottom: 48,
          alignItems: window.innerWidth < 900 ? 'center' : 'flex-start',
        }}>
          <img
            src={artist.image}
            alt={artist.name}
            style={{
              width: window.innerWidth < 900 ? '100%' : 300,
              maxWidth: 300,
              height: 300,
              objectFit: 'cover',
              borderRadius: 12,
              boxShadow: "0 4px 12px #0002",
            }}
          />
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <h1 style={{
              fontSize: window.innerWidth < 600 ? 32 : 48,
              fontWeight: 700,
              color: "#171c23",
              letterSpacing: -1,
              margin: 0,
            }}>
              {artist.name}
            </h1>
            <div style={{
              fontSize: 20,
              color: "#6b7280",
              fontWeight: 500,
            }}>
              {artist.specialty}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              fontSize: 15,
              color: "#9ca3af",
              marginTop: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14 }}>📍</span>
                <span>{artist.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14 }}>🎨</span>
                <span>{artist.works}</span>
              </div>
            </div>
            <div style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#4b5563",
              marginTop: 16,
            }}>
              {artist.bio}
            </div>
          </div>
        </div>

        {/* Artist's Art Gallery */}
        <h2 style={{
          fontSize: window.innerWidth < 600 ? 24 : 36,
          fontWeight: 700,
          marginBottom: 32,
          color: "#171c23",
          letterSpacing: -0.5,
        }}>
          Artwork Collection
        </h2>

        <div
          style={{
            columnCount: columns,
            columnGap: window.innerWidth < 600 ? 16 : 24,
            width: '100%',
          }}
        >
          {artist.artImages.map((image, idx) => (
            <ArtCard key={idx} image={image} title={artist.artTitles[idx]} index={idx} />
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

export default ArtistDetail;

