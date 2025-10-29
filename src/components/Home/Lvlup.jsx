import heroImg from "../../assets/hero.jpg";

const HowWeElevate = () => {
  const cards = [
    {
      title: "Social Media Specialist",
      company: "EcoBag Co.",
      desc: "Produk ramah lingkungan berbahan kanvas, fokus pada desain stylish dan keberlanjutan.",
      image: heroImg,
      quote:
        "Konsep branding yang jelas, konsisten, dan kreatif. Brand kami kini terlihat profesional dan lebih mudah dikenal di pasaran.",
    },
    {
      title: "Website Development",
      company: "TechStart",
      desc: "Startup teknologi yang menyediakan solusi digital untuk bisnis kecil dan menengah.",
      image: heroImg,
      quote:
        "Website yang dibuat tim ini cepat, responsif, dan user-friendly. Pengalaman pengunjung jauh lebih baik, dan konversi penjualan naik.",
    },
    {
      title: "Videography",
      company: "Cafe Aroma",
      desc: "Kedai kopi modern yang menghadirkan pengalaman pelanggan di media visual.",
      image: heroImg,
      quote:
        "Video campaignnya menarik dan komunikatif. Banyak orang membagikan konten ini, sehingga brand awareness meningkat drastis.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white text-center overflow-hidden">
      {/* === Background oranye besar === */}
      <div className="absolute inset-0 flex justify-center mt-60 sm:mt-72 md:mt-56">
        <div className="bg-orange-500 w-full h-3/5 mt-20 sm:mt-32 md:mt-40"></div>
      </div>

      <div className="relative z-10">
        {/* === Judul === */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 px-4">
          <span className="text-orange-500">Bagaimana</span> Kami Menaikkan Brand ke{" "}
          <br className="hidden md:block" />
          Level Berikutnya
        </h2>

        {/* === Card Section === */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 px-4 sm:px-8 md:px-12">
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mx-auto w-full md:w-4/5"
            >
              {/* Gambar kiri */}
              <div
                className="m-4 sm:m-6 md:m-10 w-full md:w-56 h-48 sm:h-52 md:h-56 rounded-md flex-shrink-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: item.color || "#F97316",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Konten teks */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center text-left">
                <p className="text-orange-500 text-sm sm:text-base font-semibold mb-1">
                  {item.title}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {item.company}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-gray-800 text-sm sm:text-base italic border-l-4 border-orange-500 pl-3">
                  “{item.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === Tombol Selengkapnya === */}
        <div className="mt-10 sm:mt-12 flex justify-center md:justify-end pr-0 md:pr-10">
          <button className="flex items-center text-orange-500 font-semibold hover:underline">
            Selengkapnya
            <span className="ml-2 text-xl">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeElevate;
