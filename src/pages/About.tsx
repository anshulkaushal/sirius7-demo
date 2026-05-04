import AnimatedSection from "@/components/AnimatedSection";
import ParticleField from "@/components/ParticleField";
import heroAbout from "@/assets/hero-about.jpg";
import BackButton from "@/components/BackButton";
import WorldMap from "@/components/WorldMap";
import { MapPin, User, Database, Cloud, Code2, TestTube2, Eye, Brain, Wrench } from "lucide-react";
import vandanaPhoto from "@/assets/vandana-profile.jpeg";
import anshulPhoto from "@/assets/anshul-profile.jpeg";
import pratheekPhoto from "@/assets/pratheek-profile.jpg";

const locations = [
  { region: "New Zealand (HQ)", cities: ["Auckland"] },
  { region: "Australia", cities: ["Sydney"] },
  { region: "USA", cities: ["Chicago"] },
  { region: "UAE", cities: ["Dubai"] },
  { region: "India", cities: ["Bangalore", "Mumbai", "Hyderabad", "Jaipur"] },
];

const leaders = [
  {
    name: "Vandana Kaushal",
    role: "Founder",
    photo: vandanaPhoto,
    imgClass: "object-top scale-110",
    bio: "Vandana Kaushal is the Founder of Sirius7, with over 23 years of experience in enterprise technology across banking, retail and public sector organisations. She specialises in ERP, cloud, data platforms and enterprise transformation, with hands-on leadership across Salesforce, Oracle, Snowflake and multi-cloud environments (Azure, AWS, GCP).\n\nAt Sirius7, Vandana leads an AI-first managed services model, helping organisations simplify complex systems, accelerate delivery and embed intelligence into core operations across New Zealand, Australia and India.",
  },
  { name: "Anshul", role: "Principal Cloud Consultant", photo: anshulPhoto, imgClass: "object-[center_20%] scale-150", bio: "Anshul is a Principal Cloud Consultant with deep expertise in cloud architecture, platform engineering and DevOps across Azure, AWS, GCP and Oracle ecosystems. He specialises in building scalable, secure and high-performance platforms using Kubernetes, OpenShift, event-driven architectures and automation.\n\nAt Sirius7, Anshul leads cloud strategy and delivery, helping organisations modernise systems, accelerate innovation and build resilient, future-ready platforms." },
  { name: "Prateek Tall", role: "Advisory Board Member", photo: pratheekPhoto, imgClass: "object-top scale-110", bio: "Prateek Tall brings 17+ years of experience across ERP, cloud and analytics ecosystems. He specialises in Oracle Fusion, OCI architecture and data analytics, helping organisations deliver scalable, high-performance solutions.\n\nAt Sirius7, Prateek is an Advisory Board Member and leads Oracle and data capabilities. He also serves as a Board Member and Secretary of NZOUG, supporting Oracle cloud adoption across New Zealand." },
];

const expertise = [
  { icon: Database, label: "Enterprise Applications (Oracle, SAP, Salesforce)" },
  { icon: Cloud, label: "Cloud & DevOps (AWS, Azure, GCP)" },
  { icon: Code2, label: "Software Development & Integration" },
  { icon: TestTube2, label: "Testing & QA" },
  { icon: Eye, label: "Observability & Platform Engineering" },
  { icon: Brain, label: "AI & Data Science" },
  { icon: Wrench, label: "BAU Support & Maintenance" },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <img src={heroAbout} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
      <ParticleField count={20} />
      <div className="container max-w-4xl relative z-10">
        <div className="mb-6"><BackButton /></div>
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-gradient">Sirius7</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Sirius7 is a privately owned technology consulting company with a global presence spanning five countries. We bring together the best of onshore leadership and offshore delivery to help enterprises achieve IT excellence.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Global Presence */}
    <section className="section-padding section-ghost">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Global <span className="text-gradient">Presence</span></h2>
          <p className="mt-3 text-muted-foreground">Serving clients worldwide with local expertise</p>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <WorldMap />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {locations.map((loc, i) => (
            <AnimatedSection key={loc.region} delay={i * 0.08}>
              <div className="service-tile-neo p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-[#2563EB]" />
                  <h3 className="font-display font-semibold">{loc.region}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{loc.cities.join(", ")}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold">Leadership</h2>
        </AnimatedSection>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {leaders.map((l, i) => (
            <AnimatedSection key={l.name} delay={i * 0.1}>
              <div className="service-tile-neo p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0 md:w-40">
                  <div className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                    {l.photo ? (
                      <img src={l.photo} alt={l.name} className={`w-full h-full object-cover ${l.imgClass}`} />
                    ) : (
                      <User size={32} className="text-primary" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-3 text-center">{l.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 text-center">{l.role}</p>
                </div>
                {l.bio && (
                  <div className="flex-1">
                    {l.bio.split('\n\n').map((paragraph, pi) => (
                      <p key={pi} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Areas of Expertise */}
    <section className="section-padding section-ghost">
      <div className="container">
        <AnimatedSection className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold">Areas of <span className="text-gradient">Expertise</span></h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {expertise.map((e, i) => (
            <AnimatedSection key={e.label} delay={i * 0.06}>
              <div className="service-tile-neo p-5 flex items-center gap-4">
                <e.icon size={22} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{e.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
