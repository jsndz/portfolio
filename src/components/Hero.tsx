import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import { useRole } from "../lib/RoleContext";
import MenuItems from "./NavItems";
import RoleSwitcher from "./Role";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // if (isMobile) setIsMenuOpen(false);
  }
};

const Hero: React.FC = () => {
  const { roleDetails } = useRole();
  return (
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-start bg-[url('/bg.jpg')]">
      <div className="  px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className=" text-5xl md:text-7xl lg:text-[15.5rem] font-bold tracking-tight w-full leading-none"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/66571474d48f3e8c7c14896c/66571474d48f3e8c7c1489aa_hero-heading-bg.jpg)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "center",
              backgroundSize: "cover",
              letterSpacing: "-0.1em",
              whiteSpace: "nowrap",
            }}
          >
            JAISON DSOUZA
          </h1>

          <div className="flex flex-wrap gap-3 mt-6">
            {["SOFTWARE ENGINEER"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="text-xs font-medium bg-gray-300 px-3 py-1"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <RoleSwitcher></RoleSwitcher>
        <div className="flex items-center justify-between gap-8 mt-12 relative">
          <MenuItems onItemSelect={scrollToSection} />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
