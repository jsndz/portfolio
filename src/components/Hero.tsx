import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-[18rem] font-bold tracking-tighter leading-none"
            style={{
              backgroundImage: "url('/texture.jpg')",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "center",
              backgroundSize: "cover",
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl font-semibold max-w-2xl"
        >
          Building visually striking, inclusive, and intuitive digital spaces.
        </motion.p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
