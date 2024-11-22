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
    image: "/demo/servicio_corte.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "service",
    description: "Esto es cortes",
  },
  {
    id: 8,
    name: "Doble",
    image: "/demo/servicio_doble.png",
    detail: "/demo/l_caliente_medidas.png",
    type: "service",
    description: "Esto es doble",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setExpandedCard(null);
  };

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.type === activeFilter);

  return (
    <Layout>
      <section className="pt-36 bg-white flex-grow">
        <h2 className="text-3xl font-bold text-blue-950 mb-6">CATÁLOGO</h2>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              activeFilter === "all"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-800 hover:text-white transition`}
            onClick={() => handleFilterChange("all")}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeFilter === "product"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-800 hover:text-white transition`}
            onClick={() => handleFilterChange("product")}
          >
            Productos
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeFilter === "service"
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-800 hover:text-white transition`}
            onClick={() => handleFilterChange("service")}
          >
            Servicios
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`p-5 bg-white shadow-lg shadow-zinc-600 rounded-lg hover:shadow-xl transition-shadow ${
                expandedCard === product.id ? "col-span-3" : ""
              }`}
              onClick={() =>
                setExpandedCard(expandedCard === product.id ? null : product.id)
              }
            >
              {expandedCard === product.id ? (
                <div className="space-y-4">
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-sm h-80 object-cover rounded-md"
                    />
                    <img
                      src={product.detail}
                      alt={product.name}
                      className="w-sm h-80 object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl text-blue-950 font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              ) : (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-xl text-blue-950 font-semibold">
                    {product.name}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
