import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Shield, 
  Users, 
  MessageSquare, 
  Cloud, 
  Settings,
  GraduationCap,
  Building2
} from "lucide-react";
import { ProductInterestForm } from "@/components/forms/ProductInterestForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import netSupportImage from "@/assets/classroom-cloud-hero.png";

const Solutions = () => {
  const educationSolutions = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "NetSupport School",
      description: "Comprehensive classroom management software for monitoring, controlling, and collaborating with students across all platforms.",
      features: ["Real-time screen monitoring", "Instant messaging", "Assessment tools", "Presentation mode"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "classroom.cloud",
      description: "Cloud-based platform combining classroom management, safeguarding, and IT management for flexible learning environments.",
      features: ["Remote learning support", "Safeguarding tools", "IT asset management", "Multi-platform support"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "NetSupport DNA",
      description: "Comprehensive IT management and eSafety toolkit for schools to monitor and protect their technology environment.",
      features: ["Real-time monitoring", "Asset tracking", "Security alerts", "Usage reporting"]
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "NetSupport Notify",
      description: "Instant alert and notification system for communicating with staff and students across your institution.",
      features: ["Scheduled alerts", "Emergency notifications", "Screen takeover", "Multi-platform delivery"]
    }
  ];

  const corporateSolutions = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "NetSupport Manager",
      description: "Feature-rich desktop remote control solution built on 36 years of development experience for enterprise environments.",
      features: ["Remote desktop control", "File transfer", "Chat functionality", "Security controls"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "NetSupport DNA",
      description: "IT asset management solution for tracking, monitoring, and managing corporate endpoints and infrastructure.",
      features: ["Asset tracking", "Software inventory", "Performance monitoring", "Cost optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "247connect",
      description: "Cloud-based remote desktop access solution for reliable and secure connections from anywhere.",
      features: ["Cloud-based access", "Secure connections", "Scalable solution", "24/7 support"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Training Solutions",
      description: "Collaborative instruction and training tools for corporate development and staff onboarding programs.",
      features: ["Interactive training", "Group collaboration", "Progress tracking", "Assessment tools"]
    }
  ];

  const SolutionCard = ({ solution, delay = 0 }: { solution: any; delay?: number }) => (
    <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50 animate-float" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-tech-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform duration-300">
            {solution.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {solution.title}
          </h3>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {solution.description}
        </p>
        <ul className="space-y-2 mb-6">
          {solution.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        {solution.title === "NetSupport School" ? (
          <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors" asChild>
            <a href="/products/netsupport-school">Learn More</a>
          </Button>
        ) : solution.title === "classroom.cloud" ? (
          <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors" asChild>
            <a href="/products/classroom-cloud">Learn More</a>
          </Button>
        ) : solution.title === "NetSupport DNA" ? (
          <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors" asChild>
            <a href="/products/netsupport-dna">Learn More</a>
          </Button>
        ) : solution.title === "NetSupport Manager" ? (
          <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors" asChild>
            <a href="/products/netsupport-manager">Learn More</a>
          </Button>
        ) : (
          <ProductInterestForm productName={solution.title} productFeatures={solution.features}>
            <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
              Learn More
            </Button>
          </ProductInterestForm>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Complete NetSupport 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Solutions Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From classroom management to corporate IT solutions, we provide the full range 
            of NetSupport software to meet your organization's unique needs.
          </p>
        </div>

        {/* Education Solutions */}
        <div id="education" className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-tech-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Education Solutions</h3>
              <p className="text-muted-foreground">Empowering educators and students with technology</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {educationSolutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} delay={index * 0.2} />
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  Why Choose NetSupport for Education?
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our education solutions are designed to be effective, easy to use, and affordable 
                  for any school budget. They integrate seamlessly to provide a complete solution 
                  for managing technology and its users in the classroom and across the school.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">36+ years of educational technology expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Trusted by schools worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Seamless integration across platforms</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={netSupportImage}
                  alt="NetSupport education solutions"
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-tech-primary/20 rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Solutions */}
        <div id="corporate">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-tech-secondary rounded-lg">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Corporate Solutions</h3>
              <p className="text-muted-foreground">Supporting flexible workplace technology</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateSolutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} delay={index * 0.2} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact Britonnia Ltd today to discuss how NetSupport solutions can 
              enhance your educational or corporate environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="glass" size="lg">
                    Schedule Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="Schedule a Demo"
                    description="Book a personalized demonstration of NetSupport solutions."
                    inquiryType="demo_request"
                  />
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    Get Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="Request a Quote"
                    description="Get pricing information for NetSupport solutions."
                    inquiryType="quote_request"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;