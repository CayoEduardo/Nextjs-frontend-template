import React from "react";
import { ApexOptions } from "apexcharts";
import styles from "./expenses-operation.module.scss";
import dynamic from "next/dynamic";
import { formatter } from "@/utils/formatter";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface IAttributes {
  total?: number;
  values?: any[];
  categories?: string[];
}

interface IExpensesByOperationProps {
  attributes?: IAttributes;
}

const ExpensesByOperation = ({
  attributes = {},
}: IExpensesByOperationProps) => {
  const {
    values,
    total = 4,
    categories = [
      "Confiança",
      "Pix - Cayo Eduardo",
      "Compra cartão",
      "Pix enviado",
      "Ted Recebido",
    ],
  } = attributes;
  let series = values;
  let options: ApexOptions = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: categories,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "right",
          },
        },
      },
    ],
    dataLabels: {
      style: {
        fontSize: "16px",
        // fontFamily: "Helvetica, Arial, sans-serif",
        // fontWeight: "bold",
        colors: ["white"],
      },
    },
    markers: {
      size: 0,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    legend: {
      fontSize: "12px",

      labels: {
        colors: ["white"],
        useSeriesColors: false,
      },
    },
    colors: [
      "#2e8b57",
      "#6082b6",
      "#ff3800",
      "#ff3855",
      "#ff1493",
      "#e7c9a9",
      "#512c31",
    ],
  };

  return (
    <div className={styles["wrapper"]}>
      <header>
        <div>
          <p className={styles["heading"]}>Gasto por operação</p>
          <p className={styles["value"]}>{formatter(2000)}</p>
        </div>
        <div>
          <p className={styles["subtext"]}>{`Total de operações: ${total}`}</p>
        </div>
      </header>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default ExpensesByOperation;
