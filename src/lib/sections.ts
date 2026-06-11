export const sections = [
  { id: "hero", label: "Home", caption: "Introduction" },
  { id: "about", label: "About", caption: "About Me" },
  { id: "experiences", label: "Experience", caption: "Experience" },
  { id: "works", label: "Works", caption: "Past Works" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
