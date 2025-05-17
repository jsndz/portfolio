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
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="01" title="About" />

        <div
          ref={ref}
          className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="shadow-lg rounded-2xl overflow-hidden"
          >
            <Spline scene="https://prod.spline.design/5oFSrTQC4DQpRIOG/scene.splinecode" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-medium mb-6">
              Hello, I'm Jaison Dsouza
            </h3>
            <h3 className="text-2xl font-medium mb-6">Developer | Engineer</h3>

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
              When I’m not coding, I’m either reading about novels or sketching
              app ideas with pen and paper.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-2 opacity-50">
                  Experience
                </h4>
                <p className="text-tertiary">2+ Years</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-2 opacity-50">
                  Repositories
                </h4>
                <p className="text-tertiary">50+</p>
              </div>
              <div className="col-span-2">
                <h2 className="text-lg uppercase tracking-wider mb-2 opacity-50">
                  Based in Mangalore, India
                </h2>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-2xl font-bold hover:text-accent transition-colors relative group"
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
