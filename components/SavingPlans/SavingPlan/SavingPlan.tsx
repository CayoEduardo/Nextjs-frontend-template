import React from 'react'
import styles from './saving-plan.module.scss'

const SavingPlan = () => {
  return (
    <div className={styles['wrapper']}>
        <header>
            <p className={styles['title']}>Bali Vacation</p>
            <p className={styles['date']}>Target: August 25 2022</p>
        </header>
        <div className={styles['goal-info']}>
            <p>$790,21/<span>$1000</span></p>
            <p>78%</p>
        </div>
        <div className={styles['progress-wrapper']}>
            <div className={styles['progress']}/>
        </div>
    </div>
  )
}

export default SavingPlan