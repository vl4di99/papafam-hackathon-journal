import React from "react";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.part1}>
        <ul className={styles.list}>
          <li className={`${styles.listItem} ${styles.logoImage}`}>
            <Link href="/">
              <Image src={logo} width="60%" height="60%" />
            </Link>
          </li>
          <li className={`${styles.listItem} ${styles.welcomeText}`}>
            Welcome to our Hacker&apos;s Journaling Website!
          </li>
        </ul>
      </div>
      <div className={styles.part2}>
        <ul className={styles.list2}>
          <li>
            <Link href="/auth/login">
              <button
                className={`${styles.listItem2} ${styles.loginButton} ${styles.staticButtons}`}
              >
                Log in
              </button>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
              <button
                className={`${styles.listItem2} ${styles.getStartedButton} ${styles.staticButtons}`}
              >
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
