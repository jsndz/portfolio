import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";

interface WorkProject {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: WorkProject[] = [
  {
    id: 1,
    title: "Altitude Branding",
    category: "Brand Identity",
    year: "2024",
    image:
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Novus E-Commerce",
    category: "UI/UX Design",
    year: "2023",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Harmony Dashboard",
    category: "Web Application",
    year: "2023",
    image:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Fusion Mobile App",
    category: "Mobile Design",
    year: "2022",
    image:
      "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Works: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="works" className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="01" title="Works" />

        <div
          ref={ref}
          className="mt-16 md:mt-24 grid sm:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-tertiary mt-1">{project.category}</p>
                </div>
                <span className="text-sm opacity-50">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
