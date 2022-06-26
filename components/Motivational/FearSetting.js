import React from "react";
import styles from "../../styles/components/Motivational.module.css";

function FearSetting() {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Fear Setting</div>
      <hr />
      <div className={styles.goalSetting}>
        <div className={styles.goal}>My biggest fears are:</div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
        <div className={styles.goal}>
          {"\n"}And this is what I will do to beat them:
        </div>
        <textarea className={styles.textarea} rows="5" cols="1" />
        <button className={styles.button}>➕</button>
      </div>
    </div>
  );
}

export default FearSetting;
