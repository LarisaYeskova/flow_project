import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Copyright() {
  return (
    <div className={styles.copyright_wrap}>
      <div>
        <Image src="/logoDark.png" width={260} height={55} />
      </div>

      <div className={styles.copyright_textList}>
        <ul className={styles.copyright_textList_item}>
          <li>Legal</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>

        <p className={styles.copyright_label}>Flow © 2022</p>
        <ul className={styles.copyright_textList_item}>
          <li>facebook</li>
          <li>instagram</li>
          <li>Linkedin</li>
        </ul>
      </div>

      <div behavior="scroll" direction="left" className={styles.copyright_text}>
        opportunity for all opportunity{" "}
        {/* for all opportunity for all oppor */}
      </div>
    </div>
  );
}
