import { Project } from "../models";

const projects = [
  {
    id: 0,
    title: "Seelenwärmer",
    description: "Lorem ipsum",
    needle: 1,
  },
  {
    id: 1,
    title: "Schal",
    description: "Lorem ipsum",
    needle: 2,
  },
  {
    id: 2,
    title: "Schalütze",
    description: "Lorem ipsum",
    needle: 3,
  },
];

function getProject(id: number): Project | undefined {
  return projects.find(p => p.id === id);
}

function getProjects(): Project[] {
  return projects;
}

export { getProject, getProjects };
