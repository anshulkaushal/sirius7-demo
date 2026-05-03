import ServicePageTemplate from "@/components/ServicePageTemplate";
import cloudLogo from "@/assets/cloud-logo.png";

const CloudService = () => (
  <ServicePageTemplate
    iconImg={cloudLogo}
    title="Cloud Operations"
    subtitle="Multi-cloud expertise across AWS, Azure, and GCP — architected for scale."
    overview="Sirius7's cloud operations practice helps enterprises navigate the complexity of multi-cloud environments. Whether you're migrating legacy workloads, optimizing cloud spend, or building cloud-native architectures, our team provides strategic guidance and hands-on engineering to ensure your cloud investments deliver maximum value with enterprise-grade security and reliability."
    offerings={[
      "Cloud migration strategy & execution (AWS, Azure, GCP)",
      "Cloud-native architecture & microservices design",
      "Infrastructure as Code (Terraform, CloudFormation, Pulumi)",
      "Cost optimization & FinOps implementation",
      "Security hardening & compliance automation",
      "24/7 cloud monitoring & incident response",
      "Multi-cloud governance & management",
      "Disaster recovery & business continuity planning",
    ]}
    benefits={[
      "Multi-cloud certified architects across AWS, Azure, and GCP",
      "Proven FinOps practices that typically reduce cloud spend by 25-40%",
      "Automated infrastructure management reducing manual overhead",
      "Round-the-clock monitoring with rapid incident resolution",
      "Security-first approach meeting SOC2, ISO 27001, and HIPAA requirements",
    ]}
  />
);

export default CloudService;
