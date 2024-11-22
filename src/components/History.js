export default function History() {
  return (
    <section
      id="us"
      className="relative p-8 text-white font-funnel"
      style={{ background: "linear-gradient(to bottom, #121C37, #0B1023)" }}
    >
      <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed">
            Somos una empresa dedicada a la comercialización de materiales
            derivados del acero desde el año 2020, iniciando operaciones en
            Guatemala y posteriormente en El Salvador para llegar a toda Centro
            América. Nos enfocamos en brindar un servicio y productos de
            calidad, cumpliendo con las normas internacionales.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/demo/servicio_doble.png"
            alt="Company Origins"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
    </section>
  );
}
