"use client";
import React, { useState } from "react";
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

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < products.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - 3
    );
  };

  return (
    <section id="products" className="p-8 bg-white z-20">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl text-blue-950 font-bold text-left mb-6">
          Nuestros Productos
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Products */}
          <div className="flex transition-transform duration-500 ease-in-out">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[33.33%] flex-shrink-0"
              >
                <Link href="/products">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-xl text-blue-950 font-semibold">
                    {product.name}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-600"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-600"
          >
            Siguiente
          </button>
        </div>

        {/* View Full Catalog */}
        <Link href="/products">
          <button className="mt-6 px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-600">
            Ver Catálogo
          </button>
        </Link>
      </div>
    </section>
  );
}
