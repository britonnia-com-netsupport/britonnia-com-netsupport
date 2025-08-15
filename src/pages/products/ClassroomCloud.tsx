import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductInterestForm } from "@/components/forms/ProductInterestForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Cloud, 
  Shield, 
  Monitor, 
  Users,
  Smartphone,
  Wifi,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Globe
} from "lucide-react";
import classroomCloudImage from "@/assets/classroom-cloud.jpg";

const ClassroomCloud = () => {
  const features = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud-Based Platform",
      description: "Access your classroom management tools from anywhere with internet connectivity"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Digital Safeguarding",
      description: "Comprehensive safeguarding tools to protect students online"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "IT Asset Management",
      description: "Track and manage all devices and software across your organization"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Remote Learning Support",
      description: "Enable effective teaching and learning from any location"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Multi-Device Support",
      description: "Works seamlessly across computers, tablets, and smartphones"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Detailed insights into device usage and student engagement"
    }
  ];

  const benefits = [
    "Support hybrid and remote learning environments",
    "Ensure student safety with advanced safeguarding",
    "Reduce IT management overhead",
    "Improve teaching flexibility and accessibility",
    "Streamline device deployment and management",
    "Provide comprehensive usage analytics"
  ];

  const testimonials = [
    {
      quote: "We evaluated Senso, Impero and Securly. classroom.cloud is the only solution that met all of our needs whilst providing value for money and exceptional service.",
      author: "Nova Education Trust",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 font-space-grotesk">
                classroom.cloud
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 font-inter">
                The ultimate cloud-based 3-in-1 platform combining classroom management, 
                safeguarding, and IT management for flexible learning environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ProductInterestForm productName="classroom.cloud" productFeatures={["Cloud-based access", "Digital safeguarding", "IT management"]}>
                  <Button variant="glass" size="lg">
                    Request Demo
                  </Button>
                </ProductInterestForm>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="lg">
                      Get Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ContactForm
                      title="classroom.cloud Quote"
                      description="Get pricing information for classroom.cloud."
                      inquiryType="quote_request"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="relative">
              <img
                src={classroomCloudImage}
                alt="classroom.cloud platform"
                className="rounded-xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-tech-primary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Three Solutions in One Platform
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              classroom.cloud uniquely combines classroom management, digital safeguarding, 
              and IT asset management in a single, powerful cloud platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-gradient-tech-primary rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">
                  Classroom Management
                </h3>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  Full classroom control with screen monitoring, application management, 
                  and collaborative learning tools
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-gradient-tech-primary rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">
                  Digital Safeguarding
                </h3>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  Advanced protection with keyword monitoring, web filtering, 
                  and real-time safety alerts
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-gradient-tech-primary rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">
                  IT Management
                </h3>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  Complete device tracking, software inventory, and system 
                  monitoring capabilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Comprehensive Cloud Features
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Access powerful education technology tools from anywhere with 
              classroom.cloud's comprehensive feature set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="p-3 bg-gradient-tech-primary rounded-lg text-primary-foreground w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-space-grotesk">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
                Perfect for Modern Education
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-inter">
                classroom.cloud adapts to today's diverse learning environments, 
                supporting in-person, remote, and hybrid education models with equal effectiveness.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">
                Why Choose classroom.cloud?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Anywhere Access</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Access your classroom tools from any device with internet connectivity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <Wifi className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Always Updated</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Automatic updates ensure you always have the latest features and security
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Data Insights</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Comprehensive analytics to improve teaching and learning outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-xl text-foreground mb-6 leading-relaxed font-inter">
                  "{testimonials[0].quote}"
                </blockquote>
                <cite className="text-muted-foreground text-lg font-space-grotesk">
                  — {testimonials[0].author}
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">
                Explore classroom.cloud
              </h2>
              <p className="text-muted-foreground font-inter">
                Visit the official classroom.cloud website for detailed information
              </p>
            </div>
            <div className="text-center">
              <iframe
                src="https://classroom.cloud/"
                className="w-full h-96 rounded-lg border border-border/50"
                title="classroom.cloud Official Website"
              />
              <div className="mt-4">
                <Button variant="outline" asChild>
                  <a href="https://classroom.cloud/" target="_blank" rel="noopener noreferrer">
                    Visit classroom.cloud
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-space-grotesk">
              Ready for Cloud-Based Education?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-inter">
              Discover how classroom.cloud can transform your institution's approach 
              to digital learning and management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ProductInterestForm productName="classroom.cloud" productFeatures={["Cloud-based access", "Digital safeguarding", "IT management"]}>
                <Button variant="glass" size="lg">
                  Schedule Demo
                </Button>
              </ProductInterestForm>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    Get Pricing
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="classroom.cloud Pricing"
                    description="Get detailed pricing information for your institution."
                    inquiryType="quote_request"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassroomCloud;