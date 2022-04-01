import Image from "next/image";
// import styles from "../../styles/Home.module.css";
import PotentialText from "./PotentialText";
import styles from "./Potential.module.css";

export default function Potential({ active, setActive }) {
  return (
    <div className={styles.potential_background}>
      <div className={styles.potential_block}>
        <ul className={styles.potential_nav}>
          <li className={styles.potential_logo}>
            <Image src="/logo.png" width="188" height="48" alt="flow logo" />
          </li>
          <li>
            <p>
              Name. Image. Opportunity. <b>For All.</b>
            </p>
          </li>
          <li>
            <button
              onClick={() => setActive(true)}
              className={styles.potential_btn}
            >
              Get in touch
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.potential_arrow_wrap}>
        <Image
          className={styles.potential_arrow_img}
          src="/component.png"
          width="11"
          height="162"
          alt=""
        />
      </div>
      <div className={styles.potential_text}>
        <h3>Name. Image. Likeness.</h3>
        <h2>
          Small Words <br />
          Huge Potential.
        </h2>
        <div className={styles.potential_text_wrap}>
          <PotentialText text="We make it easy for athletes and third parties to work together in simple, compliant, safe environment." />
          <PotentialText text="No more wondering where to start, no more sliding into DMs, nothing holding you back." />
          <div className={styles.picture}>
            <div className={styles.potential_image}>
              <Image src="/Group.png" width="150" height="156" alt="" />
            </div>
            <div className={styles.potential_vector}>
              <Image src="/Vector.png" width="55" height="73" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
