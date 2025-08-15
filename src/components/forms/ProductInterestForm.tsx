import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactForm } from "./ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductInterestFormProps {
  children: React.ReactNode;
  productName: string;
  productFeatures: string[];
}

export const ProductInterestForm = ({ 
  children, 
  productName, 
  productFeatures 
}: ProductInterestFormProps) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures(prev => [...prev, feature]);
    } else {
      setSelectedFeatures(prev => prev.filter(f => f !== feature));
    }
  };

  const products = selectedFeatures.length > 0 
    ? [`${productName} - ${selectedFeatures.join(', ')}`]
    : [productName];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interested in {productName}?</CardTitle>
              <p className="text-sm text-muted-foreground">
                Select the features you're most interested in learning about:
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${index}`}
                    checked={selectedFeatures.includes(feature)}
                    onCheckedChange={(checked) => 
                      handleFeatureChange(feature, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={`feature-${index}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          <ContactForm
            title={`Request Information: ${productName}`}
            description="Fill out the form below and we'll send you detailed information about your selected features."
            inquiryType="product_interest"
            products={products}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};