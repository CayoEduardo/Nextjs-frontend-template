import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { formatter } from "@/utils/formatter";
import styles from "./transaction2.module.scss";
interface IAttributes {
  operation: any;
}

interface ITransactionProps {
  attributes: IAttributes;
}

const Transaction = ({ attributes }: ITransactionProps) => {
  const { operation } = attributes;
  let operationType;

  if (
    // operation["HISTÓRICO"].includes("PIX") ||
    operation["HISTÓRICO"]?.includes("TED") ||
    operation["HISTÓRICO"]?.includes("TRANSFERENCIA")
  ) {
    operationType = operation["HISTÓRICO"]
      ?.split("-")[1]
      ?.replace(/[0-9]/g, "")
      ?.trim();
  } else
    operationType = operation["HISTÓRICO"]
      ?.split("-")[1]
      ?.replace("No estabelecimento ", "")
      ?.trim();

  const date = operation["DATA LANÇAMENTO"];
  return (
    <div key={operation["HISTÓRICO"]} className={styles["wrapper"]}>
      <div className={styles["image"]}>
        <BsCashCoin fontSize={"1.25rem"} color="white" />
      </div>
      <div className={styles["infos"]}>
        <p className={styles["title"]}>{operationType}</p>
        <p className={styles["date"]}>{date}</p>
      </div>
      <div className={styles["value"]}>{formatter(operation["VALOR"])}</div>
    </div>
  );
};

export default Transaction;
