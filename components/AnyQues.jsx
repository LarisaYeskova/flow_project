import styles from "../styles/Home.module.css";

export default function TextBlock() {
  return (
    <div className={styles.anyQuest_wrap}>
      <p className={styles.anyQuest_text}>
        have any questions? <br />
        stay <span style={{ color: "#642bff" }}>in touch</span>
      </p>
      <button href="#" className={styles.anyQuest_btn}>
        I want to ask
      </button>
    </div>
  );
}
