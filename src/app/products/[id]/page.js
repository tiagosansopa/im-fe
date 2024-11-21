"use client";
import React from "react";

const productDetails = {
  1: {
    name: "Product 1",
    description: "This is the description for Product 1.",
    image: "/carousel/image1.jpg",
    dimensions: "/dimensions/product1.jpg",
  },
  2: {
    name: "Product 2",
    description: "This is the description for Product 2.",
    image: "/carousel/image2.jpg",
    dimensions: "/dimensions/product2.jpg",
  },
  3: {
    name: "Product 3",
    description: "This is the description for Product 3.",
    image: "/carousel/image3.jpg",
    dimensions: "/dimensions/product3.jpg",
  },
};

export default function ProductDetailsPage({ params }) {
  const product = productDetails[params.id];

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-lg mx-auto rounded-md mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <img
        src={product.dimensions}
        alt={`${product.name} Dimensions`}
        className="w-full max-w-lg mx-auto rounded-md"
      />
    </section>
  );
}
