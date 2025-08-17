import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-inter">
              Ready to transform your organization with NetSupport solutions? 
              Contact Britonnia Ltd today for expert consultation and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-space-grotesk">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-inter">
                  We're here to help you find the perfect NetSupport solution for your needs. 
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-tech-primary rounded-lg">
                        <Phone className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                          Phone
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          <a href="tel:+233244189180" className="hover:text-primary transition-colors">
                            +233 244 189 180
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-tech-primary rounded-lg">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                          Email
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          <a href="mailto:info@britonnia.com" className="hover:text-primary transition-colors">
                            info@britonnia.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-tech-primary rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                          Location
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          Accra, Ghana<br />
                          Serving West Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-tech-primary rounded-lg">
                        <Clock className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                          Business Hours
                        </h3>
                        <div className="text-muted-foreground space-y-1 font-inter">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
              <ContactForm
                title="Send us a Message"
                description="Fill out the form below and we'll get back to you as soon as possible."
                inquiryType="general_inquiry"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">
              Our Service Area
            </h2>
            <p className="text-muted-foreground text-lg font-inter">
              We proudly serve educational institutions and businesses across Ghana and West Africa
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <InteractiveMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;