import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import classroomCloudImg from "@/assets/classroom-cloud-hero.png";
import netSupportDnaImg from "@/assets/netsupport-dna-hero.png";
import netSupportEducationImg from "@/assets/netsupport-education-hero.png";

const products = [
  {
    id: 1,
    name: "NetSupport School",
    category: "Classroom Management",
    description: "Tried and trusted by schools worldwide, teachers can use NetSupport School to monitor, control and collaborate with students in any number of ways, as well as gauge understanding and provide instant feedback.",
    image: netSupportEducationImg,
    link: "/products/netsupport-school"
  },
  {
    id: 2,
    name: "classroom.cloud",
    category: "Classroom Management, Safeguarding and IT Management (cloud)",
    description: "Our cloud-based 3-in-1 platform offers teachers and students essential tools for in-school and remote teaching and learning – with safeguarding and IT management tools included too!",
    image: classroomCloudImg,
    link: "/products/classroom-cloud"
  },
  {
    id: 3,
    name: "NetSupport DNA",
    category: "IT Management and Safeguarding",
    description: "Gives technicians a host of tools to track, monitor and manage your school's technology, as well as support staff and students as they use it – plus, there's a comprehensive eSafety toolkit.",
    image: netSupportDnaImg,
    link: "/products/netsupport-dna"
  },
  {
    id: 4,
    name: "NetSupport Manager",
    category: "On-premise Desktop Remote Control",
    description: "The most feature rich and customisable desktop remote control solution, built on a 36-year pedigree, allowing robust security and granular controls at enterprise level.",
    image: netSupportEducationImg,
    link: "/products/netsupport-manager"
  },
  {
    id: 5,
    name: "NetSupport Notify",
    category: "Alerting and Notification",
    description: "Communicate instantly with all your staff and students by delivering immediate or scheduled one-way alerts. Messages take screen focus, so they can't be hidden, ignored or saved for later!",
    image: classroomCloudImg,
    link: "/downloads"
  }
];

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-primary-foreground hover:bg-card/40 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-primary-foreground hover:bg-card/40 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Product Information Card */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <Card className="bg-card/80 backdrop-blur-md border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-2">
                  {currentProduct.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {currentProduct.name}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {currentProduct.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="group"
                    onClick={() => window.location.href = currentProduct.link}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = '/downloads'}
                  >
                    Free Trial
                  </Button>
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex lg:flex-col gap-2 lg:ml-4">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-3 lg:w-3 lg:h-12 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Counter */}
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 border border-border/30">
          <span className="text-primary-foreground text-sm font-medium">
            {currentSlide + 1} / {products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;