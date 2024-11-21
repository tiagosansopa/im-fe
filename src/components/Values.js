export default function Values() {
  return (
    <section
      id="values"
      className="relative z-10 p-8 pt-20 bg-white text-center font-funnel text-gray-800"
    >
      <h2 className="text-2xl font-bold uppercase mb-8">
        Por Qué Intermetales
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Calidad */}
        <div className="flex flex-col items-center h-[300px] w-[200px] mx-auto">
          <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
            <img
              src="/values/calidad.png"
              alt="Calidad"
              className="w-full h-full object-cover"
            />
          </div>
          <h6 className="text-lg font-bold uppercase mt-3">Calidad</h6>
          <p className="mt-2 text-sm leading-relaxed text-center">
            Siempre en busca de productos que cumplan con los requerimientos del
            mercado y cumpliendo con una exhaustiva búsqueda de proveedores de
            calidad.
          </p>
        </div>

        {/* Card 2: Servicio */}
        <div className="flex flex-col items-center h-[300px] w-[200px] mx-auto">
          <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
            <img
              src="/values/servicio.png"
              alt="Servicio"
              className="w-full h-full object-cover"
            />
          </div>
          <h6 className="text-lg font-bold uppercase mt-3">Servicio</h6>
          <p className="mt-2 text-sm leading-relaxed text-center">
            Brindarle a nuestros clientes entregas a tiempo, abastecimiento de
            producto y precios competitivos en el mercado.
          </p>
        </div>

        {/* Card 3: Compromiso */}
        <div className="flex flex-col items-center h-[300px] w-[200px] mx-auto">
          <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
            <img
              src="/values/compromiso.png"
              alt="Compromiso"
              className="w-full h-full object-cover"
            />
          </div>
          <h6 className="text-lg font-bold uppercase mt-3">Compromiso</h6>
          <p className="mt-2 text-sm leading-relaxed text-center">
            Brindar un servicio y/o producto que cumpla con las expectativas y
            requerimientos de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
