import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, Shield, Users, Monitor, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Downloads = () => {
  const products = [
    {
      id: "netsupport-school",
      name: "NetSupport School",
      category: "Classroom management",
      description: "A wealth of instruction, monitoring, control and assessment features to help maximise technology-enhanced teaching.",
      icon: <Users className="h-8 w-8 text-primary" />,
      downloadUrl: "https://www.netsupportsoftware.com/download-netsupport-school/",
      trialUrl: "https://www.netsupportsoftware.com/download-netsupport-school/"
    },
    {
      id: "classroom-cloud",
      name: "classroom.cloud",
      category: "Classroom management, safeguarding and IT management",
      description: "Our cloud-based 3-in-1 platform ensures flexible, safe and efficient learning environment.",
      icon: <Shield className="h-8 w-8 text-primary" />,
      downloadUrl: "https://portal.classroom.cloud/signin?autocreateaccount=true",
      trialUrl: "https://portal.classroom.cloud/signin?autocreateaccount=true"
    },
    {
      id: "netsupport-dna",
      name: "NetSupport DNA",
      category: "IT management (Education edition includes Safeguarding)",
      description: "Complete IT management solution for tracking hardware, software, and network assets across your organization.",
      icon: <Network className="h-8 w-8 text-primary" />,
      downloadUrl: "https://www.netsupportsoftware.com/download-netsupport-dna/",
      trialUrl: "https://www.netsupportsoftware.com/download-netsupport-dna/"
    },
    {
      id: "netsupport-manager",
      name: "NetSupport Manager",
      category: "Remote desktop and support",
      description: "Comprehensive remote desktop access and support solution for businesses and IT professionals.",
      icon: <Monitor className="h-8 w-8 text-primary" />,
      downloadUrl: "https://www.netsupportsoftware.com/download-netsupport-manager/",
      trialUrl: "https://www.netsupportsoftware.com/download-netsupport-manager/"
    }
  ];

  const handleDownload = (downloadUrl: string) => {
    window.open(downloadUrl, '_blank');
  };

  const handleTrial = (trialUrl: string) => {
    window.open(trialUrl, '_blank');
  };

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
              NetSupport FREE Trials
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-inter mb-8">
              Our 30-day trial is completely FREE. That means no credit card details are needed and 
              there is zero obligation at the end of the trial. You can enjoy all of the product's 
              features and use them to their fullest.
            </p>
            <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/30 p-6">
              <p className="text-primary-foreground/80 font-inter">
                <strong>Note:</strong> A valid email address is required to complete the download.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">
              Select Your Product
            </h2>
            <p className="text-muted-foreground text-lg font-inter">
              Choose from our comprehensive range of NetSupport solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-tech-primary rounded-lg">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-space-grotesk text-foreground mb-2">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium font-inter mb-2">
                        {product.category}
                      </p>
                      <p className="text-muted-foreground font-inter">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="hero" 
                      className="flex-1 group"
                      onClick={() => handleDownload(product.downloadUrl)}
                    >
                      <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Free Trial
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 group"
                      onClick={() => handleTrial(product.trialUrl)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">
                    Need Help Choosing?
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Our team is here to help you find the perfect NetSupport solution for your organization.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" onClick={() => window.location.href = '/contact'}>
                    Contact Our Experts
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
                    Explore Solutions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;