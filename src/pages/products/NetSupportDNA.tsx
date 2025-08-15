import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Monitor, 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  Download,
  CheckCircle,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import netSupportDNAImage from "@/assets/netsupport-dna-hero.png";

const NetSupportDNA = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Comprehensive monitoring of your IT infrastructure with instant alerts and notifications."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Management",
      description: "Advanced security features to protect your network and identify potential threats."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Usage Reporting",
      description: "Detailed reports and analytics to understand usage patterns and optimize performance."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Asset Tracking",
      description: "Complete inventory management of all hardware and software assets across your network."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Alert System",
      description: "Intelligent alerting system that notifies you of critical issues before they become problems."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Software Distribution",
      description: "Centralized software deployment and management across all networked devices."
    }
  ];

  const benefits = [
    "Reduce IT support costs by up to 40%",
    "Improve network security and compliance",
    "Automate routine IT management tasks",
    "Gain complete visibility of your IT estate",
    "Ensure software licensing compliance",
    "Minimize network downtime"
  ];

  const systemRequirements = [
    "Windows 11, 10, 8.1, 8, 7 (32-bit and 64-bit)",
    "Windows Server 2022, 2019, 2016, 2012 R2",
    "Minimum 2GB RAM (4GB recommended)",
    "500MB free disk space",
    "TCP/IP network protocol",
    "Administrative privileges for installation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </a>
                </Button>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  IT Management Solution
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                NetSupport DNA
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Comprehensive IT management and eSafety toolkit for monitoring, managing, 
                and protecting your technology environment with powerful real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="glass" size="lg" className="gap-2">
                      <Download className="h-5 w-5" />
                      Request Trial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ContactForm
                      title="Request NetSupport DNA Trial"
                      description="Start your free trial of NetSupport DNA today."
                      inquiryType="trial_request"
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
                      title="NetSupport DNA Pricing"
                      description="Get detailed pricing information for NetSupport DNA."
                      inquiryType="quote_request"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Complete IT Management & eSafety Solution
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  NetSupport DNA provides comprehensive IT asset management, real-time monitoring, 
                  and eSafety tools to help organizations maintain control over their technology 
                  infrastructure while ensuring user safety and compliance.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={netSupportDNAImage}
                  alt="NetSupport DNA Dashboard Interface"
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-tech-primary/10 rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Powerful Features for IT Management
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to monitor, manage, and secure your IT infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-tech-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>NetSupport DNA Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      NetSupport DNA is a comprehensive IT asset management solution that provides 
                      real-time monitoring, detailed reporting, and powerful management tools for 
                      educational institutions and corporate environments.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With its intuitive web-based console, administrators can monitor network activity, 
                      track software and hardware assets, manage licenses, and ensure eSafety compliance 
                      across their entire technology infrastructure.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The solution includes powerful reporting capabilities, automated alerts, and 
                      comprehensive audit trails to help organizations maintain security, compliance, 
                      and optimal performance.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Asset Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Complete hardware inventory</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Software license tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Automated discovery</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Asset lifecycle management</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Monitoring & Reporting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Real-time system monitoring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Performance analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Custom reporting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Historical data analysis</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>System Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Server Requirements</h4>
                        <ul className="space-y-2">
                          {systemRequirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Client Requirements</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">Windows 11, 10, 8.1, 7</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">macOS 10.14 or later</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">ChromeOS 88 or later</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">Network connectivity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your IT Management?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Contact Britonnia Ltd today to learn how NetSupport DNA can streamline 
                your IT operations and improve security across your organization.
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
                      title="Schedule NetSupport DNA Demo"
                      description="Book a personalized demonstration of NetSupport DNA."
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
                      title="NetSupport DNA Pricing"
                      description="Get detailed pricing information for NetSupport DNA."
                      inquiryType="quote_request"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NetSupportDNA;