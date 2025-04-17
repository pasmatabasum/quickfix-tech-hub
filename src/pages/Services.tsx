
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/PageContainer";

const Services = () => {
  const navigate = useNavigate();
  const [serviceOption, setServiceOption] = useState<string | null>(null);
  const [showBuyNewForm, setShowBuyNewForm] = useState(false);
  const [ticketId, setTicketId] = useState<string>("");

  const handleServiceOptionChange = (option: string) => {
    setServiceOption(option);
    
    if (option === "repair") {
      navigate("/book-now");
    } else if (option === "buy_new") {
      setShowBuyNewForm(true);
      generateTicketId();
    }
  };

  const generateTicketId = () => {
    const newTicketId = 'QFB-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(newTicketId);
  };

  return (
    <PageContainer>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary text-center mb-8">Book a Service or Buy a New Device</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="repair"
                    name="service_option"
                    value="repair"
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    checked={serviceOption === "repair"}
                    onChange={() => handleServiceOptionChange("repair")}
                  />
                  <label htmlFor="repair" className="ml-2 block text-gray-700">
                    Service
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="buy_new"
                    name="service_option"
                    value="buy_new"
                    className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    checked={serviceOption === "buy_new"}
                    onChange={() => handleServiceOptionChange("buy_new")}
                  />
                  <label htmlFor="buy_new" className="ml-2 block text-gray-700">
                    Buy New / Exchange
                  </label>
                </div>
              </div>
              
              <p className="font-semibold text-gray-800 mb-8">Book a Service (For visit only ₹99/-)</p>
              
              {showBuyNewForm && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/success");
                }}>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Inquire About a New Device</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="device_type" className="block text-gray-700 font-medium mb-1">
                        Select a Device to Buy:
                      </label>
                      <select
                        id="device_type"
                        name="device_type"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">-- Select --</option>
                        <option value="Laptop/Desktop">Laptop/Desktop</option>
                        <option value="TV">TV</option>
                        <option value="Mobile">Mobile</option>
                        <option value="CCTV">CCTV</option>
                      </select>
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="10-digit number"
                        pattern="\d{10}"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="state"
                        placeholder="Your State"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="Your City"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="appointment_date" className="block text-gray-700 font-medium mb-1">
                        Preferred Date & Time:
                      </label>
                      <input
                        type="datetime-local"
                        id="appointment_date"
                        name="appointment_date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div className="mt-4">
                      <p className="font-medium text-gray-700">
                        Ticket ID: <span className="text-primary font-bold">{ticketId}</span>
                      </p>
                      <input type="hidden" name="ticket_id" value={ticketId} />
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Services;
