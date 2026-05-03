import ServicePageTemplate from "@/components/ServicePageTemplate";
import salesforceLogo from "@/assets/salesforce-logo.png";

const SalesforceService = () => (
  <ServicePageTemplate
    iconImg={salesforceLogo}
    title="Salesforce Consulting"
    subtitle="Optimize your CRM for sales productivity and customer engagement."
    overview="Sirius7's Salesforce consulting practice helps enterprises unlock the full potential of the Salesforce platform. From initial implementation and customization to complex integrations and Lightning migrations, our certified Salesforce consultants deliver solutions that drive sales productivity, improve customer engagement, and accelerate revenue growth across your organization."
    offerings={[
      "Salesforce Sales Cloud & Service Cloud implementation",
      "Lightning Experience migration & customization",
      "AppExchange integration & custom app development",
      "Salesforce CPQ & billing configuration",
      "Marketing Cloud & Pardot implementation",
      "Salesforce integration with ERP & third-party systems",
      "Data migration, cleansing & governance",
      "Salesforce managed services & ongoing optimization",
    ]}
    benefits={[
      "Certified Salesforce consultants with multi-industry experience",
      "Proven implementation methodology with rapid time-to-value",
      "Deep integration expertise connecting Salesforce to your enterprise stack",
      "User adoption programs that drive CRM engagement beyond 90%",
      "Ongoing optimization ensuring your Salesforce ROI grows over time",
    ]}
  />
);

export default SalesforceService;
