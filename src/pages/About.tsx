
import PageContainer from "@/components/PageContainer";

const About = () => {
  return (
    <PageContainer>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-primary text-center mb-6">About QuickFix</h1>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                QuickFix is a leading repair service provider for electronic devices. We aim to provide fast, reliable, and affordable repair solutions with a team of experienced technicians. Whether it's your mobile phone, laptop, TV, or CCTV system, we ensure top-notch service with genuine parts and timely support.
              </p>

              {/* Mission & Vision */}
              <h2 className="text-2xl font-bold text-primary text-center mb-6 mt-10">Our Mission & Vision</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Mission:</h3>
                  <p className="text-gray-700">
                    To deliver fast, affordable, and trustworthy device repair services that customers can rely on.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">Vision:</h3>
                  <p className="text-gray-700">
                    To become the most preferred and reliable tech repair brand in India through quality service and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Our Team */}
              <h2 className="text-2xl font-bold text-primary text-center mb-6 mt-10">Meet Our Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Team Member 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/80" 
                      alt="Raja Mekala" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800">Raja Mekala</h4>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/80" 
                      alt="Sivananda Reddy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800">Sivananda Reddy</h4>
                  <p className="text-gray-600">Lead Technician</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/80" 
                      alt="Customer Support" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800">Customer Support</h4>
                  <p className="text-gray-600">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
