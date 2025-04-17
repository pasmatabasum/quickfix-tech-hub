
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">QuickFix</h3>
            <p className="text-gray-600 mb-4">
              Your one-stop solution for device repairs and new gadgets.
              Fast, reliable, and affordable repair solutions with a team of experienced technicians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-gray-600 hover:text-primary transition duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1" />
                <span className="text-gray-600">+91 9912352545</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1" />
                <span className="text-gray-600">quickfixhyd@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-600">Ameerpet, Hyderabad, 518641</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} QuickFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
