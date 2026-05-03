import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import ServiceHeroCarousel from "@/components/ServiceHeroCarousel";
import ParticleField from "@/components/ParticleField";
import {
  Shield, Target, Globe, Handshake,
  Globe2, Clock, Zap, PiggyBank,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import dataBILogo from "@/assets/data-bi-logo.png";
import salesforceLogo from "@/assets/salesforce-logo.png";
import devopsLogo from "@/assets/devops-logo.svg";
import sapLogo from "@/assets/sap-logo.png";
import oracleLogo from "@/assets/oracle-logo.png";
import cloudLogo from "@/assets/cloud-logo.png";

const services = [
  { iconImg: oracleLogo, title: "Oracle Consulting", desc: "End-to-end Oracle implementation, migration, and managed services.", path: "/services/oracle" },
  { iconImg: cloudLogo, title: "Cloud Operations", desc: "Multi-cloud expertise across AWS, Azure, and GCP environments.", path: "/services/cloud" },
  { iconImg: sapLogo, title: "SAP & SuccessFactors", desc: "SAP transformation and SuccessFactors HCM implementation.", path: "/services/sap" },
  { iconImg: devopsLogo, title: "DevOps & Platform Engineering", desc: "CI/CD pipelines, infrastructure as code, and platform reliability.", path: "/services/devops" },
  { iconImg: salesforceLogo, title: "Salesforce Consulting", desc: "Salesforce implementation, customization, and integration services.", path: "/services/salesforce" },
  { iconImg: dataBILogo, title: "Data Science & BI", desc: "Data-driven insights through analytics and business intelligence.", path: "/services/data" },
];
const whySirius = [
  { icon: Shield, title: "Specialist-Driven, Not Body-Shopped", desc: "Every engagement is led by domain specialists, not generalists." },
  { icon: Target, title: "Solution-Focused Architecture & Design", desc: "We architect for outcomes, not just outputs." },
  { icon: Globe, title: "Local Presence with Global Reach", desc: "Onshore leadership backed by world-class offshore teams." },
  { icon: Handshake, title: "Transparent Engagements", desc: "Clear scoping, honest timelines, and no hidden costs." },
];

const globalDelivery = [
  { icon: Globe2, title: "Global Delivery & Offshore Teamwork", desc: "Seamless collaboration across time zones." },
  { icon: Clock, title: "24/7 Support & Availability", desc: "Round-the-clock operational coverage." },
  { icon: Zap, title: "Agile & DevOps Practices", desc: "Iterative delivery with continuous improvement." },
  { icon: PiggyBank, title: "Cost-Effective Solutions", desc: "Enterprise quality at competitive rates." },
];

const Index = () => (
  <Layout>
    <ServiceHeroCarousel />

    {/* Services */}
    <section className="section-padding relative">
      <div className="grid-pattern absolute inset-0" />
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our <span className="text-gradient">Services</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Comprehensive technology consulting across the enterprise stack.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <Link to={s.path}>
                <div className="service-tile-neo p-8 md:p-9 h-full group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_16px_hsl(217_91%_60%/0.2)] transition-all duration-300">
                    {s.iconImg ? (
                      <img src={s.iconImg} alt={s.title} className="w-7 h-7 object-contain group-hover:drop-shadow-[0_0_6px_hsl(217,91%,60%,0.4)] transition-all duration-300" />
                    ) : null}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>


    {/* Why Sirius7 */}
    <section className="section-padding section-ghost">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why <span className="text-gradient">Sirius7</span>?</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whySirius.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.08}>
              <div className="flex gap-5 p-6 service-tile-neo">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <w.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Global Delivery */}
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Global Delivery <span className="text-gradient">Excellence</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalDelivery.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 0.08}>
              <div className="service-tile-neo p-6 text-center h-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <g.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="section-padding section-ghost">
      <div className="container max-w-3xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Value We <span className="text-gradient">Deliver</span></h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="space-y-5">
            {[
              "Cost-effective solutions without compromising quality",
              "Scalable engagement models: staff augmentation, project-based, managed services",
              "Strong blend of onshore and offshore delivery",
            ].map((v) => (
              <div key={v} className="flex gap-3 items-start p-4 service-tile-neo">
                <CheckCircle2 size={20} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA — theme-adaptive */}
    <section className="section-padding relative overflow-hidden section-dark-adaptive">
      <ParticleField count={30} />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ready to Transform Your <span className="text-gradient">IT Landscape</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Partner with Sirius7 to build resilient, scalable technology solutions.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="mt-8 btn-sweep animate-glow-pulse">Contact Us</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
