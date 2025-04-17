
import { Link } from "react-router-dom";
import PageContainer from "@/components/PageContainer";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <PageContainer>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="flex justify-center mb-6">
            <AlertTriangle size={80} className="text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFound;
