import { Project } from "../domain/model";
import axios from "axios";

const createProject = async (name: string): Promise<Project> => {
  const { data } = await axios.post("/projects", { name: name });
  return Promise.resolve(new Project(data.id, data.name));
};

export { createProject };
