import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import Spline from "@splinetool/react-spline";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading number="01" title="About" />

        <div
          ref={ref}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side card with image and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-[#111] flex flex-col items-center text-center p-6 sm:p-8"
          >
            <img
              src="/man.png"
              alt="Developer illustration"
              className="w-40 sm:w-48 md:w-56 h-auto object-contain mb-6"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
                Curious Engineer. Focused Builder.
              </h3>
              <p className="text-sm sm:text-base text-tertiary leading-relaxed max-w-md mx-auto">
                I love solving real-world problems with code — whether it’s
                building full-stack apps, exploring systems with C, or sketching
                wild ideas on paper.
              </p>
            </div>
          </motion.div>

          {/* Right side detailed content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center text-sm sm:text-base"
          >
            <p className="text-tertiary mb-6 leading-relaxed">
              My coding journey began in my freshman year with Node.js for
              backend development, sparked by my friends' encouragement. I’m a
              self-taught developer with a strong passion for problem-solving
              and building impactful applications.
            </p>
            <p className="text-tertiary mb-6 leading-relaxed">
              Over the years, I expanded my skills to frontend development with
              React.js, creating full-stack projects like an E-commerce
              platform, a Vercel clone, and a WebSocket-based chat application.
              I’ve also explored low-level development with C, building a basic
              SQLite clone to understand database internals.
            </p>
            <p className="text-tertiary mb-10 leading-relaxed">
              When I’m not coding, I’m either reading novels or sketching app
              ideas with pen and paper.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8 mb-10 text-center sm:text-left">
              <div>
                <h4 className="text-xs uppercase tracking-wider mb-2 opacity-50">
                  Experience
                </h4>
                <p className="text-tertiary font-medium">2+ Years</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider mb-2 opacity-50">
                  Repositories
                </h4>
                <p className="text-tertiary font-medium">50+</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-xs uppercase tracking-wider mb-2 opacity-50">
                  Based in Mangalore, India
                </h4>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg sm:text-xl font-bold hover:text-accent transition-colors relative group"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
