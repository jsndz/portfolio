import React, { createContext, useContext, useState } from "react";

const rolesConfig = {
  Developer: {
    projects: ["Dev Project A", "Dev Project B"],
    techStack: ["HTML", "CSS", "JavaScript"],
    colors: {
      primary: "#007ACC",
      background: "#F3F4F6",
    },
  },
  "Frontend Developer": {
    projects: ["Frontend Project A", "Frontend Project B"],
    techStack: ["React", "Tailwind", "Vite"],
    colors: {
      primary: "#1A73E8",
      background: "#FFFFFF",
    },
  },
  "Backend Developer": {
    projects: ["Backend Project A", "Backend Project B"],
    techStack: ["Node.js", "Go", "MongoDB"],
    colors: {
      primary: "#1E3A8A",
      background: "#F3F4F6",
    },
  },
  "Full-Stack Developer": {
    projects: ["FullStack Project A", "FullStack Project B"],
    techStack: ["React", "Node.js", "PostgreSQL"],
    colors: {
      primary: "#4B5563",
      background: "#FFFFFF",
    },
  },
};

type Role = keyof typeof rolesConfig;

interface RoleContextType {
  selectedRole: Role;
  setSelectedRole: React.Dispatch<React.SetStateAction<Role>>;
  roleDetails: {
    projects: string[];
    techStack: string[];
    colors: {
      primary: string;
      background: string;
    };
  };
}

const RoleContext = createContext<RoleContextType | null>(null);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedRole, setSelectedRole] = useState<Role>("Developer");
  const roleDetails = rolesConfig[selectedRole];

  return (
    <RoleContext.Provider
      value={{ selectedRole, setSelectedRole, roleDetails }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
