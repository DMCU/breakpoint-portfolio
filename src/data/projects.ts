export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "HALO",
    category: "QA / DATA ANALYTICS",
    description: "Quality assurance for a sprint analytics platform.",
    color: "#C7F36B",
  },
  {
    id: 2,
    title: "VOICE",
    category: "QA / WEB APPLICATION",
    description: "Testing an interactive voting platform.",
    color: "#FF8A65",
  },
  {
    id: 3,
    title: "SCHEDULE VIEWER",
    category: "PLAYWRIGHT / AUTOMATION",
    description: "End-to-end automation for a conference schedule.",
    color: "#A78BFA",
  },
  {
    id: 4,
    title: "FaithGuardian",
    category: "Social",
    description: "Raise violence related incidents",
    color: "#97d9e8"
  },
];
