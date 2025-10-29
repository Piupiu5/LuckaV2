import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Bagian Utama Kontak */}
      <div className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Bagian kiri: Deskripsi & kontak */}
          <div>
            {/* Logo dan nama */}
            <div className="flex items-center mb-4">
              <h1 className="text-4xl font-extrabold">
                <span className="text-black">LU</span>
                <span className="text-yellow-500">C</span>
                <span className="text-orange-500">K</span>
                <span className="text-red-500">A</span>{" "}
                <span className="text-blue-500 text-lg font-semibold">Agency</span>
              </h1>
            </div>

            {/* Garis oranye */}
            <div className="h-1 bg-orange-500 w-24 mb-6"></div>

            {/* Deskripsi */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Lucka Agency merupakan sebuah Agensi kreatif yang berdedikasi untuk
              membantu bisnis Anda berkembang melalui solusi kreatif yang inovatif.
              Memiliki layanan seperti Social Media Specialist, Branding,
              Photography, Videography, Website, dan 3D Artist.
            </p>

            {/* Kontak */}
            <div className="space-y-3 text-gray-800">
              <div className="flex items-center space-x-3">
                <Instagram className="text-orange-500" />
                <span>@luckaagency</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" />
                <span>luckaagency.ind@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500" />
                <span>+62 857-8446-0287</span>
              </div>
            </div>
          </div>

          {/* Bagian kanan: Google Maps */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Lokasi Lucka Agency"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.046148707851!2d112.75273367415186!3d-7.240164692782766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb87b836e159%3A0x4eae9486d5cb7aa9!2sJl.%20Sedati%20Agung%20I%20No.48%2C%20Sedati%2C%20Sidoarjo%2C%20Jawa%20Timur%2061253!5e0!3m2!1sid!2sid!4v1697025400000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center mt-3 text-gray-600 text-sm">
              Jl. Sedati Agung I No.48 4/2 Sedati – Sidoarjo, Jawa Timur 61253
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
