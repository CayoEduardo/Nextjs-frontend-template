// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Spending from ".";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Spending",
  component: Spending,
} as ComponentMeta<typeof Spending>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Spending> = (args) => <Spending />;

//๐ Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
