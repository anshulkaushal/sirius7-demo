// @ts-ignore - QueryClient exists at runtime
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AIProducts from "./pages/AIProducts";
import OracleService from "./pages/services/OracleService";
import CloudService from "./pages/services/CloudService";
import SapService from "./pages/services/SapService";
import DevOpsService from "./pages/services/DevOpsService";
import SalesforceService from "./pages/services/SalesforceService";
import DataService from "./pages/services/DataService";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/oracle" element={<OracleService />} />
          <Route path="/services/cloud" element={<CloudService />} />
          <Route path="/services/sap" element={<SapService />} />
          <Route path="/services/devops" element={<DevOpsService />} />
          <Route path="/services/salesforce" element={<SalesforceService />} />
          <Route path="/services/data" element={<DataService />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/ai-products" element={<AIProducts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
