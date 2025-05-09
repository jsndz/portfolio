import React, { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Navigation for desktop */}
      {/* <div className="hidden md:block w-64 fixed h-full">
        <Navigation />
      </div> */}

      {/* Mobile navigation */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="p-5">
          <Navigation isMobile={true} />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow md:ml-64 min-h-screen">{children}</main>
    </div>
  );
};

export default Layout;
