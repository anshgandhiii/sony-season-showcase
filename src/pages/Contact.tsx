import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Godbunder Road, Thane, Maharashtra, India",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 XXXX XXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@sonyspices.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We will get back to you shortly.");

    // Reset form after animation
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-warm overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariants}
              custom={0}
              className="text-primary text-sm uppercase tracking-widest mb-4"
            >
              Contact Us
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              custom={1}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Let&apos;s Start a Conversation
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              custom={2}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Have questions about our products or interested in partnering with us? We would love to hear from you. Reach out and our team will get back to you promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUpVariants}
                custom={0}
                className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2"
              >
                Send Us a Message
              </motion.h2>
              <motion.p
                variants={fadeUpVariants}
                custom={1}
                className="text-muted-foreground mb-8"
              >
                Fill out the form below and we will respond within 24 hours.
              </motion.p>

              <motion.form
                variants={fadeUpVariants}
                custom={2}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXX XXXXXX"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, the products you're interested in, or any questions you have..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeUpVariants}
                custom={0}
                className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                variants={fadeUpVariants}
                custom={1}
                className="text-muted-foreground mb-8"
              >
                Visit our facility or reach out through any of the channels below.
              </motion.p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={fadeUpVariants}
                    custom={index + 2}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50 shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                variants={fadeUpVariants}
                custom={6}
                className="rounded-xl overflow-hidden bg-muted h-[300px] flex items-center justify-center border border-border/50"
              >
                <div className="text-center px-6">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Sony Seasonings & Spices</span>
                    <br />
                    Godbunder Road, Thane
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Looking for Bulk Orders?
          </h3>
          <p className="text-secondary-foreground/80 max-w-xl mx-auto">
            For bulk orders and industrial supply inquiries, our dedicated B2B team is ready to assist you with customized solutions.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
