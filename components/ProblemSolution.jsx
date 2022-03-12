import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProblemSolution() {
  return (
    <div className={styles.problemSolution_wrap}>
      <div className={styles.ProblemSolution}>
        <p className={styles.problemSolution_text}>The Problem</p>
        <Image src="/ProblemSolution.png" height="365" width="355" />
        <p className={styles.problemSolution_text}>The Solution</p>
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
