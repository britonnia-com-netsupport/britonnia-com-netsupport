import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  inquiryType?: string;
  products?: string[];
}

export const ContactForm = ({ 
  title = "Get in Touch", 
  description = "Let us help you find the perfect NetSupport solution.",
  inquiryType = "general",
  products = []
}: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    country: "Ghana",
    message: "",
    inquiryType: inquiryType
  });

  const { toast } = useToast();

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: "Validation Error", 
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    console.log("Starting form submission...", formData);

    try {
      // Insert contact inquiry with error handling
      const inquiryData = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        company_name: formData.companyName.trim() || null,
        country: formData.country,
        message: formData.message.trim(),
        inquiry_type: formData.inquiryType,
        status: 'new',
        created_at: new Date().toISOString()
      };
      
      console.log("Inserting inquiry data:", inquiryData);
      
      const { data: inquiry, error: inquiryError } = await supabase
        .from('contact_inquiries')
        .insert([inquiryData])
        .select()
        .single();

      if (inquiryError) {
        console.error("Inquiry insert error:", inquiryError);
        throw new Error(`Failed to save inquiry: ${inquiryError.message}`);
      }

      console.log("Inquiry saved successfully:", inquiry);

      // Insert product interests if any
      if (products.length > 0 && inquiry) {
        const productInterests = products.map(product => ({
          inquiry_id: inquiry.id,
          product_name: product.trim(),
          created_at: new Date().toISOString()
        }));

        console.log("Inserting product interests:", productInterests);

        const { error: productError } = await supabase
          .from('product_interests')
          .insert(productInterests);

        if (productError) {
          console.error("Product interests error:", productError);
          // Don't throw here, just log - inquiry was saved successfully
        }
      }

      // Success
      setSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          country: "Ghana",
          message: "",
          inquiryType: inquiryType
        });
        setSubmitted(false);
      }, 3000);

    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-space-grotesk">{title}</CardTitle>
        {description && (
          <p className="text-muted-foreground text-center font-inter">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="font-inter">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="Enter your full name"
                required
                className="font-inter"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-inter">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                required
                className="font-inter"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-inter">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your phone number"
                className="font-inter"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="font-inter">Company/Organization</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                placeholder="Enter company name"
                className="font-inter"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="font-inter">Country</Label>
            <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
              <SelectTrigger className="font-inter">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ghana">Ghana</SelectItem>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="Côte d'Ivoire">Côte d'Ivoire</SelectItem>
                <SelectItem value="Burkina Faso">Burkina Faso</SelectItem>
                <SelectItem value="Mali">Mali</SelectItem>
                <SelectItem value="Senegal">Senegal</SelectItem>
                <SelectItem value="Togo">Togo</SelectItem>
                <SelectItem value="Benin">Benin</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-inter">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about your requirements, goals, or any questions you have about NetSupport solutions..."
              rows={5}
              required
              className="font-inter resize-none"
            />
          </div>

          {products.length > 0 && (
            <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
              <Label className="text-sm font-medium font-inter">Products of Interest:</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {products.map((product, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-inter">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 font-inter" 
            disabled={loading}
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground font-inter">
            Or contact us directly at{" "}
            <a href="mailto:info@britonnia.com" className="text-primary hover:underline">
              info@britonnia.com
            </a>{" "}
            or{" "}
            <a href="tel:+233244189180" className="text-primary hover:underline">
              +233 244 189 180
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};