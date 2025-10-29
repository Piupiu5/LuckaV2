import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "Foto & video dari Lucka Agency bikin produk kami terlihat premium. Penjualan pun meningkat signifikan.",
      author: "Owner F&B Business",
    },
    {
      quote:
        "Lucka Agency bikin brand kami lebih hidup di media sosial. Engagement naik 3x lipat dalam 2 bulan!",
      author: "CEO Startup Fashion",
    },
  ];

  return (
    <section className=" bg-white text-center relative">
      {/* Judul */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
        <span className="text-orange-500">Apa</span> Kata Mereka <br className="hidden md:block" />
        Tentang Lucka Agency?
      </h2>

      {/* Icon quote di kanan atas */}
      <div className="absolute right-10 top-28 md:top-32 text-orange-500">
        <Quote size={80} strokeWidth={2.5} />
      </div>

      {/* Testimonial cards */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10 px-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="text-left border-l-4 border-orange-500 pl-6 md:pl-8"
          >
            <p className="text-gray-800 text-lg italic leading-relaxed mb-3">
              “{item.quote}”
            </p>
            <p className="text-orange-500 font-semibold text-sm">
              — {item.author}
            </p>
          </div>
        ))}
      </div>

      {/* Tombol Selengkapnya */}
      

<div className="mt-12 flex justify-end pr-10">
  <Link
    to="/testimoni"
    className="flex items-center text-orange-500 font-semibold hover:underline"
  >
    Selengkapnya
    <span className="ml-2 text-xl">↗</span>
  </Link>
</div>

    </section>

    
  );
};

export default TestimonialSection;
