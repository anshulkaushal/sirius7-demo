import ServicePageTemplate from "@/components/ServicePageTemplate";
import sapLogo from "@/assets/sap-logo.png";

const SapService = () => (
  <ServicePageTemplate
    iconImg={sapLogo}
    title="SAP & SuccessFactors"
    subtitle="SAP transformation and HCM modernization for the modern enterprise."
    overview="Sirius7 delivers end-to-end SAP consulting services including S/4HANA migration, SuccessFactors HCM implementation, and ongoing optimization. Our consultants bring deep functional and technical expertise to ensure your SAP landscape drives operational efficiency, workforce engagement, and business agility across your organization."
    offerings={[
      "SAP S/4HANA migration & greenfield implementation",
      "SuccessFactors Employee Central & talent management",
      "SAP integration with third-party HR & finance systems",
      "SAP Business Technology Platform (BTP) solutions",
      "SAP Fiori UX design & development",
      "SAP testing, data migration & cutover planning",
      "Ongoing SAP application management services",
      "SAP license optimization & roadmap advisory",
    ]}
    benefits={[
      "Certified SAP consultants with enterprise transformation experience",
      "Accelerated implementation using proven templates and best practices",
      "Seamless integration of SuccessFactors with existing enterprise systems",
      "Comprehensive change management and user adoption programs",
      "Flexible engagement models from advisory to full managed services",
    ]}
  />
);

export default SapService;
