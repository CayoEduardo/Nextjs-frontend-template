import React from "react";
import { ApexOptions } from "apexcharts";
import styles from "./spending.module.scss";
import dynamic from "next/dynamic";
import { formatter } from "@/utils/formatter";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface IAttributes {
  entradas?: number;
  saidas?: number;
  total?: number;
}

interface ISpendingProps {
  attributes?: IAttributes;
}

const Spending = ({ attributes = {} }: ISpendingProps) => {
  const { entradas = 2, saidas = 2, total = 4 } = attributes;
  let series = [saidas, entradas];
  let options: ApexOptions = {
    chart: {
      width: "100%",
      type: "pie",
    },
    labels: ["Saídas", "Entradas"],
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
        fontSize: "26px",
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
      fontSize: "22px",

      labels: {
        colors: ["white"],
        useSeriesColors: false,
      },
    },
    colors: ["#4e3e3c", "#3c4e3e"],
  };
  return (
    <div className={styles["wrapper"]}>
      <header>
        <div>
          <p className={styles["heading"]}>Balanço</p>
          <p className={styles["value"]}>{formatter(2000)}</p>
        </div>
        <div>
          <p className={styles["subtext"]}>{`Entradas: ${entradas}`}</p>
          <p className={styles["subtext"]}>{`Saídas: ${saidas}`}</p>
          <p className={styles["subtext"]}>{`Total de operações: ${total}`}</p>
        </div>
      </header>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default Spending;
