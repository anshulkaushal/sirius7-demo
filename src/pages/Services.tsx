import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ParticleField from "@/components/ParticleField";
import heroServices from "@/assets/hero-services.jpg";
import { ArrowRight } from "lucide-react";
import dataBILogo from "@/assets/data-bi-logo.png";
import salesforceLogo from "@/assets/salesforce-logo.png";
import devopsLogo from "@/assets/devops-logo.svg";
import sapLogo from "@/assets/sap-logo.png";
import oracleLogo from "@/assets/oracle-logo.png";
import cloudLogo from "@/assets/cloud-logo.png";

import serviceOracle from "@/assets/service-oracle.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import serviceSalesforce from "@/assets/service-salesforce.jpg";
import serviceData from "@/assets/service-data.jpg";

const services = [
  {
    iconImg: oracleLogo,
    title: "Oracle Consulting",
    desc: "End-to-end Oracle implementation, upgrade, and managed services. We specialize in Oracle Cloud, E-Business Suite, and database administration.",
    path: "/services/oracle",
    image: serviceOracle,
  },
  {
    iconImg: cloudLogo,
    title: "Cloud Operations (AWS, Azure, GCP)",
    desc: "Multi-cloud strategy, migration, and operations. Infrastructure provisioning, cost optimization, security hardening, and 24/7 monitoring.",
    path: "/services/cloud",
    image: serviceCloud,
  },
  {
    iconImg: sapLogo,
    title: "SAP & SuccessFactors",
    desc: "SAP transformation, S/4HANA migration, and SuccessFactors HCM implementation from roadmap design through go-live.",
    path: "/services/sap",
    image: serviceSap,
  },
  {
    iconImg: devopsLogo,
    title: "DevOps & Platform Engineering",
    desc: "CI/CD pipeline design, infrastructure as code, Kubernetes orchestration, and platform reliability engineering.",
    path: "/services/devops",
    image: serviceDevops,
  },
  {
    iconImg: salesforceLogo,
    title: "Salesforce Consulting",
    desc: "Salesforce implementation, customization, AppExchange integration, and Lightning migration for optimized CRM.",
    path: "/services/salesforce",
    image: serviceSalesforce,
  },
  {
    iconImg: dataBILogo,
    title: "Data Science & Business Intelligence",
    desc: "Data warehouse modernization, advanced analytics, and BI dashboard development with Power BI, Tableau, and ML models.",
    path: "/services/data",
    image: serviceData,
  },
];

const Services = () => (
  <Layout>
    <section className="relative section-padding overflow-hidden">
      <img src={heroServices} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
      <ParticleField count={25} />
      <div className="container relative z-10">
        <div className="mb-6"><BackButton /></div>
        <AnimatedSection className="text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our <span className="text-gradient">Services</span></h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Comprehensive technology consulting across the enterprise stack.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding section-ghost">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <Link to={s.path}>
                <div className="service-tile-neo p-8 h-full group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/15 transition-all duration-300">
                    {s.iconImg ? (
                      <img src={s.iconImg} alt={s.title} className="w-7 h-7 object-contain" />
                    ) : null}
                  </div>
                  <h2 className="font-display text-lg font-semibold mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Service <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
