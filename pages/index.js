import React, { useContext } from "react";
import styles from "../styles/StartPage.module.css";
import TypeWriter from "react-typewriter";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const text = "Get your thoughts organized ...";
  const { user } = useContext(UserContext);
  console.log(user);
  return user ? (
    <div className={styles.startPage}>
      <h1 className={styles.textTyped}>
        <TypeWriter typing={0.5}>Hi, {user.displayName}</TypeWriter>
      </h1>
    </div>
  ) : (
    <div className={styles.startPage}>
      <h1 className={styles.textTyped}>
        <TypeWriter typing={0.5} loop>
          {text}
        </TypeWriter>
      </h1>
    </div>
  );
}
