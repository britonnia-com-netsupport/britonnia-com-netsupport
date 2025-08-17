import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  message: string;
  inquiryType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, country, message, inquiryType }: ContactEmailRequest = await req.json();

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Britonnia Ltd <no-reply@britonnia.com>",
      to: [email],
      subject: "Thank you for contacting Britonnia Ltd",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3B82F6, #1E40AF); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank you for contacting us!</h1>
          </div>
          
          <div style="padding: 40px; background: #f8fafc;">
            <h2 style="color: #1E40AF; margin-bottom: 20px;">Dear ${name},</h2>
            
            <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
              We have received your inquiry about our NetSupport solutions. Our team will review your message and get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3B82F6;">
              <h3 style="color: #1E40AF; margin-top: 0;">Your Message Details:</h3>
              <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              ${country ? `<p><strong>Country:</strong> ${country}</p>` : ''}
              <p><strong>Message:</strong> ${message}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our NetSupport solutions for education and corporate environments.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://britonnia.com" style="background: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <h4 style="color: #1E40AF; margin-bottom: 10px;">Contact Information:</h4>
              <p style="color: #6B7280; margin: 5px 0;">📧 Email: info@britonnia.com</p>
              <p style="color: #6B7280; margin: 5px 0;">📞 Phone: +233 244 189 180</p>
              <p style="color: #6B7280; margin: 5px 0;">📍 Location: Accra, Ghana</p>
            </div>
          </div>
          
          <div style="background: #374151; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              © 2024 Britonnia Ltd. All rights reserved. | Your trusted NetSupport partner in Ghana and West Africa.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: "Britonnia Website <notifications@britonnia.com>",
      to: ["info@britonnia.com"],
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E40AF; color: white; padding: 20px;">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 20px; background: #f8fafc;">
            <h2 style="color: #1E40AF;">Contact Details:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${phone}</td>
              </tr>` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Company:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${company}</td>
              </tr>` : ''}
              ${country ? `
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Country:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${country}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff; font-weight: bold;">Inquiry Type:</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; background: #fff;">${inquiryType}</td>
              </tr>
            </table>
            
            <h3 style="color: #1E40AF; margin-top: 30px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3B82F6;">
              ${message}
            </div>
            
            <p style="margin-top: 20px; color: #6B7280; font-size: 14px;">
              Received at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { customerEmailResponse, companyEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully",
      customerEmail: customerEmailResponse,
      companyEmail: companyEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);