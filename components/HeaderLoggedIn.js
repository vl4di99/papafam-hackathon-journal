import React, { useContext } from "react";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";
import { UserContext } from "../context/UserContext";

function Header() {
  const { authSignOut } = useContext(UserContext);

  return (
    <nav className={styles.header}>
      <div className={styles.part1}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <Image
                src={logo}
                width="60%"
                height="60%"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/journal/entry">My Journal</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/motivational">Motivational Page</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/score">Sentimental score</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about">About 3 Column Technique</Link>
          </li>
        </ul>
      </div>
      <div className={styles.part2}>
        <ul className={styles.list2}>
          <li>
            <button
              onClick={authSignOut}
              className={`${styles.listItem2} ${styles.logoutButton} ${styles.staticButtons}`}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
