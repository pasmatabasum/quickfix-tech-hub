
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const Success = () => {
  return (
    <PageContainer>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
              
              <p className="text-gray-700 text-lg mb-8">
                Your request has been successfully submitted. We'll get in touch with you soon.
              </p>
              
              <Link
                to="/"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Success;
