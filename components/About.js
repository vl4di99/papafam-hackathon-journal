import React from "react";
import styles from "../styles/components/About.module.css";
import Image from "next/image";
import sabotage1 from "../images/sabotage1.png";
import sabotage2 from "../images/sabotage2.png";
import sabotage3 from "../images/sabotage3.png";
import sabotage4 from "../images/sabotage4.png";
import sabotage5 from "../images/sabotage5.png";
import sabotage6 from "../images/sabotage6.png";
import sabotage7 from "../images/sabotage7.png";
import sabotage8 from "../images/sabotage8.png";
import sabotage9 from "../images/sabotage9.png";

function About() {
  return (
    <div className={styles.bg}>
      <div className={styles.title}>About</div>
      <div className={styles.title2}>The Three Column Technique</div>
      <div className={styles.horizontalRow}></div>
      <div className={styles.motto}>
        “Your mind believes what you tell it.” — Paul J. Meyer
      </div>
      <div className={styles.listComp}>
        <div className={styles.faces}>
          There are different faces of cognitive distortions:
        </div>
        <ul className={styles.faceList}>
          <li>The blamer</li>
          <li>The catastrophizer</li>
          <li>The downplayer of positives</li>
          <li>The all-or-nothing thinker</li>
          <li>The conclusion jumper</li>
          <li>The denier</li>
          <li>The uncertainty hater</li> <li>The fortune teller</li>
          <li>The negative filterer</li>
          <li>The personalizer</li>
          <li>The fairness judger</li>
          <li>The mind reader</li>
          <li>The labeler</li>
        </ul>
      </div>
      <div className={styles.facts}>
        Cognitive distortions can increase stress, anxiety, and depression.
        Everyone has them, some people have them more often.
      </div>
      <div className={styles.facts}>
        The Three Column Technique is a proven practice for improving your
        internal self-critical dialogue. Here are the key points:
      </div>
      <div className={styles.facts}>
        <ul className={styles.keyPoints}>
          <li>Train yourself to write down your critical thoughts.</li>
          <li>
            Train yourself to write down critical thoughts that run through your
            mind. Identify distortions. Learn why these thoughts are distorted.
          </li>
          <li>
            Talk back to your distorted thoughts. Practice talking back to them
            to develop a more realistic self-evaluation system.
          </li>
        </ul>
        <div className={styles.qu}>What do studies say about this metod?</div>
        <ul className={styles.studies}>
          <li>
            A 2012 meta-study of 269 studies about CBT found that there is “very
            strong” evidence that CBT successfully treats anxiety, anger
            management, and stress. — Department of Psychology, Boston
            University
          </li>
          <li>
            A 2008 study found that Cognitive Behavioral Therapy is as effective
            as antidepressant drug therapy at reducing depression symptoms. —
            University of Pennsylvania School of Medicine
          </li>
          <li>
            A 2008 study examined 300 CBT patients and determined that CBT
            significantly alleviated symptoms of worrying and depression. —
            Department for Anxiety Disorders Overwaal, Forum GGz Nijmegen, The
            Netherlands
          </li>
        </ul>
      </div>
      <div className={styles.pictures}>
        <div className={styles.pic}>
          <Image src={sabotage1} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage2} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage3} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage4} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage5} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage6} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage7} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage8} width="200%" height="200%" />
        </div>
        <div className={styles.pic}>
          <Image src={sabotage9} width="200%" height="200%" />
        </div>
      </div>
    </div>
  );
}

export default About;
