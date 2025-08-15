import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const EducationSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" size="sm" asChild className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <a href="https://www.netsupportsoftware.com/education-solutions/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Original
                  </a>
                </Button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                NetSupport Education Solutions
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Comprehensive educational technology solutions to enhance teaching and learning environments.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-foreground mb-6">NetSupport Education Solutions</h2>
                
                <p className="text-muted-foreground mb-6">
                  NetSupport offers comprehensive educational technology solutions designed to enhance teaching 
                  and learning environments. Our solutions are trusted by educational institutions worldwide 
                  to improve classroom management, student engagement, and administrative efficiency.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold text-foreground mb-4">NetSupport School</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete classroom management solution for modern educational environments.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/products/netsupport-school">Learn More</a>
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Classroom.cloud</h3>
                    <p className="text-muted-foreground mb-4">
                      Cloud-based classroom management platform accessible from anywhere.
                    </p>
                    <Button asChild variant="outline">
                      <a href="/products/classroom-cloud">Learn More</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Britonnia Ltd for Education Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to transform your educational environment? Contact our Ghana-based team for 
                    expert consultation and implementation support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <a href="/contact">Get Started</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://www.netsupportsoftware.com/education-solutions/" target="_blank" rel="noopener noreferrer">
                        Visit NetSupport Official Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationSolutions;