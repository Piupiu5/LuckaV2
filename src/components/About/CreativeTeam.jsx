import founderImg from "../../assets/Founder.png"; // ganti sesuai path gambar kamu

export default function CreativeTeam() {
  return (
    <section className="font-sans text-gray-800">
      {/* ===== BARIS 1 ===== */}
      <div className="flex flex-wrap justify-center gap-10 py-10 bg-white">
        {/* Creative Director */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-orange-500 mb-2 text-center">Creative Director</h3>
          <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
            <img
              src={founderImg}
              alt="Creative Director"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </div>

        {/* Finance Manager */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-orange-500 mb-2 text-center">Finance Manager</h3>
          <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
            <img
              src={founderImg}
              alt="Finance Manager"
              className="w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* ===== BARIS 2 & 3 ===== */}
      <div className="bg-[#ff7a00] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {/* Item Card */}
          {[
            "Social Media Specialist",
            "Web Developer",
            "3D Artist",
            "Copywriter",
            "Videographer",
            "Business Development",
          ].map((role, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-white mb-2">{role}</h3>
              <div className="bg-white rounded-2xl shadow-lg p-4 w-64 h-80 overflow-hidden">
                <img
                  src={founderImg}
                  alt={role}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
