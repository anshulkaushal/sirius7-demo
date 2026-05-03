import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ParticleField from "@/components/ParticleField";
import heroAi from "@/assets/hero-ai.jpg";
import { Button } from "@/components/ui/button";
import aiItsmLogo from "@/assets/ai-itsm-logo.png";
import aiFinopsLogo from "@/assets/ai-finops-logo.png";
import aiVisibilityLogo from "@/assets/ai-visibility-logo.png";
import mlLogo from "@/assets/ml-logo.png";
import automationLogo from "@/assets/automation-logo.png";
import orchestrationLogo from "@/assets/orchestration-logo.png";

const aiProducts = [
  {
    logo: aiItsmLogo,
    title: "Agentic AI in ITSM",
    desc: "Transform IT service management with intelligent automation and self-healing systems. Our AI agents autonomously resolve incidents, manage change requests, and optimize service delivery workflows.",
    features: ["Autonomous incident resolution", "Self-healing infrastructure", "Intelligent ticket routing", "Predictive escalation"],
  },
  {
    logo: aiFinopsLogo,
    title: "AI for FinOps",
    desc: "Optimize cloud spend and drive business value through data-driven insights. Leverage machine learning to forecast costs, detect anomalies, and recommend right-sizing opportunities.",
    features: ["Cost anomaly detection", "Resource right-sizing", "Budget forecasting", "Waste identification"],
  },
  {
    logo: aiVisibilityLogo,
    title: "AI for Enterprise Visibility",
    desc: "Gain real-time insights across your entire IT ecosystem with intelligent monitoring. Correlate events, predict outages, and maintain full observability across hybrid environments.",
    features: ["Predictive alerting", "Root cause analysis", "Cross-platform correlation", "Real-time dashboards"],
  },
];

const capabilities = [
  { logo: mlLogo, title: "Machine Learning", desc: "Custom ML models tailored to your enterprise data and business objectives." },
  { logo: automationLogo, title: "Intelligent Automation", desc: "End-to-end process automation powered by AI decision-making." },
  { logo: orchestrationLogo, title: "AI Orchestration", desc: "Seamless integration of AI agents across your technology stack." },
];

const AIProducts = () => (
  <Layout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <img src={heroAi} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
      <ParticleField count={30} />
      <div className="container max-w-4xl relative z-10">
        <div className="mb-6"><BackButton /></div>
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Agentic AI & <span className="text-gradient">Intelligent Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Pioneering the next wave of enterprise intelligence. We build AI-powered solutions that transform how businesses operate, decide, and grow.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* AI Products */}
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our AI <span className="text-gradient">Solutions</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Enterprise-grade AI products designed to deliver measurable outcomes.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiProducts.map((product, i) => (
            <AnimatedSection key={product.title} delay={i * 0.1}>
              <div className="service-tile-neo p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <img src={product.logo} alt={product.title} className="w-10 h-10 object-contain" loading="lazy" width={40} height={40} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{product.desc}</p>
                <ul className="mt-auto space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-padding section-ghost">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Core <span className="text-gradient">Capabilities</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="service-tile-neo p-6 text-center h-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <img src={c.logo} alt={c.title} className="w-9 h-9 object-contain" loading="lazy" width={36} height={36} />
                </div>
                <h3 className="font-display font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden section-dark-adaptive">
      <ParticleField count={20} />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ready to Harness <span className="text-gradient">AI</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Let's explore how AI can transform your enterprise operations.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="mt-8 btn-sweep animate-glow-pulse">Talk to an Expert</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default AIProducts;
