import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { useRole } from "../context/RoleContext";
import { rolesConfig } from "../context/types";

interface Service {
  id: number;
  title: string;
  description: string;
}

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <div>
    <h4 className="text-xl font-medium mb-4">{title}</h4>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 p-2 bg-gray-100 rounded-md"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <img src={skill} alt="icon" className="w-8 h-8 object-contain" />
          <span className="text-md">
            {skill.split("/").pop()?.split(".")[0]}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Expertise: React.FC = () => {
  const { selectedRole } = useRole();
  const role = rolesConfig[selectedRole];

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="expertise" className="bg-dynamic min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="03" title="Expertise" />

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8">Skills</h3>

            <div ref={skillsRef} className="space-y-8">
              <SkillCategory title="Languages" skills={role.languages} />
              <SkillCategory title="Databases" skills={role.databases} />
              <SkillCategory title="Tools" skills={role.tools} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-8">Services</h3>
            <div ref={servicesRef} className="space-y-8">
              {role.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-medium mb-2">
                    {service.service}
                  </h4>
                  <p className="text-tertiary leading-relaxed">
                    {service.description}
                  </p>
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
