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
});
