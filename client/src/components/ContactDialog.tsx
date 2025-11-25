import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema, lendingTypes, type InsertContactInquiry } from "@shared/schema";

interface ContactDialogProps {
  trigger: React.ReactNode;
}

export default function ContactDialog({ trigger }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      lendingType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your inquiry. We will be in touch shortly.",
      });
      form.reset();
      setOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            Contact Us
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        {...field} 
                        data-testid="input-first-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Smith" 
                        {...field} 
                        data-testid="input-last-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="0400 000 000" 
                      type="tel"
                      {...field} 
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      type="email"
                      {...field} 
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lendingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What type of lending is your enquiry related to?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-lending-type">
                        <SelectValue placeholder="Select a lending type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {lendingTypes.map((type) => (
                        <SelectItem key={type} value={type} data-testid={`option-${type.toLowerCase().replace(/\s+/g, '-')}`}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full"
              disabled={mutation.isPending}
              data-testid="button-submit-contact"
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
