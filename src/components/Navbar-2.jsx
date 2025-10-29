import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ikon hamburger dan close
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-orange-500 py-4">
      <div className="mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <img
          src={logo}
          alt="MyCompany Logo"
          className="w-20 md:w-28 h-auto object-contain"
        />

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-black">Home</Link></li>
          <li><Link to="/portofolio" className="hover:text-black">Portofolio</Link></li>
          <li><Link to="/services" className="hover:text-black">Services</Link></li>
          <li><Link to="/about" className="hover:text-black">About</Link></li>
          <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
        </ul>

        {/* Tombol hamburger (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg text-orange-500 absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-black">Home</Link></li>
            <li><Link to="/portofolio" onClick={() => setIsOpen(false)} className="hover:text-black">Portofolio</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-black">Services</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-black">About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-black">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
