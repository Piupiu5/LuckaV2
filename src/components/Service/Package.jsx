export default function Package() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        <h2 className="text-6xl font-bold mb-4 mt-20">
          <span className="text-orange-500">Paket</span>{" "}
          <span className="text-black">Luckaverse</span>
        </h2>

        {/* Subjudul */}
        <p className="font-semibold text-gray-800 mb-3">
          Solusi premium all-in-one untuk brand tanpa batas.
        </p>

        {/* Deskripsi */}
        <p className="text-gray-600 leading-relaxed mb-6">
          Paket Luckaverse mencakup branding total, konten kreatif, website,
          hingga 3D visual futuristik, dirancang untuk memberikan pengalaman
          lengkap dan modern bagi bisnis Anda.
        </p>

        {/* Harga */}
        <div>
          <p className="text-gray-700 font-medium mb-1">Harga Mulai dari</p>
          <p className="text-3xl font-extrabold text-orange-500">
            Rp 4.500.000
          </p>
        </div>
        <a
          href="#paket-lainnya"
          className="inline-block bg-orange-500 text-white font-semibold mt-5 py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Lihat Paket Lainnya
        </a>
      </div>
    </section>
  );
}
