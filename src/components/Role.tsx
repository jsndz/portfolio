import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback } from "react";
interface RoleButtonProps {
  role: string;
  isOpen: boolean;
  onClick: () => void;
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, isOpen, onClick }) => {
  return (
    <motion.button
      className="inline-flex items-center gap-1 font-medium text-gray-900 border-b-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 px-1"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {role}
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
  roles: Role[];
  selectedRole: Role;
  onRoleSelect: (role: Role) => void;
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

  const handleKeyDown = (e: React.KeyboardEvent, role: Role) => {
    if (e.key === "Enter" || e.key === " ") {
      onRoleSelect(role);
      e.preventDefault();
    } else if (e.key === "Escape") {
      onClose();
      e.preventDefault();
    }
  };

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
                onClick={() => onRoleSelect(role)}
                onKeyDown={(e) => handleKeyDown(e, role)}
                role="option"
                aria-selected={role === selectedRole}
                tabIndex={0}
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

export const roles = [
  "Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Mobile Developer",
  "AI Developer",
];

export type Role = (typeof roles)[number];

const RoleSwitcher: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>("Developer");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    closeDropdown();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDropdownOpen) {
        closeDropdown();
      }
    },
    [isDropdownOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="relative inline-flex items-center space-x-2"
      ref={containerRef}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium">
        Building visually striking, inclusive, and intuitive digital spaces as a
      </h1>

      {/* Role Button + Dropdown Container */}
      <div className="relative inline-block">
        <AnimatePresence mode="wait">
          <motion.span
            key={selectedRole}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RoleSwitcher;
