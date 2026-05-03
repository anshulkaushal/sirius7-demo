import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleField from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import heroContact from "@/assets/hero-contact.jpg";

import countryNZ from "@/assets/country-nz.jpg";
import countryAU from "@/assets/country-au.jpg";
import countryUS from "@/assets/country-us.jpg";
import countryAE from "@/assets/country-ae.jpg";
import countryIN from "@/assets/country-in.jpg";

const regions = [
  { name: "New Zealand", code: "NZ", image: countryNZ },
  { name: "Australia", code: "AU", image: countryAU },
  { name: "United States", code: "US", image: countryUS },
  { name: "Dubai, UAE", code: "AE", image: countryAE },
  { name: "India", code: "IN", image: countryIN },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our team will get back to you shortly.");
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        <img src={heroContact} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
        <ParticleField count={25} />

        <div className="container relative z-10 section-padding text-center">
          <AnimatedSection>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-white">
              Let's Build Something{" "}
              <span className="text-gradient">Exceptional</span> Together
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Connect with Sirius7 to discuss consulting, AI-driven
              transformation, and enterprise technology solutions.
            </p>
          </AnimatedSection>

          {/* Decorative network nodes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ── Contact Form Section ── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Left Info */}
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
                Let's Talk
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Start Your{" "}
                <span className="text-gradient">Transformation</span> Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tell us about your requirements and our team will get back to
                you with a tailored strategy for your enterprise technology
                needs.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "contact@sirius7.com",
                    href: "mailto:contact@sirius7.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "0800SIRIUS7",
                  },
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    value: "New Zealand",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium text-sm">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Form */}
            <AnimatedSection delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="service-tile-neo p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Company Name
                    </label>
                    <Input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Your Company"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Service Interest
                    </label>
                    <Select
                      value={form.service}
                      onValueChange={(val) =>
                        setForm({ ...form, service: val })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oracle">Oracle</SelectItem>
                        <SelectItem value="cloud">Cloud</SelectItem>
                        <SelectItem value="sap">SAP</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                        <SelectItem value="salesforce">Salesforce</SelectItem>
                        <SelectItem value="ai">AI & Automation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-sweep font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Send Message
                  <ArrowRight size={18} />
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Global Reach Section ── */}
      <section className="section-padding section-ghost">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
                Worldwide Coverage
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Global Reach</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {regions.map((region, i) => (
              <AnimatedSection key={region.name} delay={i * 0.08}>
                <div className="relative rounded-lg overflow-hidden h-40 group">
                  <img
                    src={region.image}
                    alt={region.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.5] group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,4%/0.8)] to-transparent" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                    <span className="text-2xl font-bold text-white mb-1">{region.code}</span>
                    <p className="font-medium text-sm text-white/80">{region.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
