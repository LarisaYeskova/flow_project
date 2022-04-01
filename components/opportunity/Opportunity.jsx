import Image from "next/image";
import styles from "./Opportunity.module.css";

export default function Opportunity() {
  return (
    <div className={styles.opportunity_wrapper}>
      <div>
        <p className={styles.opportunity_text}>
          A simple, compliant connection platform. Democratizing opportunities{" "}
          <b> for all.</b>
        </p>
      </div>
      <div className={styles.opportunity_app}>
        <p className={styles.opportunity_app_text}>Get The Mobile App</p>
        <div className={styles.opportunity_app_img}>
          <Image src="/AppStore.png" width="180" height="56" alt="" />
          <Image src="/GooglePlay.png" width="180" height="56" alt="" />
        </div>
      </div>
    </div>
  );
}
