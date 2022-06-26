import React from "react";
import styles from "../../styles/components/Motivational.module.css";

function LimitingBeliefs() {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Limiting Beliefs</div>
      <hr />
      <div className={styles.goalSetting}>
        <div className={styles.goal}>My biggest limiting beliefs are:</div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
        <div className={styles.goal}>{"\n"}What can I do to avoid them:</div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
      </div>
    </div>
  );
}

export default LimitingBeliefs;
