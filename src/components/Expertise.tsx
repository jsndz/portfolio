import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

interface Skill {
  id: number;
  name: string;
  percentage: number;
}

interface Service {
  id: number;
  title: string;
  description: string;
}

const skills: Skill[] = [
  { id: 1, name: "Brand Strategy", percentage: 95 },
  { id: 2, name: "UI/UX Design", percentage: 90 },
  { id: 3, name: "Webflow Development", percentage: 85 },
  { id: 4, name: "Framer Prototyping", percentage: 88 },
  { id: 5, name: "Motion Design", percentage: 80 },
];

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Crafting distinctive brand identities that resonate with target audiences and stand out in competitive markets."
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and seamless experiences that enhance user engagement and satisfaction."
  },
  {
    id: 3,
    title: "Webflow Development",
    description: "Building responsive, high-performance websites with Webflow's powerful CMS and animation capabilities."
  },
  {
    id: 4,
    title: "Framer Prototyping",
    description: "Developing interactive prototypes that accurately represent the final product's functionality and design."
  },
];

const Expertise: React.FC = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="expertise" className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" title="Expertise" />
        
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8">Skills</h3>
            <div ref={skillsRef} className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="opacity-50">{skill.percentage}%</span>
                  </div>
                  <div className="h-1 w-full bg-lightgray">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-8">Services</h3>
            <div ref={servicesRef} className="space-y-8">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-medium mb-2">{service.title}</h4>
                  <p className="text-tertiary leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;