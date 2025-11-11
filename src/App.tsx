import { useState } from "react";
import HomePage from "./components/HomePage";
import ArtPrints from "./components/ArtPrints";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "artprints">("home");

  if (currentPage === "artprints") {
    return <ArtPrints onBack={() => setCurrentPage("home")} />;
  }

  return <HomePage onNavigateToArtPrints={() => setCurrentPage("artprints")} />;
}

export default App;
