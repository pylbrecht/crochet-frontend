import React from "react";
import { Button } from "./Button";

type NewProjectFormProps = {
  onSubmitHandler: (event: React.FormEvent) => void;
};

export const NewProjectForm = ({ onSubmitHandler }: NewProjectFormProps) => {
  return (
    <form className="flex flex-col bg-neutral-50 p-2 drop-shadow rounded-md">
      <label className="ml-1 mb-1" htmlFor="name">
        Project name
      </label>
      <input
        name="name"
        className="mb-5 border border-netural-50 rounded-xl block px-3 py-2"
        type="text"
        placeholder="Beanie"
      />
      <label className="ml-1 mb-1" htmlFor="hook-size">
        Hook size
      </label>
      <input
        name="hook-size"
        className="mb-4 border border-netural-50 rounded-xl block px-3 py-2"
        type="text"
        placeholder="4.5"
      />
      <Button className="mb-1 mx-4" onClick={onSubmitHandler}>
        Save
      </Button>
    </form>
  );
};
