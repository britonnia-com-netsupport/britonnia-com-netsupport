import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Globe, 
  Users, 
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ghanaOffice from "@/assets/ghana-office.jpg";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      value: "36+",
      label: "Years of NetSupport Expertise",
      description: "Decades of experience in educational and corporate technology solutions"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "150+",
      label: "Countries Served",
      description: "Global reach with local expertise and support"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "15M+",
      label: "Active Users",
      description: "Trusted by millions of educators and professionals worldwide"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "24/7",
      label: "Local Support",
      description: "Round-the-clock assistance from our Ghana-based team"
    }
  ];

  const services = [
    "Software consultation and needs assessment",
    "Complete NetSupport solution implementation",
    "Training and onboarding for all user levels",
    "Ongoing technical support and maintenance",
    "Custom integration with existing systems",
    "Regular updates and feature enhancements"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Britonnia Ltd</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your trusted NetSupport Software partner in Ghana, delivering world-class 
            educational and corporate technology solutions across West Africa.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src={ghanaOffice}
              alt="Britonnia Ltd office in Ghana"
              className="rounded-2xl shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-tech-primary/20 rounded-2xl" />
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-hero p-4 rounded-xl shadow-glow animate-pulse-glow">
              <div className="text-center">
                <div className="text-xl font-bold text-primary-foreground">🇬🇭</div>
                <div className="text-xs text-primary-foreground/80">Ghana Based</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Leading Technology Consultancy in Ghana
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Britonnia Ltd is a premier technology consultancy firm based in Ghana, 
              specializing as an authorized reseller of NetSupport Software Ltd solutions. 
              We bridge the gap between cutting-edge educational and corporate technology 
              and the unique needs of West African organizations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With deep understanding of both local requirements and global technology 
              standards, we provide comprehensive consulting, implementation, and support 
              services that ensure our clients maximize their technology investments.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Services Include:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    Partner With Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="Partnership Inquiry"
                    description="Let's discuss how we can work together."
                    inquiryType="partnership"
                  />
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-tech-primary rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {achievement.label}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Contact our Ghana-based team today to discuss how NetSupport solutions 
                can transform your educational institution or corporate environment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground/90">Accra, Ghana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground/90">+233 244 189 180</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                  <span className="text-primary-foreground/90">info@britonnia.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="glass" size="lg" className="w-full">
                    Schedule Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="Schedule Consultation"
                    description="Book a free consultation with our NetSupport experts."
                    inquiryType="consultation"
                  />
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;