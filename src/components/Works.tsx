import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { WorkProject } from "../context/types";
import { useRoleContext } from "../context/RoleContext";
import { getProjectsForRole } from "../context/utils";
import { X } from "lucide-react";

const Works: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );
  const { state, dispatch } = useRoleContext();
  const projects = getProjectsForRole(state.role);
  const closeModal = () => setSelectedProject(null);

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
              onClick={() => setSelectedProject(project)}
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#f9f9f9] max-w-4xl w-full rounded-2xl overflow-hidden shadow-lg relative"
              initial={{ scale: 0.95, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-8 space-y-6">
                <X
                  className="absolute top-4 right-4 text-[#111111] cursor-pointer hover:text-[#333333]"
                  size={24}
                  onClick={closeModal}
                />

                <div>
                  <h2 className="text-3xl font-semibold text-[#111111]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-[#888888]">
                    {selectedProject.year}
                  </p>
                  <p className="text-[#666666] mt-1 italic">
                    {selectedProject.category}
                  </p>
                </div>

                <p className="text-[#333333]">{selectedProject.description}</p>

                <div>
                  <h3 className="font-medium text-[#111111] mb-1">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {selectedProject.techStack.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                        className="text-xs font-medium bg-gray-300 px-3 py-1"
                      >
                        #{tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-[#111111] mb-1">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-[#333333] space-y-1">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.challenges && (
                  <div>
                    <h3 className="font-medium text-[#111111] mb-1">
                      Challenges
                    </h3>
                    <p className="text-[#333333]">
                      {selectedProject.challenges}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 mt-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-[#111111] px-4 py-2 rounded hover:bg-[#333333]"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-[#666666] px-4 py-2 rounded hover:bg-[#888888]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
