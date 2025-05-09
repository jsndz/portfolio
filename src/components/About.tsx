import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="01" title="About" />
        
        <div ref={ref} className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="John Moore" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-medium mb-6">Hello, I'm John Moore</h3>
            <p className="text-tertiary mb-6 leading-relaxed">
              With over 10 years of experience in design, I specialize in creating
              thoughtful digital experiences that balance aesthetics with functionality.
              My approach focuses on user-centered design principles that elevate brands
              and engage audiences.
            </p>
            <p className="text-tertiary mb-8 leading-relaxed">
              Based in New York City, I collaborate with forward-thinking clients
              across various industries, from startups to established enterprises.
              My process involves deep research, strategic thinking, and meticulous
              execution to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-3 opacity-50">Experience</h4>
                <p className="text-tertiary">10+ Years</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-3 opacity-50">Projects</h4>
                <p className="text-tertiary">200+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;