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
          <li className={styles.listItem}>
            Welcome to our Hacker's Journaling Website!
          </li>
        </ul>
      </div>
      <div className={styles.part2}>
        <ul className={styles.list2}>
          <li className={styles.listItem2}>Log in</li>
          <li className={styles.listItem2}>Get started</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
