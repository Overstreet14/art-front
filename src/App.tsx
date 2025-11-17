import { useState } from "react";
import HomePage from "./components/HomePage";
import ArtPrints from "./components/ArtPrints";
import Artists from "./components/Artists";
import ArtistDetail from "./components/ArtistDetail";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "artprints" | "artists" | "artistDetail">("home");
  const [selectedArtistId, setSelectedArtistId] = useState<number>(0);

  if (currentPage === "artprints") {
    return (
      <ArtPrints 
        onBack={() => setCurrentPage("home")}
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToArtPrints={() => setCurrentPage("artprints")}
        onNavigateToArtists={() => setCurrentPage("artists")}
      />
    );
  }

  if (currentPage === "artistDetail") {
    return (
      <ArtistDetail 
        artistId={selectedArtistId}
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToArtPrints={() => setCurrentPage("artprints")}
        onNavigateToArtists={() => setCurrentPage("artists")}
      />
    );
  }

  if (currentPage === "artists") {
    return (
      <Artists 
        onNavigateToHome={() => setCurrentPage("home")}
        onNavigateToArtPrints={() => setCurrentPage("artprints")}
        onArtistClick={(artistId) => {
          setSelectedArtistId(artistId);
          setCurrentPage("artistDetail");
        }}
      />
    );
  }

  return (
    <HomePage 
      currentPage="home" 
      onNavigateToArtPrints={() => setCurrentPage("artprints")}
      onNavigateToArtists={() => setCurrentPage("artists")}
    />
  );
}

export default App;
