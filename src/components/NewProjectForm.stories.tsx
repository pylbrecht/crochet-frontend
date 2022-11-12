import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewProjectForm } from "./NewProjectForm";

export default {
  component: NewProjectForm,
} as ComponentMeta<typeof NewProjectForm>;

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();
};
export const Regular: ComponentStory<typeof NewProjectForm> = () => (
  <NewProjectForm onSubmitHandler={submitHandler} />
);
