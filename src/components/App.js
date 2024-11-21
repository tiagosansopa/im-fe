import Layout from "./Layout";
import Hero from "./Hero";
import About from "./About";
import Values from "./Values";
import Location from "./Location";
import ProductsPreview from "./ProductsPreview";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Values />
      <Location />
      <ProductsPreview />
    </Layout>
  );
}
