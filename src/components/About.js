export default function About() {
  return (
    <section
      id="about"
      className="relative p-8 text-center items-center text-white font-funnel"
      style={{ background: "linear-gradient(to bottom, #121C37, #0B1023)" }}
    >
      {/* Top Triangle */}
      <div
        className="absolute -top-20 right-0 w-0 h-0 border-l-[100vw] border-l-transparent border-b-[80px] border-b-[#121C37]"
        aria-hidden="true"
      ></div>

      {/* Bottom Triangle (Overlapping Values Section) */}
      <div
        className="absolute -bottom-[100px] left-0 w-0 h-0 border-r-[100vw] border-r-transparent border-t-[100px] border-t-[#0B1023] z-20"
        aria-hidden="true"
      ></div>

      {/* Centered Container */}
      <div id="thisOne" className="max-w-screen-lg mx-auto">
        <p className="text-lg mb-4">
          Proveemos productos de acero y servicios de alta calidad internacional
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <img
            src="/demo/l_caliente.png"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/demo/l_fria.png"
            alt="Image 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/demo/l_labrada.png"
            alt="Image 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <button className="bg-white text-blue-950 py-2 px-6 rounded-lg hover:bg-slate-500 hover:text-white mb-8">
          Conozca nuestros productos
        </button>

        <div className="text-center mt-8 space-y-4">
          <p className="text-lg">Empresa líder en el mercado local</p>
          <p className="text-lg">
            Brindamos productos de acero y servicios a precios competitivos
          </p>
        </div>

        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 mt-8">
          Conozca nuestras ubicaciones
        </button>
      </div>
    </section>
  );
}
