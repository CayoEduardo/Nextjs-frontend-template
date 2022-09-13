// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Assunto from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Assunto",
  component: Assunto,
} as ComponentMeta<typeof Assunto>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Assunto> = (args) => (
  <Assunto {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  attributes: {
    text: "Política",
    isSelected: false,
  },
};

export const Selected = Template.bind({});
Selected.args = {
  attributes: {
    text: "Política",
    isSelected: true,
  },
};
