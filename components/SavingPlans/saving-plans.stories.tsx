// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import SavingPlans from ".";

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SavingPlans",
  component: SavingPlans,
} as ComponentMeta<typeof SavingPlans>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof SavingPlans> = (args) => <SavingPlans />;

//๐ Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};
