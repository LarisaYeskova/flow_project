import styles from "../styles/Home.module.css";

export default function ProblemSolution() {
  return (
    <div className={styles.problemSolution_wrap}>
      <div className={styles.ProblemSolution}>
        <p className={styles.problemSolution_text}>The Problem</p>
        <img src="./ProblemSolution.png" />
        <p className={styles.problemSolution_text}>The Solution</p>
      </div>

      <div className={styles.problemSolution_paregraph}>
        <p>
          Most student-athletes don't have a legal, compliant, and fair way to
          connect with 3rd parties to capitalize on opportunities afforded by
          the new NIL rules.
        </p>
        <p>
          We've done all of the legwork to make this simple for both parties,
          big or small deals, we can handle it all.
        </p>
      </div>
    </div>
  );
}