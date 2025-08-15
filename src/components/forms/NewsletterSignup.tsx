import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup = ({ className = "" }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([{
          email: email,
          full_name: "Newsletter Subscriber",
          message: "Newsletter subscription request",
          inquiry_type: "newsletter",
          status: 'new'
        }]);

      if (error) throw error;

      toast({
        title: "Subscribed!",
        description: "You'll receive our latest updates and insights.",
      });

      setEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" variant="glass" size="sm" disabled={loading}>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Mail className="h-4 w-4" />
        )}
      </Button>
    </form>
  );
};