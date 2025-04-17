
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "@/components/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">Fast Repairs & Trusted Devices</h1>
          <p className="text-xl text-gray-700 mb-4">Your one-stop solution for device repairs and new gadgets.</p>
          <p className="text-lg font-bold text-gray-800 mb-8">A Quick service within 30 Minutes!</p>
          <p className="text-lg font-semibold text-primary mb-8">Visit Fee: ₹99 Only (For Service Booking)</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/book-now"
              className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Book a Service <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 text-primary border border-primary font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Laptop & Desktop Repair</h3>
              <p className="text-gray-600 text-center">Expert repairs for all computer issues with quick turnaround time.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Mobile Phone Repair</h3>
              <p className="text-gray-600 text-center">Screen replacement, battery issues, and software problems fixed.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">TV Repair</h3>
              <p className="text-gray-600 text-center">LCD, LED, and Smart TV repairs by certified technicians.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">CCTV Repair</h3>
              <p className="text-gray-600 text-center">Installation, maintenance, and repair of security camera systems.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-start space-x-4">
              <MapPin size={24} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-gray-600">Ameerpet, Hyderabad, 518641</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-start space-x-4">
              <Mail size={24} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p className="text-gray-600">quickfixhyd@gmail.com</p>
              </div>
            </div>

            {/* Quick Service */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-start space-x-4">
              <Clock size={24} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Quick Service</h3>
                <p className="text-gray-600">Service within 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">About Us</h2>
            <p className="text-gray-700 mb-8">
              QuickFix is a leading repair service provider for electronic devices. We aim to provide fast, reliable, and affordable repair solutions with a team of experienced technicians. Whether it's your mobile phone, laptop, TV, or CCTV system, we ensure top-notch service with genuine parts and timely support.
            </p>
            <Link 
              to="/about" 
              className="inline-block text-primary hover:text-blue-700 font-semibold underline"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Book a service now or contact us for any inquiries. Our team is ready to help you with your device repair needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book-now"
              className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Book a Service
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-primary border border-primary font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
