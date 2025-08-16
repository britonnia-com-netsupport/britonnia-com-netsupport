import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Headphones, Play, Video, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const resources = [
    // White Papers
    {
      id: 1,
      type: "whitepaper",
      title: "Digital Transformation in West African Education",
      description: "Comprehensive guide on implementing technology solutions in educational institutions across Ghana and West Africa.",
      downloadUrl: "/downloads/digital-transformation-education.pdf",
      icon: <FileText className="h-6 w-6" />,
      category: "Education",
      language: "en"
    },
    {
      id: 2,
      type: "whitepaper",
      title: "Remote Work Security Best Practices",
      description: "Essential security guidelines for organizations implementing remote work solutions with NetSupport Manager.",
      downloadUrl: "/downloads/remote-work-security.pdf",
      icon: <FileText className="h-6 w-6" />,
      category: "Corporate",
      language: "en"
    },
    {
      id: 3,
      type: "whitepaper",
      title: "Classroom Management in the Digital Age",
      description: "Strategic approaches to managing modern classrooms with NetSupport School and classroom.cloud.",
      downloadUrl: "/downloads/classroom-management-digital.pdf",
      icon: <FileText className="h-6 w-6" />,
      category: "Education",
      language: "en"
    },
    
    // Podcasts
    {
      id: 4,
      type: "podcast",
      title: "EdTech Innovation in Ghana",
      description: "Discussion with local educators about implementing NetSupport solutions in Ghanaian schools.",
      downloadUrl: "/downloads/edtech-innovation-ghana.mp3",
      icon: <Headphones className="h-6 w-6" />,
      category: "Education",
      language: "en",
      duration: "32 min"
    },
    {
      id: 5,
      type: "podcast",
      title: "IT Management Best Practices",
      description: "Expert insights on optimizing IT infrastructure with NetSupport DNA and management tools.",
      downloadUrl: "/downloads/it-management-best-practices.mp3",
      icon: <Headphones className="h-6 w-6" />,
      category: "Corporate",
      language: "en",
      duration: "28 min"
    },
    
    // Videos
    {
      id: 6,
      type: "video",
      title: "NetSupport School Demo",
      description: "Complete walkthrough of NetSupport School features and classroom management capabilities.",
      videoUrl: "https://player.vimeo.com/video/123456789",
      icon: <Video className="h-6 w-6" />,
      category: "Education",
      language: "en",
      duration: "15 min"
    },
    {
      id: 7,
      type: "video",
      title: "Classroom.cloud Setup Guide",
      description: "Step-by-step tutorial for setting up and configuring classroom.cloud for your institution.",
      videoUrl: "https://player.vimeo.com/video/123456790",
      icon: <Video className="h-6 w-6" />,
      category: "Education",
      language: "en",
      duration: "22 min"
    },
    {
      id: 8,
      type: "video",
      title: "NetSupport Manager Enterprise",
      description: "Advanced features and deployment strategies for large corporate environments.",
      videoUrl: "https://player.vimeo.com/video/123456791",
      icon: <Video className="h-6 w-6" />,
      category: "Corporate",
      language: "en",
      duration: "18 min"
    },
    
    // Articles
    {
      id: 9,
      type: "article",
      title: "Implementing eSafety in African Schools",
      description: "Guide to protecting students online while enabling digital learning in African educational contexts.",
      downloadUrl: "/downloads/esafety-african-schools.pdf",
      icon: <FileText className="h-6 w-6" />,
      category: "Education",
      language: "en"
    },
    {
      id: 10,
      type: "article",
      title: "Cost-Effective IT Solutions for SMEs",
      description: "How small and medium enterprises can leverage NetSupport solutions for growth and efficiency.",
      downloadUrl: "/downloads/cost-effective-it-smes.pdf",
      icon: <FileText className="h-6 w-6" />,
      category: "Corporate",
      language: "en"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || resource.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (url: string, title: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideoPlay = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resources & Downloads
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access our collection of white papers, podcasts, videos, and articles 
                about NetSupport solutions and educational technology.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Resources</SelectItem>
                  <SelectItem value="whitepaper">White Papers</SelectItem>
                  <SelectItem value="podcast">Podcasts</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="article">Articles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {resource.icon}
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {resource.type}
                          </div>
                          <CardTitle className="text-lg leading-tight">
                            {resource.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      {resource.duration && (
                        <span className="text-xs text-muted-foreground">
                          {resource.duration}
                        </span>
                      )}
                    </div>

                    {resource.type === "video" ? (
                      <Button
                        onClick={() => handleVideoPlay(resource.videoUrl!)}
                        className="w-full"
                        variant="outline"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleDownload(resource.downloadUrl!, resource.title)}
                        className="w-full"
                        variant="outline"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download {resource.type === "podcast" ? "Audio" : "PDF"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No resources found matching your search criteria.
                </p>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Need More Information?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact our team for custom resources, 
                personalized consultations, or specific product information.
              </p>
              <Button variant="glass" size="lg" asChild>
                <a href="/contact">Contact Our Experts</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;