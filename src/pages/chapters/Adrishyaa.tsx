import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Adrishyaa = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-youit-sholi/10 to-youit-sholi/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-youit-sholi flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-youit-sholi">
              ADRISHYAA
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Platform for marking legacies
            </h2>
            <p className="text-lg text-gray-700">
              An online marketplace focused on custom products supporting local communities and sustainable practices. 
              Bringing together artisans and consumers for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Under Development */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Chapter Details Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're currently working on bringing you our Adrishyaa e-commerce platform with ethical products 
            that support sustainable development and fair trade. Please check back soon!
          </p>
          <Button asChild className="bg-youit-sholi hover:bg-youit-sholi/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Adrishyaa;