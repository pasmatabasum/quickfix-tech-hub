
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/PageContainer";

const BookNow = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    problemDescription: "",
    address: "",
    preferredDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to an API here
    console.log("Form submitted:", formData);
    navigate("/success");
  };

  return (
    <PageContainer>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-primary text-center mb-8">Book a Service - QuickFix</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="\d{10}"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                      placeholder="10-digit number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="deviceType" className="block text-gray-700 font-medium mb-1">
                      Device Type
                    </label>
                    <select
                      id="deviceType"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">-- Select Device Type --</option>
                      <option value="Laptop/Desktop">Laptop/Desktop</option>
                      <option value="Mobile Phone">Mobile Phone</option>
                      <option value="TV">TV</option>
                      <option value="CCTV">CCTV</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="problemDescription" className="block text-gray-700 font-medium mb-1">
                      Problem Description
                    </label>
                    <textarea
                      id="problemDescription"
                      name="problemDescription"
                      value={formData.problemDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                      Service Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-1">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <p className="font-bold text-center text-gray-800">Book a Service (For visit only ₹99/-)</p>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default BookNow;
