import { formatter } from "@/utils/formatter";
import cx from "classnames";
import React from "react";
import {
  BsCashCoin,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  BsFillCalendarFill,
} from "react-icons/bs";
import styles from "./resume.module.scss";

interface IResumeProps {
  classes?: string | string[];
}

const Resume = ({ classes = "" }: IResumeProps) => {
  return (
    <div className={`${cx(classes, styles["wrapper"])}`}>
      <div className={styles["wrapper-item"]}>
        <div className={styles["image"]}>
          <BsFillArrowUpCircleFill fontSize={"1.25rem"} color="white" />
        </div>
        <div>
          <p>Total earnings</p>
          <p>{formatter(300)}</p>
        </div>
      </div>
      <div className={styles["wrapper-item"]}>
        <div className={styles["image"]}>
          <BsFillArrowDownCircleFill fontSize={"1.25rem"} />
        </div>
        <div>
          <p>Total earnings</p>
          <p>{formatter(300)}</p>
        </div>
      </div>
      <div className={styles["wrapper-item"]}>
        <div className={styles["image"]}>
          <BsFillCalendarFill fontSize={"1.25rem"} color="white" />
        </div>
        <div>
          <p>Total earnings</p>
          <p>{formatter(300)}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
