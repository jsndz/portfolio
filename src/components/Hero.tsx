import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import SpecializingIn from "./As";
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
  return (
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-start">
      <div className="container mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-[13.5rem] font-bold tracking-tight leading-none"
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
                className="text-xs font-medium bg-lightgray px-3 py-1"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl font-semibold max-w-2xl"
        >
          Building visually striking, inclusive, and intuitive digital spaces.
        </motion.p> */}
        <RoleSwitcher></RoleSwitcher>
        <div className="flex justify-between items-center mt-12 relative">
          <div className="w-full md:w-1/2">
            <MenuItems onItemSelect={scrollToSection} />
          </div>
          {/* <div className="w-full md:w-1/2 absolute right-0 top-0">
            <SpecializingIn />
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
