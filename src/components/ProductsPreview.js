import React from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Product 1", image: "/carousel/image1.jpg" },
  { id: 2, name: "Product 2", image: "/carousel/image2.jpg" },
  { id: 3, name: "Product 3", image: "/carousel/image3.jpg" },
];

export default function ProductsPreview() {
  return (
    <section id="products" className="p-8 bg-white z-20">
      <h2 className="text-3xl font-bold text-left mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <Link href="/products">
              <button className="mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-600">
                View Products
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
