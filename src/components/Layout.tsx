import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import AIChatbot from "./AIChatbot";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <ScrollToTopButton />
    <AIChatbot />
  </div>
);

export default Layout;
