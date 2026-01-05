import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArtPrintLogo from "../../assets/paajuuprints.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

// Social Media Icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="8" x2="12" y2="21" />
    <path d="M8.5 14c-1 -1.5 -1.5 -3.5 0 -6c1.5 -2.5 5 -3 7 -1.5s2.5 4 1.5 6.5c-1 2 -3 3 -4.5 3s-2.5 -1 -2.5 -1" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Payment Method Icons
const VisaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
    <rect width="38" height="24" rx="4" fill="#1A1F71" />
    <path d="M15.5 16.5L17 7.5H19.5L18 16.5H15.5Z" fill="white" />
    <path d="M24.5 7.7C24 7.5 23.2 7.3 22.2 7.3C19.7 7.3 18 8.6 18 10.4C18 11.7 19.2 12.4 20.1 12.9C21 13.4 21.3 13.7 21.3 14.1C21.3 14.7 20.6 15 19.9 15C18.9 15 18.4 14.9 17.6 14.5L17.3 14.4L17 16.3C17.6 16.5 18.6 16.7 19.7 16.7C22.4 16.7 24.1 15.4 24.1 13.5C24.1 12.5 23.5 11.7 22.2 11.1C21.4 10.7 20.9 10.4 20.9 9.9C20.9 9.5 21.4 9 22.4 9C23.2 9 23.8 9.2 24.2 9.3L24.5 9.4L24.8 7.6L24.5 7.7Z" fill="white" />
    <path d="M28.5 7.5H26.6C26 7.5 25.5 7.7 25.3 8.3L21.5 16.5H24.2L24.7 15.1H28L28.3 16.5H30.7L28.5 7.5ZM25.5 13.2C25.7 12.7 26.7 10.1 26.7 10.1C26.7 10.1 26.9 9.5 27 9.2L27.2 10L27.8 13.2H25.5Z" fill="white" />
    <path d="M13.5 7.5L11 13.5L10.7 12.1C10.2 10.6 8.8 8.9 7.2 8.1L9.5 16.5H12.2L16.2 7.5H13.5Z" fill="white" />
    <path d="M9.5 7.5H5.2L5.1 7.7C8.3 8.5 10.4 10.4 11.2 12.6L10.3 8.4C10.2 7.7 9.7 7.5 9.1 7.5H9.5Z" fill="#F7A600" />
  </svg>
);

const MastercardIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
    <rect width="38" height="24" rx="4" fill="#F5F5F5" />
    <circle cx="15" cy="12" r="7" fill="#EB001B" />
    <circle cx="23" cy="12" r="7" fill="#F79E1B" />
    <path d="M19 6.8C20.6 8.1 21.6 10 21.6 12C21.6 14 20.6 15.9 19 17.2C17.4 15.9 16.4 14 16.4 12C16.4 10 17.4 8.1 19 6.8Z" fill="#FF5F00" />
  </svg>
);

const AmexIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
    <rect width="38" height="24" rx="4" fill="#006FCF" />
    <path d="M7 12H11L12 10L13 12H17L15 9L17 6H13L12 8L11 6H7L9 9L7 12Z" fill="white" />
    <path d="M19 6H31V8H21V10H30V12H21V14H31V16H19V6Z" fill="white" />
  </svg>
);

const MpesaIcon = () => (
  <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
    <rect width="38" height="24" rx="4" fill="#4CAF50" />
    <text x="19" y="14" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">M-PESA</text>
  </svg>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing!", {
      description: "You'll receive updates on new artworks and exclusive offers."
    });
    setEmail("");
    setIsSubscribing(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white text-gray-600">
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <img
                src={ArtPrintLogo}
                alt="PaaJuu Prints Logo"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Bringing African art to the world, one print at a time. Supporting local artists and celebrating cultural heritage.
            </p>
            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              <a 
                href="https://instagram.com/paajuuprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://twitter.com/paajuuprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900"
                aria-label="Follow us on X (Twitter)"
              >
                <TwitterIcon />
              </a>
              <a 
                href="https://facebook.com/paajuuprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://pinterest.com/paajuuprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900"
                aria-label="Follow us on Pinterest"
              >
                <PinterestIcon />
              </a>
              <a 
                href="https://tiktok.com/@paajuuprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-900"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Shop</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link 
                  to="/artists" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link 
                  to="/best-sellers" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link 
                  to="/gift-cards" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Customer Service</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link 
                  to="/returns" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link 
                  to="/orders" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/artists" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Our Artists
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/press" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustainability" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/artist-terms" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Artist Agreement
                </Link>
              </li>
              <li>
                <Link 
                  to="/licensing" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods & Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {currentYear} PaaJuu Prints. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="mr-2 text-xs text-gray-500">We accept:</span>
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <MpesaIcon />
            </div>

            {/* Language/Currency Selector (placeholder) */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button className="flex items-center gap-1 transition-colors hover:text-gray-900">
                <span>🇰🇪</span>
                <span>KES</span>
              </button>
              <span className="text-gray-300">|</span>
              <button className="flex items-center gap-1 transition-colors hover:text-gray-900">
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 p-3 text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
