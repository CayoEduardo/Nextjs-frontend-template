import React from "react";
import { ApexOptions } from "apexcharts";
import styles from "./weekly-spending.module.scss";
import dynamic from "next/dynamic";
import { formatter } from "@/utils/formatter";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WeeklySpending = () => {
  let series = [
    {
      name: "Entrada",
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: "Saída",
      data: [53, 32, 33, 52, 13, 44, 32],
    },
  ];

  let options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    legend: {
      labels: {
        colors: ["white"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      // categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      categories: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      labels: {
        style: {
          colors: ["white", "green"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
          ],
        },
      },
    },
  };

  return (
    <div className={styles["wrapper"]}>
      <header>
        <div>
          <p className={styles["heading"]}>Balanço Semanal</p>
          <p className={styles["value"]}>{formatter(2000)}</p>
        </div>
        <div>
          <p className={styles["subtext"]}>{`Entradas: ${5}`}</p>
          <p className={styles["subtext"]}>{`Saídas: ${5}`}</p>
          <p className={styles["subtext"]}>{`Total de operações: ${10}`}</p>
        </div>
      </header>
      <div className={styles["chart-container"]}>
        <ReactApexChart options={options} series={series} type="bar" />
      </div>
    </div>
  );
};

export default WeeklySpending;
