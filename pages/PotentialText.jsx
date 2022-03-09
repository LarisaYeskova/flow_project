import styles from "../styles/Home.module.css";
export default function PotentialText(prop) {
  return (
    <div>
      <p className={styles.potential_text_paragraph}>{prop.text}</p>
    </div>
  );
}
