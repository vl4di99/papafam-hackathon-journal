import React from "react";
import styles from "../../styles/components/Motivational.module.css";

function GoalSetting() {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Goal Setting</div>
      <hr />
      <div className={styles.goalSetting}>
        <div className={styles.goal}>My goal is:</div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
        <div className={styles.goal}>{"\n"}Goal Completion Deadline:</div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
      </div>
    </div>
  );
}

export default GoalSetting;
