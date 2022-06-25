import React from "react";
import styles from "../styles/components/Motivational.module.css";

function Motivational() {
  return (
    /*this view will make calls to the ones from the list, when user clicks on any of them, it will open */
    <div className={styles.motivational}>
      <h1 className={styles.title}>Motivational page</h1>
      <hr />
      <nav>
        <ul className={styles.ul}>
          <li>Taking Action</li>
          <li>Goal Setting</li>
          <li>Limiting Beliefs</li>
          <li>Fear Setting</li>
        </ul>
      </nav>
    </div>
  );
}

function TakingAction() {
  /* needs improvement as the input bars need to be bigger and maybe nicer*/
  return (
    <div className={styles.takingAction}>
      <div className={styles.title}>Taking action</div>
      <hr />
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div>I am going to:</div>
          <input type="text" size={100} />
        </div>

        <div className={styles.ideas}>
          <div>
            What limiting beliefs do I have to overcome to achieve this:
          </div>
          <input type="text" size={100} />
        </div>
      </div>
      <hr />{" "}
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div>What steps do I have to take to get started:</div>
          <input type="text" size={100} />
        </div>

        <div className={styles.ideas}>
          <div>What tools do I need to get started:</div>{" "}
          <input type="text" size={100} />
        </div>
      </div>
      <hr />
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div>Why I am doing this:</div> <input type="text" size={100} />
        </div>
        <div className={styles.ideas}>
          <div>How am I gonna feel when I will achieve this:</div>
          <input type="text" size={100} />
        </div>
      </div>
    </div>
  );
}

function GoalSetting() {
  return <div className={styles.goalSetting}></div>;
  /*to be continued*/
}

export default Motivational;
