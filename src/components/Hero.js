"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/demo/l_caliente.png",
    "/demo/l_fria.png",
    "/demo/l_labrada.png",
    "/demo/v_lisa_c.png",
    "/demo/v_lisa_l.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center">
      {/* Fixed Background Carousel */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: "fixed" }} // Ensures the image stays fixed in the background
          />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-start space-y-6 px-6">
        {/* Logo */}
        <img
          src="/logo/logo_black_full.png"
          alt="Intermetales Logo"
          className="w-full max-w-[1400px] md:max-w-[800px] sm:max-w-[600px] object-contain"
        />

        {/* Buttons */}
        <div className="w-full flex justify-center space-x-4 mt-4">
          <button className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white text-base rounded">
            Conócenos
          </button>
          <Link href="/products">
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white text-base rounded">
              Ver Catálogo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
