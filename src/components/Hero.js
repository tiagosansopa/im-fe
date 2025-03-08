"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/fotos/metal-structure-building.jpg",
    "/fotos/construction-silhouette.jpg",
    "/fotos/servicios_2.jpeg",
    "/fotos/servicios_1.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center">
      {/* Background Image Slideshow */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: "fixed" }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center space-y-6 px-6">
        {/* Enhanced Logo */}
        <div>
          <img
            src="/logo/logo_color_full.png"
            alt="Intermetales Logo"
            className="w-full max-w-[900px] md:max-w-[600px] sm:max-w-[400px] object-contain 
            self-center drop-shadow-lg brightness-110 contrast-125 transition-transform duration-300 "
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-center space-x-4 mt-4">
          <button className="px-6 py-2 bg-gray-800 hover:bg-yellow-200 hover:text-gray-900 text-white text-base rounded">
            Conócenos
          </button>
          <Link href="/products">
            <button className="px-6 py-2 bg-gray-800 hover:bg-yellow-200 hover:text-gray-900 text-white text-base rounded">
              Ver Catálogo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
