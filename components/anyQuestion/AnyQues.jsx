import React from "react";
import styles from "./anyQues.module.css";

export default function AnyQues({ active, setActive }) {
  return (
    <div className={styles.anyQuest_wrap}>
      <div style={{ position: "relative" }}>
        <p className={styles.anyQuest_text}>
          have any questions? <br />
          stay <span style={{ color: "#642bff" }}>in touch</span>
        </p>
        <button onClick={() => setActive(true)} className={styles.anyQuest_btn}>
          I want to ask
        </button>
      </div>
    </div>
  );
}
