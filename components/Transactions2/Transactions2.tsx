import React, { useMemo, useState, useEffect } from "react";
import styles from "./transactions2.module.scss";
import Transaction2 from "../Transaction2";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import Button from "../Button";
interface IAttributes {
  operations?: any;
}

interface ITransactionsProps {
  attributes?: IAttributes;
}
const Transactions = ({ attributes = {} }: ITransactionsProps) => {
  const { operations = [] } = attributes;

  const [isActivePlus, setIsActivePlus] = useState(true);
  const [isActiveMinus, setIsActiveMinus] = useState(true);

  const positiveOperations = useMemo(() => {
    return operations.filter((operation: any) => operation["VALOR"] >= 0);
  }, [operations]);

  const negativeOperations = useMemo(() => {
    return operations.filter((operation: any) => operation["VALOR"] < 0);
  }, [operations]);

  const [operationsDisplayed, setOperationsDisplayed] = useState([
    ...operations,
  ]);

  useEffect(() => {
    if (operationsDisplayed) {
      if (isActiveMinus && isActivePlus) {
        setOperationsDisplayed([...positiveOperations, ...negativeOperations]);
      } else if (isActiveMinus && !isActivePlus) {
        setOperationsDisplayed([...negativeOperations]);
      } else if (!isActiveMinus && isActivePlus) {
        setOperationsDisplayed([...positiveOperations]);
      } else setOperationsDisplayed([]);
    }
  }, [isActivePlus, isActiveMinus, positiveOperations, negativeOperations]);

  useEffect(() => {
    console.log("aaacx", operationsDisplayed);
  }, [operationsDisplayed]);

  const setPositiveOperations = () => {
    if (isActivePlus) {
      setIsActivePlus(false);
    } else {
      setIsActivePlus(true);
    }
  };

  const setNegativeOperations = () => {
    if (isActiveMinus) {
      setIsActiveMinus(false);
    } else {
      setIsActiveMinus(true);
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <header>
        <div className={styles["header"]}>
          <p>Transactions</p>
          <p>Date selector</p>
        </div>
        <div className={styles["buttons-wrapper"]}>
          <div className={styles["button-wrapper"]}>
            <Button attributes={{ text: "Todos" }} />
          </div>
          <div className={styles["button-wrapper"]}>
            <Button attributes={{ text: "Entradas" }} />
          </div>
          <div className={styles["button-wrapper"]}>
            <Button attributes={{ text: "Saídas" }} />
          </div>
        </div>
      </header>
      <div className={styles["body"]}>
        {operationsDisplayed.length === 0 ? (
          <div className={styles["body-empty"]}>
            <GrMoney fontSize={"3.5rem"} style={{ color: "white" }} />
            <p>
              Nenhuma transação registrada! Efetue transações para que sejam
              exibidas no menu.
            </p>
          </div>
        ) : (
          operationsDisplayed?.map((operation: any, index: number) => {
            return (
              <Transaction2
                key={`${operation["HISTÓRICO"]}-${index}`}
                attributes={{ operation }}
              />
            );
          })
        )}
        {}
      </div>
    </div>
  );
};

export default Transactions;
