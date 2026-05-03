import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ParticleField from "@/components/ParticleField";
import heroDelivery from "@/assets/hero-delivery.jpg";
import vpnLogo from "@/assets/vpn-logo.png";
import rbacLogo from "@/assets/rbac-logo.png";
import encryptionLogo from "@/assets/encryption-logo.png";
import deliveryCenterLogo from "@/assets/delivery-center-logo.png";
import collaborationLogo from "@/assets/collaboration-logo.png";
import agileLogo from "@/assets/agile-logo.png";
import hybridLogo from "@/assets/hybrid-logo.png";

const securityFeatures = [
  { logo: vpnLogo, title: "Secure VPN Access", desc: "All offshore employees connect through enterprise-grade VPN tunnels." },
  { logo: rbacLogo, title: "Role-Based Access Control", desc: "Granular RBAC ensures data access is limited to authorized personnel." },
  { logo: encryptionLogo, title: "End-to-End Encryption", desc: "All data in transit and at rest is encrypted to industry standards." },
];

const offshoreModel = [
  { logo: deliveryCenterLogo, title: "Dedicated Delivery Centers", desc: "Purpose-built facilities with enterprise security and compliance." },
  { logo: collaborationLogo, title: "Collaboration Tools", desc: "Seamless teamwork via Slack, MS Teams, Jira, and Confluence." },
  { logo: agileLogo, title: "Agile Iterative Development", desc: "Sprint-based delivery with continuous stakeholder feedback." },
  { logo: hybridLogo, title: "Onshore-Offshore Hybrid", desc: "Best of both worlds: local oversight with global execution." },
];

const Delivery = () => (
  <Layout>
    <section className="relative section-padding overflow-hidden">
      <img src={heroDelivery} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
      <ParticleField count={20} />
      <div className="container max-w-4xl relative z-10">
        <div className="mb-6"><BackButton /></div>
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Delivery & <span className="text-gradient">Engagement Model</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our delivery model is built on security, agility, and seamless collaboration across geographies.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Security */}
    <section className="section-padding section-ghost">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Security <span className="text-gradient">First</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {securityFeatures.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="service-tile-neo p-8 text-center h-full">
                <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <img src={f.logo} alt={f.title} className="w-9 h-9 object-contain" loading="lazy" width={36} height={36} />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* How Offshore Works */}
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">How Offshore Works <span className="text-gradient">Securely</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {offshoreModel.map((o, i) => (
            <AnimatedSection key={o.title} delay={i * 0.08}>
              <div className="service-tile-neo flex gap-5 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img src={o.logo} alt={o.title} className="w-8 h-8 object-contain" loading="lazy" width={32} height={32} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Delivery;
