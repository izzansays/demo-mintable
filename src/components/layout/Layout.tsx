import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-dvh min-w-full flex flex-col">
      <Navbar />
      <div className="flex flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
