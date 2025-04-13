import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-youit-primary flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-youit-primary to-youit-secondary bg-clip-text text-transparent">
                Samudbhav
              </span>
            </Link>
            <p className="text-gray-600 text-sm mt-4">
            Samudbhav is dedicated to empowering communities through education, support, and sustainable development initiatives.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>1234 Organization Way</p>
              <p>City, State 12345</p>
              <p>contact@samudbhav.tech</p>
              <p>+91 9999999999</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-youit-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-youit-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@samudbhav.tech"
                className="text-gray-500 hover:text-youit-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-youit-primary transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-youit-primary transition-colors">
                About Us
              </Link>
              <Link to="/donate" className="text-gray-600 hover:text-youit-primary transition-colors">
                Donate
              </Link>
              <Link to="/under-development" className="text-gray-600 hover:text-youit-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/under-development" className="text-gray-600 hover:text-youit-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Samudbhav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;