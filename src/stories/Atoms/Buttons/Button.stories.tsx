import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../../common/componentsV2/Atoms/Buttons/Button";

export default {
  title: "Atoms/Buttons/Default",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Connect wallet</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  isDisabled: true,
};
