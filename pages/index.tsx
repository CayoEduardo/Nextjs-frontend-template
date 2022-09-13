import type { NextPage } from "next";
import data from "../utils/data.json";
import Transactions from "@/components/Transactions";
import Spending from "@/components/Spending";
import WeeklySpending from "@/components/WeeklySpending";
import styles from "../styles/home.module.scss";
import parsedResponse from "../utils/mocks/csv-parsed-response.json";
import ExpensesByOperation from "@/components/ExpensesByOperation";
import transactions from "../utils/mocks/transactions.json";
import ExpensesByCategory from "@/components/ExpensesByCategory";
import Resume from "@/components/Resume";
import Transactions2 from "@/components/Transactions2";
import SavingPlans from "@/components/SavingPlans";

const Home: NextPage = () => {
  const mockedResponse: any = parsedResponse;
  const { tiposDeOperacao } = mockedResponse;
  const totalOperacoes = tiposDeOperacao["totalOperacoes"];
  // console.log(tiposDeOperacao);

  const categories: any = Object.keys(tiposDeOperacao);
  categories.splice(0, 1);

  const formattedCategories: any = categories.filter((category: any) => {
    return tiposDeOperacao[category]["valor"] < 0;
  });
  const values = formattedCategories.map((category: any) => {
    return Math.abs(Number(tiposDeOperacao[category]["valor"].toFixed(2)));
  });
  values.pop();

  return (
    <div className={styles["wrapper"]}>
      <aside className={styles["sidebar"]}>
      
      </aside>
      <div className={styles["operation-container"]}>
        <div style={{ gridColumn: "1/3", gridRow: "1/2" }}>
          <div style={{ backgroundColor: "#061018", height: "100%" }}>
            <p style={{ fontSize: "1.5rem", color: "white", marginBottom: 12 }}>
              Overview
            </p>
            <Resume classes={["is-margin-bottom-16"]} />
            <ExpensesByCategory classes={["is-margin-top-16"]} />
            <Transactions2 attributes={{ operations: transactions }} />
          </div>
        </div>
        <div style={{ gridColumn: "3/4", gridRow: "1/2" }}>
          {/* <Spending attributes={{ entradas: 52, saidas: 48, total: 100 }} /> */}
          <div style={{ backgroundColor: "#061018", height: "100%" }}>Text</div>
        </div>
        <div style={{ gridColumn: "3/4", gridRow: "1/2" }}>
          {/* <WeeklySpending /> */}
          <SavingPlans />
        </div>
        <div style={{ gridColumn: "2/3", gridRow: "2/3" }}>
          {/* <ExpensesByOperation
            attributes={{
              values,
              categories: formattedCategories,
              total: totalOperacoes,
            }}
          /> */}
        </div>
        <div style={{ gridColumn: "3/4", gridRow: "2/3" }}>
          {/* <ExpensesByCategory /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
