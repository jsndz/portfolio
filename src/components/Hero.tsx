import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
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
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-start bg-[url('/bg.jpg')]">
      <div className="  px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className="font-bold tracking-tight leading-none w-full text-[5rem] sm:text-[8rem] md:text-[9rem] lg:text-[10rem] xl:text-[13rem] 2xl:text-[14.5rem]"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/66571474d48f3e8c7c14896c/66571474d48f3e8c7c1489aa_hero-heading-bg.jpg)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "center",
              backgroundSize: "cover",
              letterSpacing: "-0.05em",
              whiteSpace: "normal",
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
        <div className="absolute bottom-0 w-full flex items-center justify-between gap-8 p-6 pb-20">
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
