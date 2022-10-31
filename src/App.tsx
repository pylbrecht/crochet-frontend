import React, { useState, useEffect } from "react";
import "./App.css";
import * as api from "./infrastructure/apiClient";
import { Project } from "./domain/model";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const projects = await api.getProjects();
    setProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <form>
        <input type="text" placeholder="New project" />
        <input type="submit" value="Create" />
      </form>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
