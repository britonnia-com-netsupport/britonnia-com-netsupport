import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-tech-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg">Britonnia Ltd</span>
              <span className="text-xs text-muted-foreground">NetSupport Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">
              Education
            </a>
            <a href="#corporate" className="text-foreground hover:text-primary transition-colors">
              Corporate
            </a>
            <a href="/resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="/faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Free Trial Section */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm" onClick={() => window.location.href = '/downloads'}>
              Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#education" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a 
                href="#corporate" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Corporate
              </a>
              <a 
                href="/resources" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Resources
              </a>
              <a 
                href="/faq" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <a 
                href="/contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-full mt-4" onClick={() => window.location.href = '/downloads'}>
                Free Trial
              </Button>
            </nav>
          </div>
        )}
      </div>

      
    </header>
  );
};

export default Header;