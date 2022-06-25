import React from "react";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import logo from "../images/logo.png";

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.part1}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Image src={logo} width="60%" height="60%" />
          </li>
          <li className={styles.listItem}>My Journal</li>
          <li className={styles.listItem}>Thoughts of the day✍️</li>
          <li className={styles.listItem}>Productivity tips&tricks</li>
          <li className={styles.listItem}>Sentimental score</li>
          <li className={styles.listItem}>Hacker's Time Tracking</li>
        </ul>
      </div>
      <div className={styles.part2}>
        <ul className={styles.list2}>
          <li className={styles.listItem2}>Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
