import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import NetSupportSchool from "./pages/products/NetSupportSchool";
import ClassroomCloud from "./pages/products/ClassroomCloud";
import NetSupportDNA from "./pages/products/NetSupportDNA";
import NetSupportManager from "./pages/products/NetSupportManager";
import EducationSolutions from "./pages/external/EducationSolutions";
import CorporateSolutions from "./pages/external/CorporateSolutions";
import NotFound from "./pages/NotFound";
import ContactTest from "./pages/ContactTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products/netsupport-school" element={<NetSupportSchool />} />
          <Route path="/products/classroom-cloud" element={<ClassroomCloud />} />
          <Route path="/products/netsupport-dna" element={<NetSupportDNA />} />
          <Route path="/products/netsupport-manager" element={<NetSupportManager />} />
          <Route path="/external/education-solutions" element={<EducationSolutions />} />
          <Route path="/external/corporate-solutions" element={<CorporateSolutions />} />
          <Route path="/contact-test" element={<ContactTest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
