import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleField from "@/components/ParticleField";
import BackButton from "@/components/BackButton";

interface ServicePageProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  iconImg?: string;
  title: string;
  subtitle: string;
  overview: string;
  offerings: string[];
  benefits: string[];
}

const ServicePageTemplate = ({ icon: Icon, iconImg, title, subtitle, overview, offerings, benefits }: ServicePageProps) => (
  <>
    {/* Hero — theme-adaptive */}
    <section className="relative section-padding overflow-hidden section-dark-adaptive">
      <ParticleField count={35} />
      <div className="container max-w-4xl relative z-10">
        <div className="mb-6">
          <BackButton />
        </div>
        <AnimatedSection>
          <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 animate-glow-pulse">
            {Icon ? (
              <Icon size={32} className="text-primary" />
            ) : iconImg ? (
              <img src={iconImg} alt={title} className="w-9 h-9 object-contain" />
            ) : null}
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{subtitle}</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{overview}</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Key Offerings */}
    <section className="section-padding section-ghost">
      <div className="container max-w-4xl">
        <AnimatedSection className="mb-10">
          <h2 className="font-display text-3xl font-bold">Key <span className="text-gradient">Offerings</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offerings.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="service-tile-neo p-5 flex items-start gap-4">
                <CheckCircle2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="container max-w-4xl">
        <AnimatedSection className="mb-10">
          <h2 className="font-display text-3xl font-bold">Why Choose <span className="text-gradient">Sirius7</span></h2>
        </AnimatedSection>
        <div className="space-y-4">
          {benefits.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 p-5 service-tile-neo">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — theme-adaptive */}
    <section className="section-padding relative overflow-hidden section-dark-adaptive">
      <ParticleField count={20} />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how our {title.toLowerCase()} expertise can transform your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="btn-sweep animate-glow-pulse">Contact Us</Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-secondary" size="lg">View All Services</Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default ServicePageTemplate;
