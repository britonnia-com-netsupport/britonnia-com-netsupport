import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import britonniaoLogo from "@/assets/britonnia-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={britonniaoLogo} alt="Britonnia Ltd" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg">Britonnia Ltd</span>
              <span className="text-xs text-muted-foreground">NetSupport Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">
              Education
            </a>
            <a href="#corporate" className="text-foreground hover:text-primary transition-colors">
              Corporate
            </a>
            <a href="/resources" className="text-foreground hover:text-primary transition-colors">
              {t('nav.resources')}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Free Trial & Language */}
          <div className="hidden md:flex items-center gap-3">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-20 h-9">
                <Globe className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="hero" size="sm" onClick={() => window.location.href = '/downloads'}>
              {t('nav.getStarted')}
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
              <a href="/" className="text-foreground hover:text-primary transition-colors py-2" onClick={toggleMenu}>
                {t('nav.home')}
              </a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors py-2" onClick={toggleMenu}>
                Education
              </a>
              <a href="#corporate" className="text-foreground hover:text-primary transition-colors py-2" onClick={toggleMenu}>
                Corporate
              </a>
              <a href="/resources" className="text-foreground hover:text-primary transition-colors py-2" onClick={toggleMenu}>
                {t('nav.resources')}
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={toggleMenu}>
                {t('nav.contact')}
              </a>
              <Button variant="hero" size="sm" className="w-full mt-4" onClick={() => window.location.href = '/downloads'}>
                {t('nav.getStarted')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;