import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ExternalLink
} from "lucide-react";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">B</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Britonnia Ltd</span>
                  <span className="text-sm text-primary-foreground/70">NetSupport Solutions Partner</span>
                </div>
              </a>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Your trusted technology consultancy partner in Ghana, delivering world-class 
                NetSupport software solutions for education and corporate environments 
                across West Africa.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">Accra, Ghana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">+233 244 189 180</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">info@britonnia.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/external/education-solutions" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Education Solutions
                  </a>
                </li>
                <li>
                  <a href="/external/corporate-solutions" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Corporate Solutions
                  </a>
                </li>
                <li>
                  <a href="/products/netsupport-school" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    NetSupport School
                  </a>
                </li>
                <li>
                  <a href="/products/netsupport-manager" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    NetSupport Manager
                  </a>
                </li>
                <li>
                  <a href="/products/classroom-cloud" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    classroom.cloud
                  </a>
                </li>
                <li>
                  <a href="/products/netsupport-dna" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    NetSupport DNA
                  </a>
                </li>
              </ul>
            </div>

            {/* NetSupport Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">NetSupport Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/external/education-solutions" 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    Education Solutions Hub
                  </a>
                </li>
                <li>
                  <a 
                    href="/external/corporate-solutions" 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    Corporate Solutions Hub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netsupportsoftware.com/downloads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    Free Trials
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netsupportsoftware.com/quote/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    Get Pricing
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.netsupportsoftware.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
                  >
                    NetSupport Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="max-w-2xl">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/70 mb-4">
                Get the latest NetSupport product updates and technology insights delivered to your inbox.
              </p>
              <NewsletterSignup className="flex gap-3" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60">
                © 2024 Britonnia Ltd. All rights reserved. NetSupport is a trademark of NetSupport Ltd.
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;