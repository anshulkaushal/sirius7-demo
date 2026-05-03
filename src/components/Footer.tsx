import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Info, Truck, Users, HelpCircle, MessageSquare, FileText, Shield, Linkedin, BookOpen } from "lucide-react";
import sirius7Logo from "@/assets/sirius7-logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={sirius7Logo} alt="Sirius 7 Logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight leading-tight">
                <span className="text-gradient">SIRIUS</span><span className="text-secondary">7</span>
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Consider IT done</span>
            </div>
          </Link>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Based in Wellington, New Zealand</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <span>0800SIRIUS7</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <a href="mailto:contact@sirius7.com" className="hover:text-primary transition-colors">contact@sirius7.com</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Info size={14} className="text-primary flex-shrink-0" />
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </li>
            <li className="flex items-center gap-2">
              <Truck size={14} className="text-primary flex-shrink-0" />
              <Link to="/delivery" className="hover:text-primary transition-colors">Delivery Model</Link>
            </li>
            <li className="flex items-center gap-2">
              <Users size={14} className="text-primary flex-shrink-0" />
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen size={14} className="text-primary flex-shrink-0" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Support</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <HelpCircle size={14} className="text-primary flex-shrink-0" />
              <Link to="/contact" className="hover:text-primary transition-colors">FAQ</Link>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare size={14} className="text-primary flex-shrink-0" />
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Legal</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <FileText size={14} className="text-primary flex-shrink-0" />
              <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
            </li>
            <li className="flex items-center gap-2">
              <Shield size={14} className="text-primary flex-shrink-0" />
              <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Linkedin size={14} className="text-primary flex-shrink-0" />
              <a href="#" className="hover:text-primary transition-colors">Follow us on LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sirius7. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
