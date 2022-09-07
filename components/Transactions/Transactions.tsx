import React from "react";
import styles from "./transactions.module.scss";
import Transaction from "../Transaction/Transaction";

interface IAttributes {
  operations?: any;
}

interface ITransactionsProps {
  attributes?: IAttributes;
}
const Transactions = ({ attributes = {} }: ITransactionsProps) => {
  const { operations = [] } = attributes;
  return (
    <div className={styles["wrapper"]}>
      <header>
        <p>Transactions</p>
        <p>Date selector</p>
      </header>
      {operations?.map((operation: any) => {
        return (
          <Transaction
            key={operation["HISTÓRICO"]}
            attributes={{ operation }}
          />
        );
      })}
    </div>
  );
};

export default Transactions;
