import { Project } from "../domain/model";
import axios from "axios";

const createProject = async (name: string): Promise<Project> => {
  const { data } = await axios.post("/projects", { name: name });
  return Promise.resolve(new Project(data.id, data.name, data.hook_size));
};

type ProjectResponse = {
  id: string;
  name: string;
  hook_size: string;
};

const getProjects = async (): Promise<Array<Project>> => {
  const { data: projects } = await axios.get("/projects");
  return Promise.resolve(
    projects.map(
      ({ id, name, hook_size: hookSize }: ProjectResponse) =>
        new Project(id, name, hookSize)
    )
  );
};

export { createProject, getProjects };
