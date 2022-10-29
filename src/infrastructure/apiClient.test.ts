import * as api from "./apiClient";
import { v4 as uuidv4 } from "uuid";
import each from "jest-each";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.post("/projects", async (req, res, ctx) => {
    const name = await req.json().then((data) => data.name);

    return res(
      ctx.status(201),
      ctx.json({
        id: uuidv4(),
        name: name,
      })
    );
  }),
  rest.get("/projects", async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: uuidv4(),
          name: "a project",
        },
      ])
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("api", () => {
  each(["a project", "another project"]).it(
    "exposes function to create projects",
    async (name) => {
      const project = await api.createProject(name);

      expect(project.name).toBe(name);
      expect(project).toHaveProperty("id");
    }
  );
  it("exposes a function to get a list of projects", async () => {
    const projects = await api.getProjects();

    expect(projects).toHaveLength(1);

    const [project] = projects;
    expect(project).toHaveProperty("id");
    expect(project).toHaveProperty("name", "a project");
  });
});
