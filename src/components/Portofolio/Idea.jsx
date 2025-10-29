import luckaLogo from "../../assets/logo.png"; // ganti dengan path logo kamu

export default function FromIdeaToImpact() {
  return (
    <section className="font-poppins max-w-5xl mx-auto py-20 px-6">
      {/* Bagian Judul */}
      <h1 className="text-4xl text-center md:text-5xl font-bold mb-4">
        From <span className="text-orange-500">Idea</span> to{" "}
        <span className="text-orange-500">Impact</span>
      </h1>
      <p className="text-gray-500 text-center max-w-2xl mx-auto">
        Setiap kolaborasi bukan sekadar proyek, tapi perjalanan kreatif
      </p>

      {/* Bagian Konten Bawah */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center md:max-w-full md:gap-24 gap-6">
        <div className="text-left md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Lucka Agency
          </h2>
          <div className="flex items-center md:justify-center justify-center gap-3">
            <img
              src={luckaLogo}
              alt="Lucka Agency"
              className="h-20 object-contain"
            />
          </div>
        </div>

        <div className="text-gray-600 max-w-md md:text-xl text-left">
          <p>
            Lucka dipercaya untuk mengelola akun media sosial sebuah brand
            lifestyle lokal. Tantangannya? Feed yang tidak konsisten, engagement
            rendah, dan audiens yang sulit terhubung dengan value brand.
          </p>
        </div>
      </div>
    </section>
  );
}
