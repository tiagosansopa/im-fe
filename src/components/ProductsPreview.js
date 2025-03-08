"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Lamina Caliente", image: "/demo/l_caliente.png" },
  { id: 4, name: "Lamina Fria", image: "/demo/l_fria.png" },
  { id: 2, name: "Varilla Lisa L", image: "/demo/v_lisa_l.png" },
  { id: 3, name: "Varilla Lista Comercial", image: "/demo/v_lisa_c.png" },
  { id: 5, name: "Lamina Labrada", image: "/demo/l_labrada.png" },
  { id: 6, name: "Mas Lamina Fria", image: "/demo/l_fria.png" },
];

export default function ProductsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of visible items
  const totalItems = products.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="productos" className="p-8 bg-white z-20">
      <div className="max-w-screen-lg mx-auto relative">
        <h2 className="text-3xl text-blue-950 font-bold text-left mb-6">
          Nuestros Productos
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-2"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
              width: `${(totalItems / itemsPerPage) * 100}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="p-2 bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg min-w-[30%] flex-shrink-0 flex flex-col items-center"
              >
                <Link href="/products">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  />
                  <h3 className="mt-2 text-lg text-blue-950 font-semibold text-center">
                    {product.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-2 rounded-full shadow-lg hover:bg-gray-600"
        >
          ❯
        </button>

        {/* View Full Catalog */}
        <div className="flex justify-center mt-4">
          <Link href="/products">
            <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-600">
              Ver Catálogo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
