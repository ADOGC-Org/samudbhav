import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const wow = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-youit-woemch/10 to-youit-woemch/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-youit-woemch flex items-center justify-center text-white font-bold text-xl">
                W
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-youit-woemch">
              Women Of Wonders : Empowering women
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Women Empowerment Chapter
            </h2>
            <p className="text-lg text-gray-700">
              Dedicated to uplifting rural women through education, skill development, and sustainable livelihood opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Under Development */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Chapter Details Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're currently working on bringing you detailed information about our WOEMCH initiatives, 
            success stories, and opportunities to get involved. Please check back soon!
          </p>
          <Button asChild className="bg-youit-woemch hover:bg-youit-woemch/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default wow;