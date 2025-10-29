import heroImage from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* overlay gelap agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* isi hero */}
      <div className="relative text-center z-10">
        <h1 className="md:text-8xl text-6xl font-bold mb-4">Your Partner in Digital Success</h1>
        <p className="text-lg max-w-xl mx-auto">
          Bukan sekadar agency, tapi tim kreatif yang siap mengangkat brand Anda ke level berikutnya.
        </p>
      </div>
    </section>
  );
}
