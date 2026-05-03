import ServicePageTemplate from "@/components/ServicePageTemplate";
import devopsLogo from "@/assets/devops-logo.svg";

const DevOpsService = () => (
  <ServicePageTemplate
    iconImg={devopsLogo}
    title="DevOps & Platform Engineering"
    subtitle="Build the foundations that let your teams ship faster with confidence."
    overview="Sirius7's DevOps and Platform Engineering practice helps enterprises accelerate software delivery while maintaining reliability and security. We design and implement modern CI/CD pipelines, container orchestration platforms, and developer experience tooling that empowers your engineering teams to focus on building great products instead of fighting infrastructure."
    offerings={[
      "CI/CD pipeline design & implementation (Jenkins, GitLab, GitHub Actions)",
      "Kubernetes orchestration & container platform management",
      "Infrastructure as Code (Terraform, Ansible, Helm)",
      "Internal developer platforms & self-service tooling",
      "Observability stack implementation (Prometheus, Grafana, ELK)",
      "Site reliability engineering (SRE) practices",
      "GitOps workflow design & implementation",
      "Security integration (DevSecOps) & compliance automation",
    ]}
    benefits={[
      "Reduce deployment frequency from weeks to hours with automated pipelines",
      "Platform engineering expertise that improves developer productivity by 40%+",
      "Production-grade Kubernetes platforms with built-in observability",
      "Security baked into every stage of the delivery pipeline",
      "SRE practices that maintain 99.9%+ uptime for critical services",
    ]}
  />
);

export default DevOpsService;
