import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import WeeklySpending from "./";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "WeeklySpending",
  component: WeeklySpending,
} as ComponentMeta<typeof WeeklySpending>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof WeeklySpending> = (args) => (
  <WeeklySpending />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
