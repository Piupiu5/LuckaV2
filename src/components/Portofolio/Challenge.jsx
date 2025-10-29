export default function ChallengeSection() {
  const challenges = [
    "Awareness brand masih minim di kalangan target audiens",
    "Identitas visual belum jelas, feed Instagram terlihat acak",
    "Engagement rendah karena konten tidak sesuai gaya hidup anak muda",
    "Belum ada strategi campaign yang terintegrasi antar channel",
  ];

  return (
    <section className="font-poppins max-w-5xl mx-auto  px-6">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-3">
        Apa Tantangannya?
      </h2>
      <p className="text-gray-600 mb-10">
        Sebagai pemain baru, <span className="font-semibold">For Money</span>{" "}
        menghadapi persaingan ketat di pasar parfum premium. Beberapa masalah
        yang muncul:
      </p>

      <div className="space-y-5">
        {challenges.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-orange-500 text-white px-6 py-3 rounded-full shadow-md"
          >
            <div className="bg-white text-orange-500 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
              {index + 1}
            </div>
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
