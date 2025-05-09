import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: "Best UI Design",
    organization: "Awwwards",
    year: "2024",
    description: "Recognition for exceptional user interface design in the Novus E-Commerce project."
  },
  {
    id: 2,
    title: "Design Excellence",
    organization: "CSS Design Awards",
    year: "2023",
    description: "Award for outstanding creative direction and technical implementation."
  },
  {
    id: 3,
    title: "Brand of the Year",
    organization: "Graphis",
    year: "2022",
    description: "Awarded for the comprehensive branding work for Altitude."
  },
  {
    id: 4,
    title: "Innovation in Digital Design",
    organization: "D&AD",
    year: "2021",
    description: "Recognition for pushing boundaries in digital product design."
  }
];

const Awards: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="min-h-screen py-20 md:py-32 bg-lightgray bg-opacity-30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="03" title="Awards" />
        
        <div ref={ref} className="mt-16 md:mt-24">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-8 border-b border-black border-opacity-10 flex flex-col md:flex-row md:items-center"
            >
              <div className="md:w-1/4">
                <span className="text-sm opacity-50">{award.year}</span>
              </div>
              <div className="md:w-1/4 mt-2 md:mt-0">
                <h3 className="text-xl font-medium">{award.title}</h3>
                <p className="text-tertiary mt-1">{award.organization}</p>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <p className="text-tertiary">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;