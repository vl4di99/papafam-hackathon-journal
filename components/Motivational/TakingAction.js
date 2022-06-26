import React, { useState } from "react";
import styles from "../../styles/components/Motivational.module.css";

function TakingAction() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  function handleClick() {
    setData(...data, text);
    setText("");
  }
  return (
    <div className={styles.bg}>
      <div className={styles.title}>Taking action</div>
      <hr />
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div class={styles.ideas2}>I am going to:</div>
          <textarea
            className={styles.textarea}
            rows="2"
            cols="1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>

        <div className={styles.ideas}>
          <div className={styles.ideas2}>
            What limiting beliefs do I have to overcome to achieve this:
          </div>
          <textarea className={styles.textarea} rows="2" cols="1" />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>
      </div>
      <hr />{" "}
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div className={styles.ideas2}>
            What steps do I have to take to get started:
          </div>
          <textarea className={styles.textarea} rows="2" cols="1" />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>

        <div className={styles.ideas}>
          <div className={styles.ideas2}>
            What tools do I need to get started:
          </div>
          <textarea className={styles.textarea} rows="2" cols="1" />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>
      </div>
      <hr />
      <div className={styles.span}>
        <div className={styles.ideas}>
          <div className={styles.ideas2}>Why I am doing this:</div>
          <textarea className={styles.textarea} rows="2" cols="1" />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>
        <div className={styles.ideas}>
          <div className={styles.ideas2}>
            How am I gonna feel when I will achieve this:
          </div>
          <textarea className={styles.textarea} rows="2" cols="1" />
          <button className={styles.button2} onClick={handleClick}>
            ➕
          </button>
        </div>
        <div>
          {data.map((el) => (
            <h3>{el}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TakingAction;
