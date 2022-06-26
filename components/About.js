import React from "react";
import styles from "../styles/components/About.module.css";
import Image from "next/image";
import sabotage1 from "../images/sabotage1.png";

function About() {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>About</div>
      <div className={styles.title2}>The Three Column Technique</div>
      <hr />
      <div className={styles.listComp}>
        <div className={styles.faces}>
          There are different faces of cognitive distortions:
        </div>
        <ul className={styles.faceList}>
          <li>The blamer</li>
          <li>The downplayer of positives</li>
          <li>The catastrophizer</li>
          <li>The all-or-nothing thinker</li>
          <li>The conclusion jumper</li>
          <li>The denier</li>
          <li>The uncertainty hater</li>
          <li>The fortune teller</li>
          <li>The negative filterer</li>
          <li>The personalizer</li>
          <li>The fairness judger</li>
          <li>The mind reader</li>
          <li>The labeler</li>
        </ul>
      </div>
      <div className={styles.pictures}>
        <div className={styles.pic1}>
          <Image src={sabotage1} width="10%" height="10%" />
        </div>
      </div>
    </div>
  );
}

export default About;
