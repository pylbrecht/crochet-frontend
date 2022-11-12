import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectList } from "./ProjectList";
import { Project } from "../domain/model";

export default {
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

const projects = [
  new Project("some-id", "My new project", "4.5"),
  new Project("another-id", "Another project", "13.37"),
  new Project("yet-another-id", "Yet another project", "23.42"),
];
// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const clickHandler = (event: React.MouseEvent<HTMLElement>) => {};
export const Regular: ComponentStory<typeof ProjectList> = () => (
  <ProjectList projects={projects} onClickHandler={clickHandler} />
);
