import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Hello: ComponentStory<typeof Button> = () => <Button onClick={() => {}}>Hello World</Button>;
