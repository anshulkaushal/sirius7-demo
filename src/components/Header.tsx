import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, Briefcase, Brain, Truck, Info, Mail, Database, Cloud, Users, GitBranch, Settings2, BarChart3, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import sirius7Logo from "@/assets/sirius7-logo.png";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: Briefcase },
  { label: "AI Products", path: "/ai-products", icon: Brain },
  { label: "Delivery Model", path: "/delivery", icon: Truck },
  { label: "About", path: "/about", icon: Info },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "Contact", path: "/contact", icon: Mail },
];

const serviceItems = [
  { icon: Database, label: "Oracle Consulting", path: "/services/oracle" },
  { icon: Cloud, label: "Cloud Operations", path: "/services/cloud" },
  { icon: Users, label: "SAP & SuccessFactors", path: "/services/sap" },
  { icon: GitBranch, label: "DevOps & Platform Engineering", path: "/services/devops" },
  { icon: Settings2, label: "Salesforce Consulting", path: "/services/salesforce" },
  { icon: BarChart3, label: "Data Science & BI", path: "/services/data" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location.hash]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !activeHash;
    if (path.includes("#")) {
      const [pathname, hash] = path.split("#");
      return location.pathname === (pathname || "/") && activeHash === `#${hash}`;
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = useCallback((path: string) => {
    if (path.includes("#")) {
      const [pathname, hash] = path.split("#");
      setActiveHash(`#${hash}`);
      if (location.pathname === (pathname || "/")) {
        window.history.replaceState(null, "", `#${hash}`);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
      }
    } else {
      setActiveHash("");
    }
    setMobileOpen(false);
  }, [location.pathname, navigate]);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm relative overflow-visible">
      {/* Electric blue spark line — clipped to header; animation uses %/px only (no 100vw) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-[spark-slide_3s_linear_infinite]" />
      </div>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src={sirius7Logo}
            alt="Sirius 7 Logo"
            className="h-9 w-9 object-cover rounded-full drop-shadow-[0_0_6px_hsl(var(--primary)/0.3)]"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient">SIRIUS</span>
              <span className="text-secondary">7</span>
            </span>
            <span className="text-[9px] font-medium tracking-widest uppercase text-muted-foreground">Consider IT done</span>
          </div>
        </Link>

        {/* Desktop pill nav */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center bg-muted/60 rounded-full p-1 gap-0.5">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive(link.path)
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25"
                        : "text-foreground/70 hover:text-foreground hover:bg-primary/8"
                    }`}
                  >
                    <link.icon size={14} className="opacity-70" />
                    {link.label}
                  </Link>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-72 bg-card/95 backdrop-blur-xl rounded-xl border border-border/60 shadow-xl shadow-primary/5 p-2 animate-[fade-in_0.1s_ease-out]">
                        {serviceItems.map((s) => (
                          <Link
                            key={s.label}
                            to={s.path}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                          >
                            <s.icon size={16} className="text-secondary shrink-0" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path.includes("#")) {
                      e.preventDefault();
                      handleNavClick(link.path);
                    } else {
                      setActiveHash("");
                    }
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/8"
                  }`}
                >
                  <link.icon size={14} className="opacity-70" />
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact">
            <Button
              className="rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:brightness-110 transition-all duration-300 border-0"
              size="sm"
            >
              Talk to an Expert
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl pb-4 px-4 pt-2 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  if (link.path.includes("#")) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  } else {
                    setMobileOpen(false);
                  }
                }}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border/50">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-md border-0">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
