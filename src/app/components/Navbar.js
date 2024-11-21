"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-5 w-full z-50">
      {/* Navbar Container */}
      <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center p-4 bg-white text-black shadow-md rounded-full">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo/logo_black.png"
            alt="Intermetales Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-funnel">
          <a
            href="#hero"
            className="text-black transition-opacity duration-300 hover:opacity-70"
          >
            Nosotros
          </a>
          <a
            href="#location"
            className="text-black transition-opacity duration-300 hover:opacity-70"
          >
            Productos
          </a>
          <a
            href="#contact"
            className="text-black transition-opacity duration-300 hover:opacity-70"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-0 right-0 h-screen w-2/3 bg-gray-800 text-white transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-16 space-y-6 font-funnel">
          <a
            href="#hero"
            className="text-white transition-opacity duration-300 hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="#location"
            className="text-white transition-opacity duration-300 hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            Productos
          </a>
          <a
            href="#contact"
            className="text-white transition-opacity duration-300 hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
