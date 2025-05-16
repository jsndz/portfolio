import React, { createContext, useContext, useEffect, useState } from "react";
import { rolesConfig } from "./types";

type Role = keyof typeof rolesConfig;

interface RoleContextType {
  selectedRole: Role;
  setSelectedRole: React.Dispatch<React.SetStateAction<Role>>;
  roleDetails: {
    projectIds: string[];
    languages: string[];
    tools: string[];
    databases?: string[];
    colors: {
      primary: string;
      background: string;
      secondary: string;
      tertiary: string;
      accent: string;
    };
  };
}

const RoleContext = createContext<RoleContextType | null>(null);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedRole, setSelectedRole] = useState<Role>("Software Engineer");

  const roleConfig = rolesConfig[selectedRole];
  const roleDetails = {
    ...roleConfig,
    projectIds: roleConfig.projectIds.map((id) => id.toString()),
  };

  useEffect(() => {
    const colors = roleConfig.colors;
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}-color`, value);
    });
  }, [selectedRole]);

  return (
    <RoleContext.Provider
      value={{ selectedRole, setSelectedRole, roleDetails }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used within RoleProvider");
  return context;
};
