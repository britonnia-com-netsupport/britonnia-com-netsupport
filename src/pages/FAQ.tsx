import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  HelpCircle, 
  MessageSquare, 
  Phone,
  GraduationCap,
  Building2,
  Shield,
  Monitor,
  Cloud
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqCategories = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education Solutions",
      faqs: [
        {
          question: "What is NetSupport School and how does it help in classroom management?",
          answer: "NetSupport School is a comprehensive classroom management software that allows teachers to monitor, control, and collaborate with students across all platforms. It includes features like real-time screen monitoring, instant messaging, assessment tools, and presentation mode to enhance the learning experience."
        },
        {
          question: "How does classroom.cloud support remote learning?",
          answer: "classroom.cloud is a cloud-based platform that combines classroom management, safeguarding, and IT management for flexible learning environments. It provides remote learning support, safeguarding tools, IT asset management, and multi-platform support, making it ideal for hybrid and remote learning scenarios."
        },
        {
          question: "What safeguarding features are included in NetSupport DNA for schools?",
          answer: "NetSupport DNA includes a comprehensive eSafety toolkit with real-time monitoring, keyword detection, website filtering, application blocking, and instant alerts for inappropriate content or concerning behavior. It helps schools maintain a safe digital learning environment."
        },
        {
          question: "Can NetSupport solutions work with different devices and operating systems?",
          answer: "Yes, NetSupport solutions are designed to work across multiple platforms including Windows, Mac, iOS, Android, and Chromebook. This ensures compatibility with diverse technology environments in schools."
        }
      ]
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Corporate Solutions",
      faqs: [
        {
          question: "What makes NetSupport Manager different from other remote control software?",
          answer: "NetSupport Manager is built on 36 years of development experience and offers the most feature-rich and customizable desktop remote control solution. It provides robust security, granular controls at enterprise level, and works locally without firewall configuration or third-party services."
        },
        {
          question: "How can NetSupport DNA help with IT asset management in our organization?",
          answer: "NetSupport DNA provides comprehensive IT asset tracking, software inventory management, performance monitoring, and cost optimization tools. It helps organizations track all endpoints, monitor usage, identify security threats, and optimize IT investments."
        },
        {
          question: "What is 247connect and how does it differ from on-premise solutions?",
          answer: "247connect is a cloud-based remote desktop access solution that provides fast, reliable, and secure connections from anywhere. Unlike on-premise solutions, it's scalable, requires no infrastructure investment, and includes 24/7 support for reliable remote access needs."
        },
        {
          question: "Can NetSupport solutions be used for corporate training and onboarding?",
          answer: "Yes, NetSupport School (despite its name) is widely used by corporations for internal training and staff development. It provides collaborative instruction tools, assessment capabilities, and group working features perfect for training environments."
        }
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      faqs: [
        {
          question: "How secure are NetSupport solutions?",
          answer: "NetSupport solutions use industry-standard encryption, secure authentication protocols, and granular permission controls. All data transmission is encrypted, and the software includes comprehensive audit trails and security monitoring features."
        },
        {
          question: "Do NetSupport products comply with educational data protection regulations?",
          answer: "Yes, NetSupport solutions are designed to comply with major data protection regulations including GDPR, COPPA, and FERPA. They include privacy controls, data minimization features, and comprehensive audit capabilities."
        },
        {
          question: "Can we control what data is collected and how it's used?",
          answer: "Absolutely. NetSupport solutions provide granular control over data collection, storage, and usage. Administrators can configure what information is monitored, how long it's retained, and who has access to it."
        },
        {
          question: "What happens to our data if we stop using NetSupport products?",
          answer: "NetSupport provides clear data export options and data deletion procedures. Your organization maintains full control over your data, and we provide tools to export or securely delete information as needed."
        }
      ]
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Technical Support",
      faqs: [
        {
          question: "What kind of technical support does Britonnia Ltd provide?",
          answer: "Britonnia Ltd offers comprehensive technical support including installation assistance, configuration help, user training, and ongoing maintenance support. We provide local support in Ghana with deep knowledge of West African infrastructure and requirements."
        },
        {
          question: "How quickly can NetSupport solutions be deployed in our organization?",
          answer: "Deployment time varies based on organization size and complexity, but typically ranges from a few days for small setups to a few weeks for large enterprise deployments. We provide dedicated project management to ensure smooth implementation."
        },
        {
          question: "Do you provide training for our staff?",
          answer: "Yes, we offer comprehensive training programs including on-site training, online sessions, and self-paced learning materials. Training is customized to your specific use cases and user roles."
        },
        {
          question: "What if we need customization or integration with existing systems?",
          answer: "NetSupport solutions offer extensive customization options and APIs for integration. Britonnia Ltd can help assess your integration needs and work with NetSupport's development team for custom solutions when needed."
        }
      ]
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Pricing & Licensing",
      faqs: [
        {
          question: "How is NetSupport software licensed and priced?",
          answer: "NetSupport solutions use various licensing models including per-device, per-user, and site licenses. Pricing varies based on the product, number of users/devices, and specific features required. Contact us for a customized quote."
        },
        {
          question: "Are there educational discounts available?",
          answer: "Yes, NetSupport offers special educational pricing for schools, colleges, and universities. Educational institutions can access significant discounts and flexible licensing options designed for the education sector."
        },
        {
          question: "Can we try NetSupport products before purchasing?",
          answer: "Absolutely! NetSupport offers free trial versions of all products. We can also arrange personalized demonstrations to show how the solutions work in your specific environment."
        },
        {
          question: "What's included in the software license?",
          answer: "NetSupport licenses typically include the software, documentation, basic technical support, and software updates during the license period. Extended support and additional services are available as needed."
        }
      ]
    }
  ];

  const FAQSection = ({ category }: { category: any }) => (
    <Card className="mb-8 bg-gradient-card border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-tech-primary rounded-lg text-primary-foreground">
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground font-space-grotesk">
            {category.title}
          </h3>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {category.faqs.map((faq: any, index: number) => (
            <AccordionItem 
              key={index} 
              value={`${category.title}-${index}`}
              className="border border-border/30 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-inter hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed font-inter">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 font-space-grotesk">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-inter">
              Find answers to common questions about NetSupport solutions and our services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                  Browse FAQs
                </h3>
                <p className="text-muted-foreground text-sm font-inter">
                  Search through our comprehensive FAQ database
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                  Contact Support
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-inter">
                  Get personalized help from our expert team
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary">
                      Get Help
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ContactForm
                      title="Contact Support"
                      description="Describe your question or issue and we'll get back to you quickly."
                      inquiryType="support_request"
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                  Call Us
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-inter">
                  Speak directly with our Ghana-based team
                </p>
                <Button variant="outline" size="sm" asChild className="group-hover:border-primary group-hover:text-primary">
                  <a href="tel:+233244189180">+233 244 189 180</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Find Your Answers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Browse our FAQ sections organized by topic to quickly find the information you need.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <FAQSection key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-space-grotesk">
              Still Need Help?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-inter">
              Our experienced team is here to help you find the perfect NetSupport solution 
              for your specific needs. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="glass" size="lg">
                    Ask a Question
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <ContactForm
                    title="Ask a Question"
                    description="Send us your question and we'll provide a detailed answer."
                    inquiryType="question"
                  />
                </DialogContent>
              </Dialog>
              
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+233244189180">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;