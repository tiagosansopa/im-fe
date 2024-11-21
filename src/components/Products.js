export default function Products() {
  return (
    <section id="products" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold">Our Products</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Product 1</div>
        <div className="p-4 border rounded">Product 2</div>
        <div className="p-4 border rounded">Product 3</div>
      </div>
    </section>
  );
}
