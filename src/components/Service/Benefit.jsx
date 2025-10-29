export default function Benefit() {
  return (
    <section className=" bg-white  px-6 md:px-20">
    <div className="max-w-4xl mx-auto">
      <div className="max-w-3xl">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Apa <span className="text-orange-500">yang Akan Kamu Dapatkan?</span>
        </h2>

        {/* Daftar poin */}
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold text-gray-900">1. Branding Total</span> – 
            Identitas merek lengkap dari logo, guideline, hingga aset visual.
          </li>
          <li>
            <span className="font-semibold text-gray-900">2. Konten Kreatif</span> – 
            Materi konten sosial media dan marketing siap pakai.
          </li>
          <li>
            <span className="font-semibold text-gray-900">3. Website Profesional</span> – 
            Website modern, responsif, dan SEO-friendly.
          </li>
          <li>
            <span className="font-semibold text-gray-900">4. 3D Visual Futuristik</span> – 
            Render dan mockup 3D untuk presentasi atau promosi inovatif.
          </li>
          <li>
            <span className="font-semibold text-gray-900">5. Solusi All-in-One</span> – 
            Semua kebutuhan branding dan digital marketing dikemas dalam satu paket.
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}
