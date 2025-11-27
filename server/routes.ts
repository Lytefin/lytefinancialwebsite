import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const errorMessage = fromError(validatedData.error).toString();
        return res.status(400).json({ message: errorMessage });
      }

      const inquiry = await storage.createContactInquiry(validatedData.data);
      
      // Send email notification
      if (process.env.RESEND_API_KEY) {
        try {
          await resend.emails.send({
            from: "Lyte Financial <noreply@lytefinancial.com.au>",
            to: "info@lytefinancial.com.au",
            subject: `New Contact Inquiry from ${inquiry.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${inquiry.name}</p>
              <p><strong>Email:</strong> ${inquiry.email}</p>
              <p><strong>Phone:</strong> ${inquiry.phone}</p>
              <p><strong>Message:</strong></p>
              <p>${inquiry.message || "No message provided"}</p>
              <hr>
              <p><small>Submitted on: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}</small></p>
            `,
          });
          console.log("Email notification sent successfully");
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      } else {
        console.log("RESEND_API_KEY not configured - email not sent");
      }

      // Log the inquiry
      console.log("New contact inquiry received:", {
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        message: inquiry.message,
        timestamp: inquiry.createdAt
      });

      res.status(201).json({ 
        message: "Thank you for your inquiry. We will be in touch shortly.",
        inquiry 
      });
    } catch (error) {
      console.error("Error processing contact inquiry:", error);
      res.status(500).json({ message: "Failed to submit inquiry. Please try again." });
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
