import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ChaptersSection from "@/components/home/ChaptersSection";
import ImageCarousel from "@/components/home/ImageCarousel";
import RegisterForm from "@/components/home/RegisterForm";
import DonateSection from "@/components/home/DonateSection";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // This would normally come from authentication state
  const [isLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-youit-primary to-youit-secondary bg-clip-text text-transparent">
              Welcome to Samudbhav!
            </h1>
            <p className="text-lg text-gray-700">
              We are a community-focused organization dedicated to making a positive impact through our three chapters: 
              Women of Wonders for rural women empowerment, Supatham for education in various fields, and Adrishyaa, 
              our ethical and community based e-commerce platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-youit-primary hover:bg-youit-primary/90">
                <Link to="/about-us">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Chapters</h2>
            <p className="text-gray-600 mt-2">
              Explore our three unique initiatives making a difference
            </p>
          </div>
          <ChaptersSection />
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <p className="text-gray-600 mt-2">
              See how our work is making a difference
            </p>
          </div>
          <ImageCarousel />
        </div>
      </section>

      {/* Register Section - Only show if not logged in */}
      {!isLoggedIn && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Join Us</h2>
              <p className="text-gray-600 mt-2">
                Become a part of our community and help us make a difference
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <RegisterForm />
            </div>
          </div>
        </section>
      )}

      {/* Donate Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Support Our Work</h2>
            <p className="text-gray-600 mt-2">
              Your generous donations help us continue our mission
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <DonateSection />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-youit-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to make a difference?
          </h2>
          <p className="mb-6">
            Join our community today and be part of something greater.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-youit-primary hover:bg-gray-100">
            <Link to="/about-us" className="flex items-center gap-2">
              Learn More <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;