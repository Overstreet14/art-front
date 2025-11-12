import React, { useState } from "react";
import LoginModal from "./layouts/LoginModal";
import SignUpModal from "./layouts/SignUpModal";
import Header from "./layouts/Header";

// Responsive helper
const getResponsivePadding = () =>
  window.innerWidth < 600 ? "0 8px" : "0";

// Hero Section
const Hero: React.FC = () => (
  <section style={{
    paddingTop: 2,
    paddingBottom: 10,
    paddingLeft: window.innerWidth < 700 ? 16 : 28,
    paddingRight: window.innerWidth < 700 ? 16 : 28,
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'center',
    background: 'transparent',
    margin: 0,
  }}>
    <h1 style={{
      fontSize: window.innerWidth < 500 ? 36 : "4vw",
      fontWeight: 1400,
      letterSpacing: -2,
      lineHeight: 1,
    }}>
      Where Art Meets Creativity
    </h1>
    <div style={{
      borderRadius: 12,
      overflow: "hidden",
      background: "#f3f4f6",
      width: '100%',
      margin: 0,
      minHeight: 140,
      position: "relative",
      display: "block",
    }}>
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=960&q=80"
        style={{ width: "100%", objectFit: "cover", height: window.innerWidth < 500 ? 180 : 360, display: "block" }}
        alt="Splash art"
      />
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: window.innerWidth < 500 ? 10 : 32,
        color: "#fff",
        fontSize: window.innerWidth < 500 ? 15 : 22,
        textShadow: "0 2px 12px #0009",
        background: "linear-gradient(to top, rgba(0,0,0,0.6) 50%, transparent)",
        padding: window.innerWidth < 500 ? "0 10px" : "0 32px"
      }}>
        Art doesn’t just fill a space — it defines it. It’s a mirror to your taste, your mood, your moments. Here, every piece is more than a product — it’s a conversation starter, a memory-maker, a quiet revolution on your wall. Discover art that reflects who you are — or who you’re becoming.
      </div>
    </div>
  </section>
);

// Art Card Component
const ArtCard: React.FC = () => (
  <div style={{
    borderRadius: 10,
    background: "#fff",
    boxShadow: "0 1px 6px #0002",
    minWidth: 0,
    minHeight: 230,
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }}>
    <img
      src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=300&q=80"
      alt="Art"
      style={{
        width: "100%",
        height: "70%",           // Image is top of the square
        objectFit: "cover",
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        display: "block"
      }}
    />
    <div style={{
      padding: '7px',
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}>
      <div style={{fontWeight: 600, fontSize: 16, marginBottom: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Brand name</div>
      <div style={{display: "flex", flexWrap: "wrap", gap: 8}}>
        <span style={pill}>Country</span>
        <span style={pill}>Series</span>
        <span style={pill}>Brand name</span>
      </div>
    </div>
  </div>
);

const gridHorizontalPadding = window.innerWidth < 700 ? 10 : 24;

const ArtGrid: React.FC = () => (
  <section style={{
    padding: window.innerWidth < 600 ? "18px 0 38px 0" : "36px 0 80px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box"
  }}>
    <div style={{
      width: "100%",
      paddingLeft: gridHorizontalPadding,
      paddingRight: gridHorizontalPadding,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
      gap: window.innerWidth < 600 ? 12 : 32,
      justifyItems: "stretch",
      alignItems: "stretch"
    }}>
      {Array.from({length: 12}).map((_, idx) => (
        <ArtCard key={idx} />
      ))}
    </div>
  </section>
);

// Pills styling
const pill: React.CSSProperties = {
  background: "#def2ea",
  color: "#36a97c",
  borderRadius: 6,
  padding: "2px 8px",
  fontSize: 11,
  fontWeight: 600,
};

// HomePage Assembly
const HomePage: React.FC<{ 
  onNavigateToArtPrints: () => void;
  onNavigateToArtists?: () => void;
  currentPage: "home" | "artprints" | "artists";
}> = ({ onNavigateToArtPrints, onNavigateToArtists, currentPage }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  // force rerender on resize for live responsiveness
  const [, forceUpdate] = React.useState(0);
  React.useEffect(() => {
    const handleResize = () => forceUpdate(n=>n+1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        margin: 0, // Remove any default margin
        padding: 0 // Remove any default padding
      }}>
      <Header
        onLoginClick={() => { setShowLogin(true); setShowSignUp(false); }}
        onSignUpClick={() => { setShowSignUp(true); setShowLogin(false); }}
        onArtPrintsClick={onNavigateToArtPrints}
        onArtistsClick={onNavigateToArtists}
        currentPage={currentPage}
      />
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 1640,
          margin: '0 auto', // No unwanted margin here
          padding: getResponsivePadding(),
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Hero />
        <div style={{ minHeight: 10 }} />
        <ArtGrid />
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

export default HomePage;