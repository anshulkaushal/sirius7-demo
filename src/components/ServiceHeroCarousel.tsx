import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticleField from "@/components/ParticleField";

import serviceOracle from "@/assets/service-oracle.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSap from "@/assets/service-sap.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import serviceSalesforce from "@/assets/service-salesforce.jpg";
import serviceData from "@/assets/service-data.jpg";

const slides = [
  {
    image: serviceOracle,
    title: "Oracle Consulting",
    desc: "End-to-end Oracle implementation, migration, and managed services for enterprise-grade performance.",
    path: "/services/oracle",
  },
  {
    image: serviceCloud,
    title: "Cloud Operations",
    desc: "Multi-cloud expertise across AWS, Azure, and GCP — architected for scale, security, and resilience.",
    path: "/services/cloud",
  },
  {
    image: serviceSap,
    title: "SAP & SuccessFactors",
    desc: "SAP transformation and SuccessFactors HCM implementation to modernize your workforce management.",
    path: "/services/sap",
  },
  {
    image: serviceDevops,
    title: "DevOps & Platform Engineering",
    desc: "CI/CD pipelines, infrastructure as code, and platform reliability engineered for speed.",
    path: "/services/devops",
  },
  {
    image: serviceSalesforce,
    title: "Salesforce Consulting",
    desc: "Salesforce implementation, customization, and integration services that drive revenue growth.",
    path: "/services/salesforce",
  },
  {
    image: serviceData,
    title: "Data Science & BI",
    desc: "Data-driven insights through advanced analytics, ML models, and business intelligence dashboards.",
    path: "/services/data",
  },
];

const INTERVAL = 5000;

// Preload all hero images on mount
const preloadImages = () => {
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
};

const ServiceHeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const preloaded = useRef(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!preloaded.current) {
      preloadImages();
      preloaded.current = true;
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[85vh] min-h-[540px] max-h-[800px] overflow-hidden bg-[hsl(222,47%,6%)]">
      {/* Background images — crossfade */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1 : 1.08,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1] blur-[1px]"
          />
          {/* Consistent dark overlay for text readability in both themes */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,4%/0.92)] via-[hsl(222,47%,6%/0.78)] to-[hsl(222,47%,8%/0.55)]" />
        </motion.div>
      ))}

      {/* Particles */}
      <div className="relative z-[2]">
        <ParticleField count={40} />
      </div>

      {/* Text content — always light text on dark overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-[hsl(217,91%,60%/0.15)] text-[hsl(217,91%,70%)] border border-[hsl(217,91%,60%/0.3)] mb-6">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_2px_10px_hsl(217,91%,60%,0.3)]">
                {slides[current].title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-[hsl(210,20%,78%)] leading-relaxed max-w-xl">
                {slides[current].desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="lg" className="btn-sweep animate-glow-pulse">Talk to an Expert</Button>
                </Link>
                <Link to={slides[current].path}>
                  <Button variant="hero-secondary" size="lg">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary glow-primary" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>
    </section>
  );
};

export default ServiceHeroCarousel;
