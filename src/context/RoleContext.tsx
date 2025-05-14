import React, { createContext, useContext, useReducer } from "react";

export const rolesConfig = {
  "Frontend Developer": {
    projects: ["Frontend Project A", "Frontend Project B"],
    techStack: ["React", "Tailwind", "Vite"],
    colors: {
      primary: "#1A73E8",
      background: "#FFFFFF",
      secondary: "#333333",
      tertiary: "#666666",
      accent: "#888888",
    },
  },
  "Backend Developer": {
    projects: ["Backend Project A", "Backend Project B"],
    techStack: ["Node.js", "Go", "MongoDB"],
    colors: {
      primary: "#1E3A8A",
      background: "#F3F4F6",
      secondary: "#2D3748",
      tertiary: "#4A5568",
      accent: "#718096",
    },
  },
  "Full-Stack Developer": {
    projects: ["FullStack Project A", "FullStack Project B"],
    techStack: ["React", "Node.js", "PostgreSQL"],
    colors: {
      primary: "#4B5563",
      background: "#FFFFFF",
      secondary: "#2C2F33",
      tertiary: "#99AAB5",
      accent: "#7289DA",
    },
  },
  Developer: {
    projects: ["Dev Project A", "Dev Project B"],
    techStack: ["HTML", "CSS", "JavaScript"],
    colors: {
      primary: "#007ACC",
      background: "#F3F4F6",
      secondary: "#3B4252",
      tertiary: "#4C566A",
      accent: "#81A1C1",
    },
  },
};

type RoleState = {
  role: string;
  config: (typeof rolesConfig)["Frontend Developer"];
};

const initialState: RoleState = {
  role: "Frontend Developer",
  config: rolesConfig["Frontend Developer"],
};

type Action = { type: "SET_ROLE"; payload: keyof typeof rolesConfig };

const roleReducer = (state: RoleState, action: Action): RoleState => {
  switch (action.type) {
    case "SET_ROLE":
      const roleConfig = rolesConfig[action.payload];

      document.documentElement.style.setProperty(
        "--primary-color",
        roleConfig.colors.primary
      );
      document.documentElement.style.setProperty(
        "--background-color",
        roleConfig.colors.background
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        roleConfig.colors.secondary
      );
      document.documentElement.style.setProperty(
        "--tertiary-color",
        roleConfig.colors.tertiary
      );
      document.documentElement.style.setProperty(
        "--accent-color",
        roleConfig.colors.accent
      );

      // Force repaint
      document.documentElement.style.display = "none";
      document.documentElement.offsetHeight;
      document.documentElement.style.display = "";

      return {
        role: action.payload,
        config: rolesConfig[action.payload],
      };
    default:
      return state;
  }
};

const RoleContext = createContext<{
  state: RoleState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(roleReducer, initialState);

  return (
    <RoleContext.Provider value={{ state, dispatch }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);

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
      secondary: string;
      tertiary: string;
      accent: string;
    };
  };
}

const RoleContextV2 = createContext<RoleContextType | null>(null);

export const RoleProviderV2: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedRole, setSelectedRole] = useState<Role>("Developer");
  const roleDetails = rolesConfig[selectedRole as Role];

  return (
    <RoleContextV2.Provider
      value={{ selectedRole, setSelectedRole, roleDetails }}
    >
      {children}
    </RoleContextV2.Provider>
  );
};

export const useRole = () => useContext(RoleContextV2);
function useState<T>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(initialValue);
  return [state, setState];
}
