
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FicaLogo from '../assets/2.svg';
import InstagramLogo from '../assets/instagram.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import TiktokLogo from '../assets/tiktok.svg';
import UMSULogo from '../assets/UMSU-CLUBS-Affiliated-reversed-2.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-6 py-4 text-white bg-transparent z-50 absolute top-0">
        <div className="hidden lg:flex gap-4">
          <Link to="/about" className="text-lg md:text-xl lg:text-xl hover:text-white/80 transition duration-200">ABOUT</Link>
          <Link to="/committee" className="text-lg md:text-xl lg:text-xl hover:text-white/80 transition duration-200">COMMITTEE</Link>
          <Link to="/events" className="text-lg md:text-xl lg:text-xl hover:text-white/80 transition duration-200">EVENTS</Link>
          <Link to="/sponsors" className="text-lg md:text-xl lg:text-xl hover:text-white/80 transition duration-200">SPONSORS</Link>
          <Link to="/contact" className="text-lg md:text-xl lg:text-xl hover:text-white/80 transition duration-200">CONTACT</Link>
        </div>

        <div className="absolute left-1/2 -translate-x-[30%] -translate-y-[-2%]">
          <Link to="/">
            <img src={FicaLogo} alt="FICA Logo" className="h-20 md:h-24 lg:h-28 w-auto hover:opacity-80 transition duration-200" />
          </Link>
        </div>

        <div className="hidden lg:flex gap-6 pr-1">
          <a href="https://www.instagram.com/ficaunimelb/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram Logo" className="h-8 w-auto hover:opacity-80 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/company/fashion-in-commerce-association-fica" className="-translate-y-[12%]" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinLogo} alt="LinkedIn Logo" className="h-[2.65rem] w-auto hover:opacity-80 transition duration-200" />
          </a>
          <a href="https://www.tiktok.com/@ficaunimelb" className="-translate-y-[12%]" target="_blank" rel="noopener noreferrer">
            <img src={TiktokLogo} alt="Tiktok Logo" className="h-[2.50rem] w-auto hover:opacity-80 transition duration-200" />
          </a>
          <a href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/10043/" className="-translate-y-[12%]" target="_blank" rel="noopener noreferrer">
            <img src={UMSULogo} alt="Tiktok Logo" className="h-[2.95rem] w-auto hover:opacity-80 transition duration-200" />
          </a>
          {/* <a href="/contact" className="-translate-y-[15%]">
            <img src={EmailLogo} alt="Email Logo" className="h-[2.80rem] w-auto hover:opacity-80 transition duration-200" />
          </a> */}
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden z-[9999] text-3xl"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/90 text-white z-[9998] flex flex-col items-center justify-center space-y-6 text-2xl">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>

          <Link to="/about" onClick={() => setMobileOpen(false)}>ABOUT</Link>
          <Link to="/committee" onClick={() => setMobileOpen(false)}>COMMITTEE</Link>
          <Link to="/events" onClick={() => setMobileOpen(false)}>EVENTS</Link>
          <Link to="/sponsors" onClick={() => setMobileOpen(false)}>SPONSORS</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>CONTACT</Link>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/ficaunimelb/" target="_blank" rel="noreferrer">
              <img src={InstagramLogo} className="h-6" />
            </a>
            <a href="https://www.linkedin.com/company/fashion-in-commerce-association-fica" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} className="h-6" />
            </a>
            <a href="https://www.tiktok.com/@ficaunimelb" target="_blank" rel="noreferrer">
              <img src={TiktokLogo} className="h-6" />
            </a>
            <a href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/10043/" target="_blank" rel="noreferrer">
              <img src={UMSULogo} className="h-6" />
            </a>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
