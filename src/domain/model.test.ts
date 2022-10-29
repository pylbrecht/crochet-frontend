import { v4 as uuidv4 } from "uuid";
import { Project } from "./model";

describe("Project model", () => {
  it("has an id and a name", () => {
    const id = uuidv4();
    const name = "a project";

    const project = new Project(id, name);

    expect(project).toHaveProperty("id", id);
    expect(project).toHaveProperty("name", "a project");
  });
});
