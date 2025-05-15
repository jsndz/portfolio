import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { useRole } from "../context/RoleContext";
import { rolesConfig } from "../context/types";
import { getTechStackForRole } from "../context/utils";

interface IconGridProps {
  title: string;
  items: string[];
  delayOffset?: number;
}

const IconGrid: React.FC<IconGridProps> = ({
  title,
  items,
  delayOffset = 0,
}) => {
  return (
    <div>
      <h4 className="text-xl font-medium mb-4">{title}</h4>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.img
            key={index}
            src={item}
            alt={title}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index + delayOffset) * 0.05 }}
          />
        ))}
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const { selectedRole } = useRole();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const role = rolesConfig[selectedRole];
  const techStacks = getTechStackForRole(selectedRole);
  const { languages = [], tools = [], databases = [] } = role || {};

  return (
    <section id="expertise" className="bg-dynamic min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="04" title="Expertise" />

        <div ref={ref} className="mt-16 md:mt-24 space-y-20">
          {/* Tech Stack Section */}
          <div>
            <h3 className="text-2xl font-medium mb-8">Tech Stack</h3>
            <div className="space-y-8">
              {techStacks.map((tech, techIndex) => (
                <div key={tech.id}>
                  <p className="font-semibold mb-2">{tech.name}</p>
                  <motion.div
                    className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {tech.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={tech.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Tools Section */}
          <div className="grid md:grid-cols-2 gap-12">
            <IconGrid title="Languages" items={languages} />
            <IconGrid
              title="Tools"
              items={tools}
              delayOffset={languages.length}
            />
          </div>

          {/* Databases Section */}
          {databases.length > 0 && (
            <div>
              <h3 className="text-2xl font-medium mb-8">Databases</h3>
              <IconGrid title="Databases" items={databases} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
