// utils.ts
import { rolesConfig, projects } from "./types";
import { WorkProject } from "./types";

export function getProjectsForRole(role: string): WorkProject[] {
  const config = rolesConfig[role as keyof typeof rolesConfig];
  if (!config) return [];
  return projects.filter((p) => config.projectIds.includes(p.id));
}
