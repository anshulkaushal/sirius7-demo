import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import AIChatbot from "./AIChatbot";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
    <Footer />
    <ScrollToTopButton />
    <AIChatbot />
  </div>
);

export default Layout;
