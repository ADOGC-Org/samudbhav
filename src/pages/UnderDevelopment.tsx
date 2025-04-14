
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Construction, Home } from "lucide-react";
import { useEffect } from "react";

const UnderDevelopment = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="bg-amber-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="h-12 w-12 text-amber-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Under Development</h1>
        <p className="text-gray-600 mb-8">
          We're working hard to bring you an amazing experience. This page is currently
          under construction and will be available soon. Please check back later!
        </p>
        <Button asChild className="bg-youit-primary hover:bg-youit-primary/90">
          <Link to="/" className="flex items-center gap-2">
            <Home size={16} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default UnderDevelopment;