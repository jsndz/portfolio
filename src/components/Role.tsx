import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useRole } from "../context/RoleContext";
import { rolesConfig } from "../context/types";

interface RoleButtonProps {
  role: string;
  isOpen: boolean;
  onClick: () => void;
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, isOpen, onClick }) => {
  return (
    <motion.button
      className="inline-flex items-center gap-1 font-bold text-gray-900 border-b-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 px-1"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <span className="text-6xl">{role}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ChevronDown size={16} className="text-gray-700" />
      </motion.span>
    </motion.button>
  );
};

interface RoleDropdownProps {
  isOpen: boolean;
  roles: string[];
  selectedRole: string;
  onRoleSelect: (role: string) => void;
  onClose: () => void;
}

const RoleDropdown: React.FC<RoleDropdownProps> = ({
  isOpen,
  roles,
  selectedRole,
  onRoleSelect,
  onClose,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          role="listbox"
          aria-label="Select a role"
        >
          <div className="py-1">
            {roles.map((role) => (
              <motion.div
                key={role}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  role === selectedRole
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
                onClick={() => {
                  onRoleSelect(role);
                  onClose();
                }}
                role="option"
                aria-selected={role === selectedRole}
              >
                {role}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RoleSwitcher: React.FC = () => {
  const { selectedRole, setSelectedRole } = useRole();
  const roles = Object.keys(rolesConfig);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleRoleSelect = (role: any) => {
    setSelectedRole(role);
  };

  return (
    <div className="relative inline-flex items-center space-x-2">
      <h1 className="text-xl md:text-2xl lg:text-6xl text-gray-800 font-bold">
        Solving digital problems as a{" "}
        <div className="relative inline-block">
          <RoleButton
            role={selectedRole}
            isOpen={isDropdownOpen}
            onClick={toggleDropdown}
          />
          <RoleDropdown
            isOpen={isDropdownOpen}
            roles={roles}
            selectedRole={selectedRole}
            onRoleSelect={handleRoleSelect}
            onClose={closeDropdown}
          />
        </div>
      </h1>
    </div>
  );
};

export default RoleSwitcher;
