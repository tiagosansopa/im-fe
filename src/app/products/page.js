"use client";
import { useState } from "react";
import Layout from "@/components/Layout";

const products = [
  {
    id: 1,
    name: "Lamina Caliente",
    image: "/demo/l_caliente.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es lamina caliente",
  },
  {
    id: 4,
    name: "Lamina Fria",
    image: "/demo/l_fria.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es lamina fria",
  },
  {
    id: 2,
    name: "Varilla Lisa L",
    image: "/demo/v_lisa_l.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es varilla lisa",
  },
  {
    id: 3,
    name: "Varilla Lista Comercial",
    image: "/demo/v_lisa_c.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es varilla comercial",
  },
  {
    id: 5,
    name: "Lamina Labrada",
    image: "/demo/l_labrada.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es lamina labrada",
  },
  {
    id: 6,
    name: "Mas Lamina Fria",
    image: "/demo/l_fria.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "product",
    description: "Esto es mas lamina fria",
  },
  {
    id: 7,
    name: "Corte",
    image: "/fotos/servicios_2.jpeg",
    detail: "/demo/l_caliente_medidas.png",
    type: "service",
    description: "Esto es cortes",
  },
  {
    id: 8,
    name: "Doble",
    image: "/fotos/servicios_3.jpeg",
    detail: "/demo/l_caliente_medidas.png",
    type: "service",
    description: "Esto es doble",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setExpandedProduct(null);
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <Layout>
      {/* Full-width background */}
      <section className="w-full pt-36 bg-white flex-grow">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">
            CATÁLOGO
          </h2>

          {/* Filter buttons */}
          <div className="flex justify-center mb-6 space-x-4">
            {["all", "product", "service"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-blue-800 hover:text-white transition`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === "all"
                  ? "Todos"
                  : filter === "product"
                  ? "Productos"
                  : "Servicios"}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setExpandedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl text-blue-950 font-semibold">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Product Modal */}
      {expandedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-3xl relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl"
              onClick={() => setExpandedProduct(null)}
            >
              &times;
            </button>

            {/* Product Content */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left: Product Image */}
              <img
                src={expandedProduct.image}
                alt={expandedProduct.name}
                className="w-full md:w-1/2 h-80 object-cover rounded-md"
              />

              {/* Right: Product Details */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <h3 className="text-2xl text-blue-950 font-semibold">
                  {expandedProduct.name}
                </h3>
                <p className="text-gray-700">{expandedProduct.description}</p>
                <img
                  src={expandedProduct.detail}
                  alt={`${expandedProduct.name} medidas`}
                  className="w-full h-60 object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
