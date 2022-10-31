import React, { useState, useEffect, FormEvent } from "react";
import "./App.css";
import * as api from "./infrastructure/apiClient";
import { Project } from "./domain/model";

function App() {
  const [name, setName] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    const projects = await api.getProjects();
    setProjects(projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleName = (event: FormEvent) => {
    const element = event.target as HTMLInputElement;
    setName(element.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    api.createProject(name).then((project) => {
      setProjects([project, ...projects]);
    });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New project" onChange={handleName} />
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
