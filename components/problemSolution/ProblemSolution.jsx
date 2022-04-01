/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import styles from "./ProblemSolution.module.css";

export default function ProblemSolution() {
  return (
    <div className={styles.problemSolution_wrap}>
      <div className={styles.ProblemSolution}>
        <p className={styles.problemSolution_text}>The Problem</p>
        <div className={styles.problemSolution_img}>
          <Image src="/ProblemSolution.png" height="365" width="355" alt="" />
        </div>
        <p className={styles.problemSolution_text}>The Solution</p>
        <div className={styles.problemSolution_ellipse1}>
          <Image src="/ellipse.png" width={144} height={144} alt="" />
        </div>
        <div className={styles.problemSolution_ellipse2}>
          <Image src="/ellipse.png" width={144} height={144} alt="" />
        </div>
      </div>

      <div className={styles.problemSolution_paragraph_wrap}>
        <p className={styles.problemSolution_paragraph}>
          Most student-athletes don't have a legal, compliant, and fair way to
          connect with 3rd parties to capitalize on opportunities afforded by
          the new NIL rules.
        </p>
        <p className={styles.problemSolution_paragraph}>
          We've done all of the legwork to make this simple for both parties,
          big or small deals, we can handle it all.
        </p>
      </div>
    </div>
  );
}
