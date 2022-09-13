import React from "react";
import styles from "./saving-plans.module.scss";
import SavingPlan from "./SavingPlan/SavingPlan";
const SavingPlans = () => {
  return <div className={styles["wrapper"]}>
    <header>
      <p>Savings Plan</p>
      <p>See all</p>
    </header>
    <hr/>
    <div className={styles['body']}>
      {[1,2,3,4,5,6].map(plan=>{
        return <SavingPlan key={plan}/>
      })}
    </div>
  </div>;
};

export default SavingPlans;
