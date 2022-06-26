import React from "react";
import styles from "../styles/components/Motivational.module.css";
import Link from "next/link";

export default function Motivational() {
  return (
    /*this view will make calls to the ones from the list, when user clicks on any of them, it will open */
    <div className={styles.bg}>
      <h1 className={styles.title}>Motivational page</h1>
      <hr />
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href="/motivational/takingaction">Taking Action</Link>
          </li>
          <li>
            <Link href="/motivational/goalsetting">Goal Setting</Link>
          </li>
          <li>
            <Link href="/motivational/limitingbeliefs">Limiting Beliefs</Link>
          </li>
          <li>
            <Link href="/motivational/fearsetting">Fear Setting</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
