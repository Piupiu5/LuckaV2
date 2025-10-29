import { Quote } from "lucide-react";

const testimonial = [
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
  {
    text: "We have been using ClickMagick for a long time and are very pleased with the results. We have been able to achieve double digit growth for our clients year after year for a reason.",
    author: "Admin Terbaik",
  },
];

export default function Testimonial() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* ===== Background oranye atas ===== */}
      <div className="absolute left-0 right-0 top-[23%] h-[25%] bg-orange-500 -z-10"></div>

      {/* ===== Background oranye bawah ===== */}
      <div className="absolute left-0 right-0 bottom-[3%] h-[25%] bg-orange-500 -z-10"></div>

      {/* ===== Header ===== */}
      <div className="text-center mb-12 px-4 relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
          Apa <span className="text-orange-500">Kata Partner Kami?</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Kolaborasi bareng Lucka bukan cuma soal project, tapi perjalanan <br />
          bersama yang bikin brand makin berkembang
        </p>
      </div>

      {/* ===== Grid 2 kolom ===== */}
      <div className="max-w-4xl md:max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 place-items-center relative z-10">
        {testimonial.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow-md border border-gray-100 p-6 
              flex flex-col justify-between hover:shadow-lg transition-shadow
              h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96 lg:h-96 lg:w-96
            "
          >
            <Quote className="text-orange-500 w-10 h-10 md:w-14 md:h-14 mb-3" />
            <p className="text-gray-700 text-xs md:text-xl flex-1">
              {item.text}
            </p>
            <p className="font-semibold text-gray-900 text-sm mt-3">
              – {item.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
