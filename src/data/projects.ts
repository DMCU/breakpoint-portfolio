export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  challenge: string;
  testing: string;
  contribution: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "UBS",
    category: "FINANCE / ENTERPRISE QA",
    description:
      "Testing complex trading and portfolio management systems where precision matters.",
    color: "#C7F36B",
    challenge:
      "Ensuring the reliability of a complex financial trading and portfolio management platform spanning web, native desktop, legacy systems and backend integrations.",

    testing:
      "End-to-end financial transactions, business rules, pricing calculations, transaction statuses, API integrations and data integrity across Oracle databases.",

    contribution:
      "Designed and executed functional, integration and regression tests. Investigated financial data discrepancies using SQL, maintained a regression suite of approximately 1,000 test cases and supported 4–5 major releases annually.",
  },
  {
    id: 2,
    title: "RCS CLARITAS",
    category: "EV TECHNOLOGY / BATTERY PASSPORT",
    description:
      "Quality assurance for a digital battery passport and traceability platform.",
    color: "#FF8A65",
    challenge:
      "Supporting the reliability of a digital battery passport platform designed to manage battery information and traceability across the electric vehicle ecosystem.",

    testing:
      "Battery passport creation and management workflows, data handling and business rules associated with battery traceability.",

    contribution:
      "Contributed to quality assurance of the platform by validating core functionality, identifying defects and verifying business workflows.",
  },
  {
    id: 3,
    title: "RCS VINE",
    category: "SUPPLY CHAIN / TRACEABILITY",
    description:
      "Validating business workflows across a complex supply chain traceability platform.",
    color: "#A78BFA",
    challenge:
      "Ensuring the reliability of a supply chain traceability platform handling complex, multi-stage business processes.",

    testing:
      "Supply chain tracking workflows, data consistency and business processes related to product traceability.",

    contribution:
      "Performed functional testing, identified data inconsistencies and validated core business workflows across the platform.",
  },
  {
    id: 4,
    title: "INFORMA",
    category: "PLAYWRIGHT / TEST AUTOMATION",
    description:
      "Building end-to-end test automation for a public-facing conference platform.",
    color: "#97D9E8",
    challenge:
      "Improving test coverage and reliability for a public-facing conference schedule platform with dynamic content, search and filtering.",

    testing:
      "Session discovery, day-based navigation, search functionality, filter controls and dynamic UI behavior.",

    contribution:
      "Built a Playwright automation proof of concept using TypeScript, Page Object Model and reusable test helpers. Developed end-to-end scenarios and improved test stability through better locator strategies and synchronization.",
  },
];
