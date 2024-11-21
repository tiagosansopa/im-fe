export default function Location() {
  return (
    <section
      id="location"
      className="relative p-8 text-white bg-cover bg-center font-funnel"
      style={{
        backgroundImage: "url('/path/to/your/background.jpg')",
      }}
    >
      <div className="width-full text-center">
        <h2 className="text-2xl font-bold text-white uppercase mb-8">
          VISITANOS R
        </h2>
      </div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto space-y-12">
        {/* Location 1: Guatemala */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Address */}
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-bold">Guatemala</h2>
            <p className="text-lg">
              <strong>Dirección:</strong> 13 avenida 5-56 B zona 6, Guatemala
            </p>
            <strong>Telefono</strong> +502 2254 9405
            <a
              href="https://wa.me/50241164023"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-8 h-8 md:w-10 md:h-10"
              >
                <path
                  fill="#ffffff"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </a>
          </div>

          {/* Right: Map */}
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2303853702515!2d-90.532563!3d14.634915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a2d12bc8d1db%3A0x2f74c95e5e0d2817!2s13%20Avenida%205-56%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1sen!2s!4v1682194620165!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Location 2: El Salvador */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Address */}
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-bold">El Salvador</h2>
            <p className="text-lg">
              <strong>Dirección:</strong> El Tuco, El Salvador
            </p>
          </div>

          {/* Right: Map */}
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.915698944413!2d-89.303443!3d13.495496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63330d0e3e830b%3A0x42d0a6f74d7eb6c7!2sEl%20Tunco%2C%20El%20Salvador!5e0!3m2!1sen!2s!4v1682195034890!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
