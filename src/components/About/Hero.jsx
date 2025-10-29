import aboutImage from "../../assets/hero-about.png"; // sesuaikan path gambarnya

const AboutSection = () => {
  return (
    <section className="bg-orange-500 text-white py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Kiri: Gambar */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={aboutImage}
            alt="Lucka Agency Team"
            className="max-w-sm md:max-w-md rounded-full"
          />
        </div>

        {/* Kanan: Teks */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Apa itu{" "}
            <span className="text-white font-extrabold">Lucka Agency?</span>
          </h2>

          <p className="text-white text-justify leading-relaxed mb-4 font-medium">
            Lucka Agency adalah agensi kreatif yang berdedikasi membantu bisnis
            berkembang lewat solusi digital dan visual yang inovatif. Berdiri
            sejak 2020, kami lahir dari semangat kreator muda yang percaya setiap
            brand punya cerita unik yang layak dihidupkan.
          </p>

          <p className="text-white text-justify leading-relaxed font-medium">
            Dari proyek kecil hingga brand besar, kami terus tumbuh bersama klien
            melalui layanan seperti <b>Social Media Specialist</b>,{" "}
            <b>Branding</b>, <b>Photography</b>, <b>Videography</b>,{" "}
            <b>Website Development</b>, hingga <b>3D Art</b>. Bagi kami,
            kreativitas selalu berjalan seiring strategi agar setiap karya tidak
            hanya indah secara visual, tetapi juga berdampak nyata bagi
            pertumbuhan bisnis.
          </p>

          {/* Logo kanan bawah */}
          <div className="mt-6 flex justify-end">
            <span className="font-extrabold text-2xl tracking-widest">
              LUCKA <span className="text-sm font-normal align-top">Agency</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
