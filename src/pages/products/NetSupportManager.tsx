import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Monitor, 
  FolderOpen, 
  MessageSquare, 
  Shield, 
  Settings, 
  Download,
  CheckCircle,
  ChevronRight,
  ArrowLeft,
  Users
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import netSupportManagerImage from "@/assets/netsupport-manager-interface.jpg";

const NetSupportManager = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Remote Desktop Control",
      description: "Complete remote control capabilities with high-performance screen sharing and remote access."
    },
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "File Transfer",
      description: "Secure and efficient file transfer between remote and local machines with drag-and-drop simplicity."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Real-time Chat",
      description: "Built-in chat functionality for seamless communication during remote support sessions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Controls",
      description: "Advanced security features including encryption, access controls, and audit logging."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-User Support",
      description: "Support multiple simultaneous connections and user sessions for enterprise environments."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "System Management",
      description: "Comprehensive system administration tools for managing remote computers efficiently."
    }
  ];

  const benefits = [
    "Reduce IT support costs by up to 60%",
    "Minimize system downtime with quick remote fixes",
    "Improve productivity with instant remote access",
    "Enhance security with encrypted connections",
    "Scale support operations efficiently",
    "Provide better user experience"
  ];

  const systemRequirements = [
    "Windows 11, 10, 8.1, 8, 7 (32-bit and 64-bit)",
    "Windows Server 2022, 2019, 2016, 2012 R2",
    "macOS 10.12 or later (viewing only)",
    "Minimum 1GB RAM (2GB recommended)",
    "100MB free disk space",
    "TCP/IP network protocol"
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
                  Remote Control Solution
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                NetSupport Manager
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                The world's leading desktop remote control solution, built on 36 years of 
                development experience to deliver reliable, secure, and feature-rich remote access.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="glass" size="lg" className="gap-2">
                      <Download className="h-5 w-5" />
                      Free Trial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ContactForm
                      title="Download NetSupport Manager Trial"
                      description="Start your free 30-day trial of NetSupport Manager."
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
                      title="NetSupport Manager Pricing"
                      description="Get detailed pricing information for NetSupport Manager."
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
                  Professional Remote Desktop Control
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  NetSupport Manager provides comprehensive remote control capabilities designed 
                  for IT professionals, help desk operators, and system administrators who need 
                  reliable, secure, and efficient remote access solutions.
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
                  src={netSupportManagerImage}
                  alt="NetSupport Manager Interface"
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
                Comprehensive Remote Control Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for professional remote desktop management and support
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
                    <CardTitle>NetSupport Manager Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      NetSupport Manager is a feature-rich remote control solution that has been 
                      trusted by IT professionals worldwide for over three decades. Built specifically 
                      for enterprise environments, it provides secure, reliable, and high-performance 
                      remote desktop access.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The solution offers comprehensive remote control capabilities including file transfer, 
                      chat functionality, system administration tools, and advanced security features. 
                      Its modular architecture allows for flexible deployment options to meet specific 
                      organizational requirements.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With support for multiple platforms and operating systems, NetSupport Manager 
                      provides a unified solution for all your remote access needs, whether for 
                      technical support, system administration, or collaborative work.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Remote Control</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Full desktop control</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Multi-monitor support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>High-quality screen sharing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Keyboard and mouse control</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Communication Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Real-time chat messaging</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Voice communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Screen annotation tools</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Session recording</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>File Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Secure file transfer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Drag and drop support</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>File synchronization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Remote file explorer</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Security & Administration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>256-bit AES encryption</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>User authentication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Access control policies</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Comprehensive audit logs</span>
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
                        <h4 className="font-semibold text-foreground mb-4">Control Requirements</h4>
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
                        <h4 className="font-semibold text-foreground mb-4">Target Requirements</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">Windows 11, 10, 8.1, 7</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">Windows Server editions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">Linux distributions</span>
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
                Experience the Power of Professional Remote Control
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join thousands of IT professionals who trust NetSupport Manager for 
                their remote access and support needs.
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
                      title="Schedule NetSupport Manager Demo"
                      description="Book a personalized demonstration of NetSupport Manager."
                      inquiryType="demo_request"
                    />
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="lg">
                      Start Free Trial
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ContactForm
                      title="NetSupport Manager Free Trial"
                      description="Start your 30-day free trial today."
                      inquiryType="trial_request"
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

export default NetSupportManager;