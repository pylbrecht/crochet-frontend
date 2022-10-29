import { Project } from "../domain/model";
import axios from "axios";

const createProject = async (name: string): Promise<Project> => {
  const { data } = await axios.post("/projects", { name: name });
  return Promise.resolve(new Project(data.id, data.name));
};

const getProjects = async (): Promise<Array<Project>> => {
  const { data: projects } = await axios.get("/projects");
  return Promise.resolve(projects);
};

export { createProject, getProjects };
