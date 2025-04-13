import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Heart, 
  Info, 
  ChevronDown, 
  User, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-youit-primary flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-youit-primary to-youit-secondary bg-clip-text text-transparent">
            Samudbhav
          </span>
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        )}

        {/* Navigation Links - Desktop */}
        <nav className={`md:flex items-center space-x-1 ${isMobile ? 'hidden' : 'flex'}`}>
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-1">
              <Home size={16} />
              <span>Home</span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>Chapters</span>
                <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/chapters/wow" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-youit-woemch" />
                  <span>WOW</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/chapters/supatham" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-youit-smtl" />
                  <span>SUPATHAM</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/chapters/adrishyaa" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-youit-sholi" />
                  <span>ADRISHYAA</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/donate">
            <Button variant="ghost" className="flex items-center gap-1">
              <Heart size={16} />
              <span>Donate</span>
            </Button>
          </Link>

          <Link to="/about-us">
            <Button variant="ghost" className="flex items-center gap-1">
              <Info size={16} />
              <span>About Us</span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 ml-2">
                <User size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/account" className="flex items-center gap-2 cursor-pointer">
                  <User size={16} />
                  <span>My Account</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <LogOut size={16} />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 border-b animate-fade-in">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" onClick={toggleMenu} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                <Home size={16} />
                <span>Home</span>
              </Link>
              
              <div className="border-t pt-2">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>Chapters</span>
                </h3>
                <div className="pl-6 space-y-2">
                  <Link 
                    to="/chapters/wow" 
                    onClick={toggleMenu}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                  >
                    <div className="w-2 h-2 rounded-full bg-youit-woemch" />
                    <span>WOW</span>
                  </Link>
                  <Link 
                    to="/chapters/supatham" 
                    onClick={toggleMenu}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                  >
                    <div className="w-2 h-2 rounded-full bg-youit-smtl" />
                    <span>SUPATHAM</span>
                  </Link>
                  <Link 
                    to="/chapters/adrishyaa" 
                    onClick={toggleMenu}
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                  >
                    <div className="w-2 h-2 rounded-full bg-youit-sholi" />
                    <span>ADRISHYAA</span>
                  </Link>
                </div>
              </div>
              
              <Link to="/donate" onClick={toggleMenu} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                <Heart size={16} />
                <span>Donate</span>
              </Link>
              
              <Link to="/about-us" onClick={toggleMenu} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                <Info size={16} />
                <span>About Us</span>
              </Link>
              
              <div className="border-t pt-2">
                <Link to="/account" onClick={toggleMenu} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                  <User size={16} />
                  <span>My Account</span>
                </Link>
                <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;