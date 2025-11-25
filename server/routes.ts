import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

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
      
      // Log the inquiry for now - email integration can be added later
      console.log("New contact inquiry received:", {
        name: `${inquiry.firstName} ${inquiry.lastName}`,
        email: inquiry.email,
        phone: inquiry.phone,
        lendingType: inquiry.lendingType,
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
