import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Download, 
  Video, 
  FileText, 
  ExternalLink,
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
  Headphones,
  Award,
  Lightbulb,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const resourceCategories = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Product Guides & Documentation",
      description: "Comprehensive guides and documentation for all NetSupport products",
      resources: [
        { name: "NetSupport School User Guide", type: "PDF", url: "#" },
        { name: "classroom.cloud Setup Guide", type: "PDF", url: "#" },
        { name: "NetSupport DNA Administration Manual", type: "PDF", url: "#" },
        { name: "NetSupport Manager Quick Start", type: "PDF", url: "#" }
      ]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Training Videos & Webinars",
      description: "Video tutorials and webinar recordings to help you get the most from NetSupport",
      resources: [
        { name: "Classroom Management Best Practices", type: "Video", url: "#" },
        { name: "Setting up Remote Learning", type: "Webinar", url: "#" },
        { name: "IT Asset Management Strategies", type: "Video", url: "#" },
        { name: "Safeguarding in Digital Learning", type: "Webinar", url: "#" }
      ]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Podcasts & Articles",
      description: "Educational content and industry insights from NetSupport experts",
      resources: [
        { name: "EdTech Podcast Series", type: "Podcast", url: "#" },
        { name: "Future of Remote Work", type: "Article", url: "#" },
        { name: "Digital Transformation in Education", type: "Article", url: "#" },
        { name: "IT Security Best Practices", type: "Podcast", url: "#" }
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Case Studies & Success Stories",
      description: "Real-world examples of NetSupport implementations and their impact",
      resources: [
        { name: "University of Ghana Implementation", type: "Case Study", url: "#" },
        { name: "Corporate Training Success Story", type: "Case Study", url: "#" },
        { name: "Remote Learning During COVID-19", type: "Case Study", url: "#" },
        { name: "IT Cost Reduction Success", type: "Case Study", url: "#" }
      ]
    }
  ];

  const learningPaths = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Educators",
      description: "Resources specifically designed for teachers and educational administrators",
      topics: ["Classroom Management", "Student Engagement", "Digital Safeguarding", "Assessment Tools"]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "IT Professionals",
      description: "Technical resources for IT administrators and system managers",
      topics: ["Asset Management", "Network Security", "Remote Support", "System Monitoring"]
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Business Leaders",
      description: "Strategic insights for decision makers and business owners",
      topics: ["Digital Transformation", "ROI Optimization", "Cost Management", "Compliance"]
    }
  ];

  const ResourceCard = ({ category }: { category: any }) => (
    <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50 h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-tech-primary rounded-lg text-primary-foreground group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-space-grotesk">
            {category.title}
          </h3>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed font-inter flex-grow">
          {category.description}
        </p>
        <div className="space-y-3">
          {category.resources.map((resource: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-foreground font-inter">{resource.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {resource.type}
                </span>
                <Button variant="ghost" size="sm" className="p-1 h-auto">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
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
              Learning Resources
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed font-inter">
              Explore our comprehensive collection of guides, tutorials, and educational content 
              to maximize your NetSupport experience.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Select the path that best matches your role and find targeted resources to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {learningPaths.map((path, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-tech-primary rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-foreground">{path.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-space-grotesk">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-inter">
                    {path.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {path.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
              Resource Library
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Access our complete collection of educational materials, documentation, and support resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <ResourceCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">
                NetSupport Official Resources
              </h2>
              <p className="text-muted-foreground text-lg font-inter">
                Access the complete NetSupport knowledge base and official documentation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                    Learning Hub
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-inter">
                    Access exclusive customer resources and professional development content
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                    Visit Learning Hub
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                    Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-inter">
                    Complete technical documentation and user manuals for all products
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                    View Documentation
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space-grotesk">
                    Video Tutorials
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-inter">
                    Step-by-step video guides and product demonstrations
                  </p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary">
                    Watch Videos
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;