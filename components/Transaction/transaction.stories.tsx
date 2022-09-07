// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Transaction from "./";

const operation = {
  "DATA LANÇAMENTO": "15/08/2022",
  HISTÓRICO: "TED ENVIADA - 102 0002  0000001140324 Cayo Eduardo Mendonca do A",
  VALOR: -1200,
  SALDO: 1942.49,
};

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Transaction",
  component: Transaction,
} as ComponentMeta<typeof Transaction>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Transaction> = (args) => (
  <Transaction {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  attributes: {
    operation,
  },
};
