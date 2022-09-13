import React from "react";
import { ApexOptions } from "apexcharts";
import styles from "./expenses-category.module.scss";
import dynamic from "next/dynamic";
import { formatter } from "@/utils/formatter";
import cx from "classnames";

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
  classes?: string | string[];
}

const ExpensesByOperation = ({
  attributes = {},
  classes = "",
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

  let series = [
    {
      name: "Gastos",
      data: [54, 66, 20, 150, 1000, 550],
    },
  ];

  let options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#E94560", "#5CB8E4", "#0F3460", "#533483", "#F57328", "#367E18"],
    plotOptions: {
      bar: {
        distributed: true,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      formatter(val, opts?) {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(val));
      },
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },

    xaxis: {
      categories: [
        "Aluguel",
        "Mercado",
        "Pet",
        "Investimento",
        "Restaurante",
        "Transporte",
      ],
      labels: {
        style: {
          colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
        },
      },
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: ["white"],
        },
      },
    },
    // title: {
    //   text: "Gasto por categoria",
    //   floating: true,
    //   offsetY: 230,
    //   align: "center",
    //   style: {
    //     color: "#fff",
    //   },
    // },
  };

  return (
    <div className={cx(styles["wrapper"], classes)}>
      <header>
        <div>
          <p className={styles["heading"]}>Gasto por categoria</p>
        </div>
        <div>
          <p className={styles["subtext"]}>{`Total de operações: ${0}`}</p>
        </div>
      </header>
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default ExpensesByOperation;
