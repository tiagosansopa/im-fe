"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Store selected tab
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
          {["Nosotros", "Valores", "Ubicaciones", "Productos", "Historia"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 transition-colors duration-300 rounded-md ${
                  activeTab === item.toLowerCase()
                    ? "bg-yellow-300 text-black"
                    : "text-black hover:bg-yellow-200 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center text-white text-2xl font-funnel transition-opacity duration-300"
        >
          {["Nosotros", "Valores", "Ubicaciones", "Productos", "Historia"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`w-full text-center px-6 py-4 transition-colors duration-300 ${
                  activeTab === item.toLowerCase()
                    ? "bg-yellow-300 text-black"
                    : "hover:bg-yellow-200 hover:text-gray-900"
                }`}
                onClick={() => {
                  setActiveTab(item.toLowerCase());
                  setMenuOpen(false);
                }}
              >
                {item}
              </a>
            )
          )}

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-4xl text-white hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
