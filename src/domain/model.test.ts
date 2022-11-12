import { v4 as uuidv4 } from "uuid";
import { Project } from "./model";

describe("Project model", () => {
  it("has required attributes", () => {
    const id = uuidv4();
    const name = "a project";
    const hookSize = "4.5";

    const project = new Project(id, name, hookSize);

    expect(project).toHaveProperty("id", id);
    expect(project).toHaveProperty("name", name);
    expect(project).toHaveProperty("hookSize", hookSize);
  });
});
