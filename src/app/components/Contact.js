"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";
import emailjs from "@emailjs/browser";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        "service_l33qour",
        "template_2zbz4re",
        {
          name,
          email,
          message,
        },
        "P631PJiBXsZY5lxvB"
      );

      toast({
        title: "Success",
        description: "Your message was sent successfully.",
        variant: "default",
      });
      console.log("toast successfully triggered");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-12 md:py-20 bg-[#181818]/50 ${inter.className}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#e0bf5f] ${playfair.className}`}
        >
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#181818] border border-[#e0bf5f]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[#e0bf5f] flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#fff] mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="bg-[#181818] border-[#e0bf5f]/50 text-[#fff] placeholder-[#fff]/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#fff] mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#181818] border-[#e0bf5f]/50 text-[#fff] placeholder-[#fff]/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#fff] mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    className="bg-[#181818] border-[#e0bf5f]/50 text-[#fff] placeholder-[#fff]/50"
                    required
                  />
                </div>
                <Button
                  className="w-full bg-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f]/80"
                  variant="outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              <Toaster />
            </CardContent>
          </Card>
          <Card className="bg-[#181818] border border-[#e0bf5f]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-[#e0bf5f] flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 text-[#fff]">
                <Mail className="w-5 h-5 text-[#e0bf5f]" />
                <a
                  href="mailto:matusalakiflom@gmail.com"
                  className="hover:text-[#e0bf5f] transition-colors"
                >
                  matusalakiflom@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#fff]">
                <Phone className="w-5 h-5 text-[#e0bf5f]" />
                <a
                  href="tel:+358413102602"
                  className="hover:text-[#e0bf5f] transition-colors"
                >
                  +358 413102602
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#fff]">
                <Linkedin className="w-5 h-5 text-[#e0bf5f]" />
                <a
                  href="https://www.linkedin.com/in/matusala-gebrehiwot-b0435624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e0bf5f] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#fff]">
                <Github className="w-5 h-5 text-[#e0bf5f]" />
                <a
                  href="https://github.com/matusala3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e0bf5f] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
