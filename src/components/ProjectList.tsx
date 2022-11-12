import React from "react";
import { Project } from "../domain/model";

type ProjectListProps = {
  projects: Project[];
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
};

export const ProjectList = ({ projects, onClickHandler }: ProjectListProps) => {
  return (
    <ul className="bg-neutral-50 rounded-lg drop-shadow">
      {projects.map((project) => (
        <li
          className="border-b p-2 hover:cursor-pointer"
          key={project.id}
          onClick={onClickHandler}
        >
          <div className="flex">
            <div className="w-16 h-16 inline-block bg-neutral-900 m-1"></div>
            <div className="flex flex-col justify-around ml-3 mb-1">
              <h2 className="inline text-xl font-bold">{project.name}</h2>
              <p>Hook size: {project.hookSize}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
