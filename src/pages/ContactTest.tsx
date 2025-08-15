import { useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactTest = () => {
  const [testResults, setTestResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const testDatabaseConnection = async () => {
    setLoading(true);
    try {
      // Test contact_inquiries table
      const { data: inquiries, error: inquiriesError } = await supabase
        .from('contact_inquiries')
        .select('*')
        .limit(1);

      // Test product_interests table
      const { data: interests, error: interestsError } = await supabase
        .from('product_interests')
        .select('*')
        .limit(1);

      const results = [
        {
          test: "Contact Inquiries Table",
          success: !inquiriesError,
          error: inquiriesError?.message,
          data: inquiries
        },
        {
          test: "Product Interests Table", 
          success: !interestsError,
          error: interestsError?.message,
          data: interests
        }
      ];

      setTestResults(results);
      
      const allSuccess = results.every(r => r.success);
      toast({
        title: allSuccess ? "Database Tests Passed" : "Database Tests Failed",
        description: allSuccess ? "All tables are accessible" : "Some tables have issues",
        variant: allSuccess ? "default" : "destructive"
      });

    } catch (error: any) {
      toast({
        title: "Test Failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact Form Testing
              </h1>
              <p className="text-muted-foreground">
                Test the contact form functionality and database connections
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <ContactForm
                  title="Test Contact Form"
                  description="Fill out this form to test the functionality"
                  inquiryType="test"
                  products={["NetSupport School", "Classroom.cloud"]}
                />
              </div>

              {/* Test Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Database Connection Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={testDatabaseConnection}
                      disabled={loading}
                      className="w-full mb-4"
                    >
                      {loading ? "Testing..." : "Run Database Tests"}
                    </Button>

                    {testResults.length > 0 && (
                      <div className="space-y-4">
                        {testResults.map((result, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{result.test}</h4>
                              <span className={`px-2 py-1 rounded text-xs ${
                                result.success 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {result.success ? 'PASS' : 'FAIL'}
                              </span>
                            </div>
                            {result.error && (
                              <p className="text-red-600 text-sm">{result.error}</p>
                            )}
                            {result.data && (
                              <p className="text-green-600 text-sm">
                                Table accessible ({result.data.length} records found)
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Test Instructions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>1. Click "Run Database Tests" to verify table access</p>
                    <p>2. Fill out the contact form and submit</p>
                    <p>3. Check for success/error messages</p>
                    <p>4. Verify data was saved in Supabase dashboard</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactTest;