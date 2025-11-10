import React, { useState } from "react";

// Responsive helper
const getResponsivePadding = () =>
  window.innerWidth < 600 ? "0 8px" : "0";

// Modal Overlay Component
const ModalOverlay: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode }> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.12)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

// Modal base width logic helper
const getModalWidth = () =>
  window.innerWidth < 450 ? "98vw" : 384;

// Modify LoginModal to accept a prop for switching to sign up
const LoginModal: React.FC<{ open: boolean; onClose: () => void; onSignUpClick: () => void }> = ({ open, onClose, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ModalOverlay open={open} onClose={onClose}>
      <div
        style={{
          width: getModalWidth(),
          maxWidth: "98vw",
          background: "#f6f6f7",
          borderRadius: 16,
          boxShadow: "0 4px 32px #26365a13",
          padding: window.innerWidth < 500 ? 16 : 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 30, fontFamily: 'inherit', color: "#171c23" }}>Login</h2>
        <div style={{width:'100%', height:1, background:'#e8e8eb', marginBottom:24}} />
        <button style={{
          width:'100%',
          background:'#fff',
          border: 'none',
          borderRadius:12,
          padding:'13px 0',
          fontSize:20,
          fontWeight:500,
          boxShadow:"0 0 0 1.5px #ececec",
          marginBottom:18,
          cursor:'pointer',
        }}>
          Login with Google
        </button>
        <div style={{width:'100%',display:'flex',alignItems:'center',marginBottom:20}}>
          <div style={{flex:1, height:2, background:'#ededf0'}}/>
          <span style={{margin:'0 16px', color: '#8b93a2', fontWeight: 500}}>or</span>
          <div style={{flex:1, height:2, background:'#ededf0'}}/>
        </div>
        <div style={{width:'100%',textAlign:'left',marginBottom:6, fontWeight:600,fontSize:18}}>Email</div>
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:'100%',marginBottom:18,padding:'13px',fontSize:19,borderRadius:12,border:'none',outline:'1.7px solid #ececec',background:'#fff',color:'#454960'}} placeholder="team@mynaui.com"
        />
        <div style={{width:'100%',textAlign:'left',marginBottom:6, fontWeight:600,fontSize:18}}>Password</div>
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:'100%',marginBottom:24,padding:'13px',fontSize:19,borderRadius:12,border:'none',outline:'1.7px solid #ececec',background:'#fff',color:'#454960'}} placeholder="••••••••"
        />
        <button
          style={{width:'100%',background:'#1867ff',border:'none',borderRadius:15,padding:'15px 0',fontSize:22,fontWeight:500,color:'#fff',marginBottom:28, cursor:'pointer'}}
        >
          Login
        </button>
        <div style={{marginBottom: 16, fontSize: 19, color: '#242936', width: '100%', textAlign: 'center'}}>
          <div style={{marginBottom:7}}>Forgot your password?</div>
          <div>New to Art Print? <span style={{ textDecoration: 'underline', cursor: 'pointer', color:'#222a44' }} onClick={()=>{ onClose(); onSignUpClick(); }}>Sign up</span></div>
        </div>
        <div style={{width:'100%',height:1, background:'#e8e8eb',margin:'18px 0 10px 0'}}/>
        <div style={{marginBottom:4, fontSize:17, color:'#8b93a2', width: '100%', textAlign: 'center'}}>
          © 2025 Art Prints
        </div>
      </div>
    </ModalOverlay>
  );
};

