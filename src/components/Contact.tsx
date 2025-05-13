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
        <SectionHeading number="05" title="Contact" />

        <div ref={ref} className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12">
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
                    href="mailto:hello@johnmoore.design"
                    className="text-background hover:text-background hover:underline"
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
                    className="text-background hover:text-background hover:opacity-70 transition-opacity"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/jsndz"
                    className="text-background hover:text-background hover:opacity-70 transition-opacity"
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
          >
            {/* <div className="flex items-center justify-center h-full">
              <img src="/qr-code.png" alt="QR Code" className="w-128 h-128" />
            </div> */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-background text-opacity-70 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-background border-opacity-20 py-2 px-0 focus:outline-none focus:border-background text-background"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-background text-opacity-70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-background border-opacity-20 py-2 px-0 focus:outline-none focus:border-background text-background"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-background text-opacity-70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent border-b border-background border-opacity-20 py-2 px-0 focus:outline-none focus:border-background text-background"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="py-3 px-8 bg-background text-primary font-medium hover:bg-background hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
