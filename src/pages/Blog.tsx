import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleField from "@/components/ParticleField";
import BackButton from "@/components/BackButton";
import heroBlog from "@/assets/hero-blog.jpg";
import { Calendar, User, ArrowRight, Tag, Clock, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = ["All", "Cloud", "AI & ML", "Oracle", "DevOps", "Enterprise", "News"];

const featuredArticle = {
  title: "How AI-First Managed Services Are Reshaping Enterprise IT",
  summary: "Explore how Sirius7's AI-driven approach to managed services is helping organisations reduce operational overhead, accelerate delivery, and embed intelligence into core business operations across multi-cloud environments.",
  category: "AI & ML",
  date: "March 28, 2026",
  author: "Vandana Kaushal",
  readTime: "8 min read",
};

const articles = [
  {
    title: "Oracle Fusion Cloud: Best Practices for Migration Success",
    summary: "A comprehensive guide to planning, executing, and optimising your Oracle Fusion Cloud migration with minimal disruption.",
    category: "Oracle",
    date: "March 20, 2026",
    author: "Prateek Tall",
    readTime: "6 min read",
  },
  {
    title: "Building Resilient Multi-Cloud Architectures with Kubernetes",
    summary: "Key patterns and strategies for deploying containerised workloads across AWS, Azure, and GCP with high availability.",
    category: "Cloud",
    date: "March 12, 2026",
    author: "Anshul",
    readTime: "7 min read",
  },
  {
    title: "DevOps Maturity: From CI/CD to Platform Engineering",
    summary: "How mature DevOps practices evolve into platform engineering, enabling self-service infrastructure and faster time-to-market.",
    category: "DevOps",
    date: "March 5, 2026",
    author: "Sirius7 Team",
    readTime: "5 min read",
  },
  {
    title: "Data-Driven Decision Making with Snowflake and Power BI",
    summary: "Leveraging modern data platforms to build real-time dashboards and analytics solutions for enterprise decision-makers.",
    category: "Enterprise",
    date: "February 25, 2026",
    author: "Sirius7 Team",
    readTime: "6 min read",
  },
  {
    title: "Salesforce Integration Patterns for Complex Enterprises",
    summary: "Best practices for integrating Salesforce with ERP, data warehouses, and third-party systems in large-scale deployments.",
    category: "Enterprise",
    date: "February 18, 2026",
    author: "Sirius7 Team",
    readTime: "5 min read",
  },
  {
    title: "The Future of SAP S/4HANA in the Cloud Era",
    summary: "Understanding the roadmap for SAP modernisation and how SuccessFactors fits into the broader enterprise HCM strategy.",
    category: "Enterprise",
    date: "February 10, 2026",
    author: "Sirius7 Team",
    readTime: "7 min read",
  },
];

// Company updates / latest news
const companyUpdates = [
  {
    title: "Sirius7 Becomes Official Oracle Cloud Partner in ANZ",
    summary: "We are proud to announce our partnership with Oracle, strengthening our commitment to delivering world-class Oracle Cloud solutions across Australia and New Zealand.",
    date: "March 25, 2026",
    type: "Partnership",
  },
  {
    title: "New Delivery Centre Launched in Bangalore",
    summary: "Sirius7 expands its India operations with a state-of-the-art delivery centre in Bangalore, enhancing our offshore delivery capacity.",
    date: "March 10, 2026",
    type: "Expansion",
  },
  {
    title: "Sirius7 Recognised as Emerging Cloud Consultancy",
    summary: "Industry analysts recognise Sirius7's innovative AI-first managed services approach and multi-cloud expertise in enterprise transformation.",
    date: "February 28, 2026",
    type: "Recognition",
  },
  {
    title: "Strategic Reseller Agreement with Snowflake",
    summary: "Sirius7 signs a strategic reseller agreement with Snowflake, enabling customers to access leading data cloud solutions through our managed services model.",
    date: "February 15, 2026",
    type: "Partnership",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <img src={heroBlog} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-[1.02]" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,4%)]/85 to-[hsl(222,47%,4%)]/75" />
        <ParticleField count={20} />
        <div className="container max-w-4xl relative z-10">
          <div className="mb-6"><BackButton /></div>
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Insights & <span className="text-gradient">Thought Leadership</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Technical perspectives, industry insights, and company updates from the Sirius7 team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Featured <span className="text-gradient">Article</span></h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="service-tile-neo p-8 md:p-10 max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Tag size={12} />
                  {featuredArticle.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {featuredArticle.readTime}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                {featuredArticle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-primary" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {featuredArticle.date}
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  Read Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding section-ghost">
        <div className="container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold">Latest <span className="text-gradient">Articles</span></h2>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/20"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredArticles.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 0.08}>
                <div className="service-tile-neo p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User size={12} className="text-primary" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                    </div>
                    <button className="text-primary hover:underline flex items-center gap-1 font-medium">
                      Read <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Updates / Latest News */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Newspaper size={20} className="text-primary" />
              <p className="text-sm font-medium tracking-widest uppercase text-secondary">Company News</p>
            </div>
            <h2 className="font-display text-3xl font-bold">Latest <span className="text-gradient">Updates</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Partnerships, milestones, and announcements from Sirius7.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-0">
            {companyUpdates.map((update, i) => (
              <AnimatedSection key={update.title} delay={i * 0.08}>
                <div className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline line */}
                  {i < companyUpdates.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-px bg-primary/20" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className="service-tile-neo p-6">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        {update.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={11} />
                        {update.date}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{update.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{update.summary}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden section-dark-adaptive">
        <ParticleField count={30} />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Want to Learn <span className="text-gradient">More</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Get in touch to discuss how Sirius7 can help transform your enterprise technology landscape.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="lg" className="mt-8 btn-sweep animate-glow-pulse">Contact Us</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