// NEW: Sign Up Modal
const SignUpModal: React.FC<{ open: boolean; onClose: () => void; onLoginClick: () => void }> = ({ open, onClose, onLoginClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <ModalOverlay open={open} onClose={onClose}>
      <div
        style={{
          width: getModalWidth(),
          maxWidth: "98vw",
          background: "#f6f6f7",
          borderRadius: 16,
          boxShadow: "0 4px 32px #26365a13",
          padding: window.innerWidth < 500 ? 16 : 28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 30, fontFamily: 'inherit', color: "#171c23" }}>Sign Up</h2>
        <div style={{width:'100%', height:1, background:'#e8e8eb', marginBottom:24}} />
        <button style={{
          width:'100%',
          background:'#fff',
          border: 'none',
          borderRadius:12,
          padding:'13px 0',
          fontSize:20,
          fontWeight:500,
          boxShadow:"0 0 0 1.5px #ececec",
          marginBottom:18,
          cursor:'pointer',
        }}>
          Sign up with Google
        </button>
        <div style={{width:'100%',display:'flex',alignItems:'center',marginBottom:20}}>
          <div style={{flex:1, height:2, background:'#ededf0'}}/>
          <span style={{margin:'0 16px', color: '#8b93a2', fontWeight: 500}}>or</span>
          <div style={{flex:1, height:2, background:'#ededf0'}}/>
        </div>
        <div style={{width:'100%',textAlign:'left',marginBottom:6, fontWeight:600,fontSize:18}}>Email</div>
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:'100%',marginBottom:18,padding:'13px',fontSize:19,borderRadius:12,border:'none',outline:'1.7px solid #ececec',background:'#fff',color:'#454960'}} placeholder="team@mynaui.com"
        />
        <div style={{width:'100%',textAlign:'left',marginBottom:6, fontWeight:600,fontSize:18}}>Password</div>
        <input
          type="password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:'100%',marginBottom:18,padding:'13px',fontSize:19,borderRadius:12,border:'none',outline:'1.7px solid #ececec',background:'#fff',color:'#454960'}} placeholder="Create a password"
        />
        <div style={{width:'100%',textAlign:'left',marginBottom:6, fontWeight:600,fontSize:18}}>Confirm Password</div>
        <input
          type="password"
          value={confirm}
          onChange={e=>setConfirm(e.target.value)}
          style={{width:'100%',marginBottom:24,padding:'13px',fontSize:19,borderRadius:12,border:'none',outline:'1.7px solid #ececec',background:'#fff',color:'#454960'}} placeholder="Repeat password"
        />
        <button
          style={{width:'100%',background:'#1867ff',border:'none',borderRadius:15,padding:'15px 0',fontSize:22,fontWeight:500,color:'#fff',marginBottom:28, cursor:'pointer'}}
        >
          Sign Up
        </button>
        <div style={{marginBottom: 16, fontSize: 19, color: '#242936', width: '100%', textAlign: 'center'}}>
          <div>Already have an account? <span style={{ textDecoration: 'underline', cursor: 'pointer', color:'#222a44' }} onClick={()=>{ onClose(); onLoginClick(); }}>Login</span></div>
        </div>
        <div style={{width:'100%',height:1, background:'#e8e8eb',margin:'18px 0 10px 0'}}/>
        <div style={{marginBottom:4, fontSize:17, color:'#8b93a2', width: '100%', textAlign: 'center'}}>
          © 2025 Art Prints
        </div>
      </div>
    </ModalOverlay>
  );
};

// Pass handler for login/signup click down to Header
const Header: React.FC<{onLoginClick: () => void, onSignUpClick: () => void}> = ({ onLoginClick, onSignUpClick }) => (
  <header style={{
    padding: window.innerWidth < 600 ? "10px 6px" : 12,
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    background: "#f9fafb",
    justifyContent: "space-between"
  }}>
    <div style={{display: "flex", gap: 8, minWidth:0}}>
      <button style={navBtn}>NEW ARRIVALS</button>
      <button style={navBtn}>ART PRINTS</button>
      <select style={navBtn}>
        <option>ARTISTS</option>
      </select>
    </div>
    <div style={{display: "flex", gap: 8, minWidth:0}}>
      <button style={authBtn} onClick={onLoginClick}>Login</button>
      <button style={authBtn} onClick={onSignUpClick}>Sign Up</button>
    </div>
  </header>
);

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

// Nav & Auth Button Styles
const navBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#151f33",
  padding: "8px 10px",
  fontWeight: 600,
  fontSize: 12,
  borderRadius: 6,
  cursor: "pointer",
  letterSpacing: 0.5,
};

const authBtn: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  color: "#151f33",
  padding: "8px 13px",
  fontWeight: 600,
  fontSize: 12,
  borderRadius: 6,
  cursor: "pointer"
};

// HomePage Assembly
const HomePage: React.FC = () => {
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
      />
      {/* INSERTED HEADER SECTION UNDER NAVBAR */}
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "18px 24px 12px 24px",
          background: "#f9fafb",
          borderBottom: "1px solid #ececec",
        }}
      >
        <h2 style={{
          fontSize: "1.6rem",
          fontWeight: 600,
          margin: 0,
          color: "#171c23",
          letterSpacing: "0.02em"
        }}>
          WHERE ART MEETS CREATIVITY
        </h2>
      </div>
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