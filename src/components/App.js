import Layout from "./Layout";
import Hero from "./Hero";
import About from "./About";
import Values from "./Values";
import Location from "./Location";
import ProductsPreview from "./ProductsPreview";
import History from "./History";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Values />
      <History />
      <Location />
      <ProductsPreview />
    </Layout>
  );
}
