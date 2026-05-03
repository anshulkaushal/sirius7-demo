import ServicePageTemplate from "@/components/ServicePageTemplate";
import dataBILogo from "@/assets/data-bi-logo.png";

const DataService = () => (
  <ServicePageTemplate
    iconImg={dataBILogo}
    title="Data Science & BI"
    subtitle="Turn raw data into actionable insights that drive business decisions."
    overview="Sirius7's Data Science and Business Intelligence practice helps enterprises unlock the value hidden in their data. We modernize data warehouses, build advanced analytics solutions, and deploy machine learning models that transform how organizations make decisions. From executive dashboards to predictive analytics, we deliver data solutions that create measurable business impact."
    offerings={[
      "Data warehouse modernization & cloud migration",
      "Business intelligence dashboard development (Power BI, Tableau)",
      "Advanced analytics & predictive modeling",
      "Machine learning model development & deployment",
      "Data governance & quality management frameworks",
      "Real-time data streaming & processing (Kafka, Spark)",
      "Data lake architecture & implementation",
      "ETL/ELT pipeline design & automation",
    ]}
    benefits={[
      "Data engineers and scientists with enterprise analytics experience",
      "Scalable data architectures that grow with your business needs",
      "Interactive dashboards that empower data-driven decision making",
      "ML models that deliver measurable ROI within quarters, not years",
      "End-to-end data governance ensuring quality, security, and compliance",
    ]}
  />
);

export default DataService;
