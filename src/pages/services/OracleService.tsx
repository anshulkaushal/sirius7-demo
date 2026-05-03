import ServicePageTemplate from "@/components/ServicePageTemplate";
import oracleLogo from "@/assets/oracle-logo.png";

const OracleService = () => (
  <ServicePageTemplate
    iconImg={oracleLogo}
    title="Oracle Consulting"
    subtitle="Enterprise-grade Oracle solutions from implementation to managed services."
    overview="Sirius7 delivers comprehensive Oracle consulting services spanning the full lifecycle — from strategic roadmap development and implementation to migration, optimization, and ongoing managed services. Our certified Oracle specialists bring deep expertise in Oracle Cloud Infrastructure, E-Business Suite, Fusion Applications, and database administration to drive your enterprise forward."
    offerings={[
      "Oracle Cloud Infrastructure (OCI) migration & management",
      "Oracle E-Business Suite implementation & upgrades",
      "Oracle Fusion Applications deployment",
      "Database performance tuning & optimization",
      "Oracle integration with third-party systems",
      "24/7 Oracle managed services & support",
      "Oracle licensing advisory & cost optimization",
      "Custom Oracle development & extensions",
    ]}
    benefits={[
      "Certified Oracle specialists with 15+ years of enterprise experience",
      "Proven migration methodology that minimizes downtime and risk",
      "Cost-effective delivery through our global onshore-offshore model",
      "End-to-end ownership from architecture to ongoing operations",
      "Deep integration expertise across the Oracle ecosystem",
    ]}
  />
);

export default OracleService;
