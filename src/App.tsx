import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ArtistManagementConsole from "./pages/ArtistManagementConsole";
import PrintShop from "./pages/PrintShop";
import Artists from "./pages/Artists";
import ArtistProfile from "./pages/ArtistProfile";
import Orders from "./pages/Orders";
import PaymentStatus from "./pages/PaymentStatus";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Collections from "./pages/Collections";
import BestSellers from "./pages/BestSellers";
import GiftCards from "./pages/GiftCards";
import Shipping from "./pages/Shipping";
import ReturnPolicy from "./pages/Returns";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Sustainability from "./pages/Sustainability";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import ArtistTerms from "./pages/ArtistTerms";
import Licensing from "./pages/Licensing";
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public Route - Homepage (Onboarding) */}
            <Route path="/" element={<Home />} />

            {/* Public Marketing & Support Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<ReturnPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/artist-terms" element={<ArtistTerms />} />
            <Route path="/licensing" element={<Licensing />} />

            {/* Protected Routes - Require Authentication */}
            <Route
              path="/artists"
              element={
                <ProtectedRoute>
                  <Artists />
                </ProtectedRoute>
              }
            />
            <Route
              path="/artist/:id"
              element={
                <ProtectedRoute>
                  <ArtistProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/artist-console"
              element={
                <RoleProtectedRoute allowedRoles={['artist']}>
                  <ArtistManagementConsole />
                </RoleProtectedRoute>
              }
            />
            <Route
              path="/print-shop"
              element={
                <RoleProtectedRoute allowedRoles={['printShop']}>
                  <PrintShop />
                </RoleProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment-status/:paymentId"
              element={
                <ProtectedRoute>
                  <PaymentStatus />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
