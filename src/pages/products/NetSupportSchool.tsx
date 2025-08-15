import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductInterestForm } from "@/components/forms/ProductInterestForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Monitor, 
  Users, 
  MessageSquare, 
  FileText,
  Eye,
  Share2,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import netSupportSchoolImage from "@/assets/netsupport-school.jpg";

const NetSupportSchool = () => {
  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Monitor all student screens simultaneously with thumbnail view and detailed screen monitoring"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Screen Sharing",
      description: "Share your screen with students or allow students to share with the class"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Instant Messaging",
      description: "Communicate with individual students or the entire class through built-in chat"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Assessment Tools",
      description: "Create surveys, quizzes, and assessments to gauge student understanding"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "File Distribution",
      description: "Distribute files and collect student work seamlessly across the network"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Application Control",
      description: "Control which applications students can use during lessons"
    }
  ];

  const benefits = [
    "Improve student engagement and focus",
    "Reduce classroom distractions",
    "Facilitate collaborative learning",
    "Streamline lesson delivery",
    "Provide instant feedback",
    "Support differentiated instruction"
  ];

  const testimonials = [
    {
      quote: "NetSupport is a versatile and user-friendly platform that enhances teaching through effective remote control, screen sharing, and real-time demonstrations.",
      author: "Piedmont Technical College",
      rating: 5
    },
    {
      quote: "The classroom management features have transformed how we deliver technology-enhanced lessons.",
      author: "Education Professional",
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
                NetSupport School
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 font-inter">
                Comprehensive classroom management software trusted by schools worldwide. 
                Monitor, control, and collaborate with students across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ProductInterestForm productName="NetSupport School" productFeatures={["Real-time monitoring", "Screen sharing", "Assessment tools"]}>
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
                      title="NetSupport School Quote"
                      description="Get pricing information for NetSupport School."
                      inquiryType="quote_request"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="relative">
              <img
                src={netSupportSchoolImage}
                alt="NetSupport School classroom management"
                className="rounded-xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-tech-primary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Powerful Features for Modern Classrooms
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              NetSupport School provides everything teachers need to manage technology 
              in the classroom effectively.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
                Transform Your Classroom Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-inter">
                NetSupport School empowers teachers to create engaging, focused learning 
                environments where technology enhances rather than distracts from education.
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
                Why Schools Choose NetSupport School
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Easy to Use</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Intuitive interface that teachers can master quickly without extensive training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <Monitor className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Multi-Platform</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Works across Windows, Mac, iOS, Android, and Chromebook devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-tech-primary rounded-lg">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 font-space-grotesk">Secure & Reliable</h4>
                    <p className="text-muted-foreground text-sm font-inter">
                      Enterprise-grade security with robust privacy controls
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Trusted by Educators Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 leading-relaxed font-inter">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground font-space-grotesk">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">
                Learn More About NetSupport School
              </h2>
              <p className="text-muted-foreground font-inter">
                Explore detailed features, documentation, and resources
              </p>
            </div>
            <div className="text-center">
              <iframe
                src="https://www.netsupportschool.com/"
                className="w-full h-96 rounded-lg border border-border/50"
                title="NetSupport School Official Website"
              />
              <div className="mt-4">
                <Button variant="outline" asChild>
                  <a href="https://www.netsupportschool.com/" target="_blank" rel="noopener noreferrer">
                    Visit Official Website
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-space-grotesk">
              Ready to Transform Your Classroom?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-inter">
              Experience the power of NetSupport School with a personalized demonstration 
              tailored to your educational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ProductInterestForm productName="NetSupport School" productFeatures={["Real-time monitoring", "Screen sharing", "Assessment tools"]}>
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
                    title="NetSupport School Pricing"
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

export default NetSupportSchool;