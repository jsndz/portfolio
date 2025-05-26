import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="min-h-screen py-20 md:py-32 bg-primary text-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" title="Contact" />

        <div
          ref={ref}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 pt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-medium mb-6">
              Let's create something amazing together
            </h3>
            <p className="text-background text-opacity-70 mb-12 leading-relaxed">
              Whether you're interested in working together or just want to say
              hello, I'd love to hear from you. Get in touch and let's start a
              conversation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-background text-opacity-50" />
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-2 text-background text-opacity-50">
                    Email
                  </h4>
                  <a
                    href="mailto:jaisondz9360@gmail.com"
                    className="text-background hover:underline break-words"
                  >
                    jaisondz9360@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 mt-1 text-background text-opacity-50" />
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-2 text-background text-opacity-50">
                    Location
                  </h4>
                  <p className="text-background">Mangalore, India</p>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-sm uppercase tracking-wider mb-4 text-background text-opacity-50">
                  Connect
                </h4>
                <div className="flex space-x-5">
                  <a
                    href="https://www.linkedin.com/in/jaison-dsouza-414082263/"
                    className="text-background hover:opacity-70 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/jsndz"
                    className="text-background hover:opacity-70 transition-opacity"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <h1 className="font-londrina text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-center leading-tight break-words">
              Collaborate. <br className="hidden sm:block" />
              Innovate. <br className="hidden sm:block" />
              Create.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
