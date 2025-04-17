
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white py-5 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          QuickFix
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-semibold hover:text-blue-100 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="font-semibold hover:text-blue-100 transition duration-300">
            About Us
          </Link>
          <Link to="/gallery" className="font-semibold hover:text-blue-100 transition duration-300">
            Gallery
          </Link>
          <Link to="/services" className="font-semibold hover:text-blue-100 transition duration-300">
            Services
          </Link>
          <Link to="/book-now" className="font-semibold hover:text-blue-100 transition duration-300">
            Book Now
          </Link>
          <Link to="/contact" className="font-semibold hover:text-blue-100 transition duration-300">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center mt-4 pb-4">
          <Link 
            to="/" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            to="/gallery" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link 
            to="/services" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/book-now" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
          <Link 
            to="/contact" 
            className="py-2 font-semibold hover:text-blue-100 transition duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
