import React from "react";

// Nav Button Style Function - handles active and hover states
const getNavBtnStyle = (isActive: boolean): React.CSSProperties => ({
  background: isActive ? "#e5e7eb" : "none",
  border: "none",
  color: "#151f33",
  padding: "8px 10px",
  fontWeight: 600,
  fontSize: 12,
  borderRadius: 6,
  cursor: "pointer",
  letterSpacing: 0.5,
  transition: "all 0.2s ease",
});

// Auth Button Style with hover support
const getAuthBtnStyle = (): React.CSSProperties => ({
  background: "#fff",
  border: "1px solid #e5e7eb",
  color: "#151f33",
  padding: "8px 13px",
  fontWeight: 600,
  fontSize: 12,
  borderRadius: 6,
  cursor: "pointer",
  transition: "all 0.2s ease",
});

// Nav Button Component with hover and active states
const NavButton: React.FC<{
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}> = ({ children, isActive, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const baseStyle = getNavBtnStyle(isActive);
  const hoverStyle = isHovered && !isActive ? { background: "#f3f4f6" } : {};
  
  return (
    <button
      style={{ ...baseStyle, ...hoverStyle }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

// Auth Button Component with hover states
const AuthButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const baseStyle = getAuthBtnStyle();
  const hoverStyle = isHovered ? { 
    background: "#f3f4f6", 
    borderColor: "#d1d5db" 
  } : {};
  
  return (
    <button
      style={{ ...baseStyle, ...hoverStyle }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

// Nav Select Component with hover states - acts as a button to navigate to Artists page
const NavSelect: React.FC<{
  onArtistsClick?: () => void;
  isActive: boolean;
}> = ({ onArtistsClick, isActive }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const baseStyle = getNavBtnStyle(isActive);
  const hoverStyle = isHovered ? { background: "#f3f4f6" } : {};
  
  return (
    <button
      style={{
        ...baseStyle,
        ...hoverStyle,
        paddingRight: "24px",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23151f33' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onArtistsClick}
    >
      ARTISTS
    </button>
  );
};

// Header Component
const Header: React.FC<{
  onLoginClick: () => void;
  onSignUpClick: () => void;
  onArtPrintsClick: () => void;
  onArtistsClick?: () => void;
  onHomeClick?: () => void;
  currentPage: "home" | "artprints" | "artists";
}> = ({ onLoginClick, onSignUpClick, onArtPrintsClick, onArtistsClick, onHomeClick, currentPage }) => (
  <header style={{
    padding: window.innerWidth < 600 ? "10px 6px" : 12,
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    background: "#f9fafb",
    justifyContent: "space-between"
  }}>
    <div style={{display: "flex", gap: 8, minWidth:0}}>
      <NavButton isActive={currentPage === "home"} onClick={onHomeClick}>NEW ARRIVALS</NavButton>
      <NavButton isActive={currentPage === "artprints"} onClick={onArtPrintsClick}>ART PRINTS</NavButton>
      <NavSelect onArtistsClick={onArtistsClick} isActive={currentPage === "artists"} />
    </div>
    <div style={{display: "flex", gap: 8, minWidth:0}}>
      <AuthButton onClick={onLoginClick}>Login</AuthButton>
      <AuthButton onClick={onSignUpClick}>Sign Up</AuthButton>
    </div>
  </header>
);

export default Header;

