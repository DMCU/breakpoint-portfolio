
export type Technology = {
    id: number;
    name: string;
    category: string;
    description: string;
};


export const technologies: Technology[] = [
  {
    id: 1,
    name: "PLAYWRIGHT",
    category: "TEST AUTOMATION",
    description: "End-to-end UI testing with TypeScript, Page Object Model, dynamic locators and CI integration.",
  },
  {
    id: 2,
    name: "POSTMAN",
    category: "API TESTING",
    description: "REST API validation, authentication, negative scenarios and response verification.",
  },
  {
    id: 3,
    name: "TYPESCRIPT",
    category: "DEVELOPMENT",
    description: "Writing maintainable test automation and building interactive web applications.",
  },
  {
    id: 4,
    name: "SQL",
    category: "DATA VALIDATION",
    description: "Backend data verification, complex queries and investigating data inconsistencies.",
  },
  {
    id: 5,
    name: "CYPRESS",
    category: "TEST AUTOMATION",
    description: "Automated end-to-end testing of web applications and business workflows.",
  },
  {
    id: 6,
    name: "PYTHON",
    category: "SCRIPTING",
    description: "Writing scripts, solving programming challenges and developing automation skills.",
  },
  {
    id: 7,
    name: "GIT",
    category: "VERSION CONTROL",
    description: "Branch management, pull requests and collaborative development workflows.",
  },
];

