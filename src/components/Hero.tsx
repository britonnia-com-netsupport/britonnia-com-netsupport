import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Technology solutions background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '-4s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-sm rounded-full border border-border/30 mb-8">
            <span className="text-sm text-primary-foreground/90">
              🇬🇭 Leading NetSupport Solutions in Ghana
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering 
            <span className="bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent"> Education </span>
            & <span className="bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">Corporate</span> Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Britonnia Ltd partners with NetSupport Software to deliver cutting-edge 
            classroom management, IT asset management, and remote support solutions 
            across Ghana and West Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Discover Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="xl" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                36+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                15M+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Global Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                150+
              </div>
              <div className="text-sm text-primary-foreground/70">
                Countries Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                24/7
              </div>
              <div className="text-sm text-primary-foreground/70">
                Local Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;