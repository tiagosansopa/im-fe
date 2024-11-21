import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Values from "./components/Values";
import Footer from "./components/Footer";
import Location from "./components/Location";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
