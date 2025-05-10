import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";

const roles = [
  "Backend Developer",
  "Fullstack Developer",
  "Go Developer",
  "WebRTC Enthusiast",
  "Microservices Architect",
];

export default function SpecializingIn() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <div className="flex flex-col items-start space-y-2 ">
      {/* <motion.h2
        className="text-2xl font-bold text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Specializing In
      </motion.h2> */}

      <div className="flex flex-col space-y-1">
        {roles.map((role, index) => (
          <motion.div
            key={role}
            className={`cursor-pointer text-lg font-medium flex items-center space-x-2 pb-3 ${
              activeRole === role ? "text-black" : "text-gray-400"
            }`}
            whileHover={{ scale: 1.05, color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveRole(role)}
          >
            <ArrowDownLeft />
            <span>{role}</span>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        className="mt-5 text-lg text-gray-300"
        key={activeRole}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Viewing projects as a{" "}
        <span className="text-indigo-400">{activeRole}</span>.
      </motion.div> */}
    </div>
  );
}
