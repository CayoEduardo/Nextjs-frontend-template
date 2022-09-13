// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Spending from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Spending",
  component: Spending,
} as ComponentMeta<typeof Spending>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Spending> = (args) => <Spending />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
