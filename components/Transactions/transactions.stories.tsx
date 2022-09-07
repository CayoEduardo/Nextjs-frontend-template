import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Transactions from "./";

const operations = [
  {
    "DATA LANÇAMENTO": "15/07/2022",
    HISTÓRICO:
      "TED RECEBIDA PORTABILIDADE - 341 7432 287071 CAYO EDUARDO M AMARAL SILVEIRA",
    VALOR: 2800,
    SALDO: 3420.55,
  },
  {
    "DATA LANÇAMENTO": "15/07/2022",
    HISTÓRICO:
      "TRANSFERENCIA A DEBITO - 00019 0049689975 CAYO EDUARDO MENDONCA DO AMARAL S",
    VALOR: -1000,
    SALDO: 2420.55,
  },
  {
    "DATA LANÇAMENTO": "15/07/2022",
    HISTÓRICO:
      "PIX RECEBIDO - Cp :22896431-Cayo Eduardo Mendonca Do Amaral Silve",
    VALOR: 221.42,
    SALDO: 2641.97,
  },
  {
    "DATA LANÇAMENTO": "15/07/2022",
    HISTÓRICO:
      "COMPRA CARTAO - No estabelecimento PIZZERIA LA TAVERNA SOROCABA BR",
    VALOR: -63,
    SALDO: 2578.97,
  },
  {
    "DATA LANÇAMENTO": "18/07/2022",
    HISTÓRICO: "COMPRA CARTAO - No estabelecimento PET MENDES SOROCABA BRA",
    VALOR: -16.74,
    SALDO: 2562.23,
  },
];

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Transactions",
  component: Transactions,
} as ComponentMeta<typeof Transactions>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Transactions> = (args) => (
  <Transactions {...args} />
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  attributes: {
    operations,
  },
};
