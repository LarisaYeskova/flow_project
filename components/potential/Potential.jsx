import styles from "../styles/Home.module.css";
import PotentialText from "./PotentialText";

export default function Potential(prop) {
  return (
    <div>
      <header>
        <div class={styles.potential_background}>
          <div className={styles.wrapper}>
            <div class={styles.potential_block}>
              <ul class={styles.potential_nav}>
                <li>
                  <img
                    src="/logo.png"
                    width="188"
                    height="48"
                    alt="flow logo"
                  />
                </li>
                <li>
                  <p>
                    Name. Image. Opportunity. <b>For All.</b>
                  </p>
                </li>
                <li>
                  <button className={styles.potential_btn}>Get in touch</button>
                </li>
              </ul>
            </div>

            <div className={styles.potential_text}>
              <h3 className={styles.potential_text}>Name. Image. Likeness.</h3>
              <h2>
                Small Words
                <br />
                Huge Potential.
              </h2>
              <div className={styles.potential_text_wrap}>
                <PotentialText text="We make it easy for athletes and third parties to work together in simple, compliant, safe environment." />
                <PotentialText text="No more wondering where to start, no more sliding into DMs, nothing holding you back." />
                <div className={styles.picture}>
                  <img
                    className={styles.potential_image}
                    src="/Group.png"
                    width="150"
                    height="156"
                  />
                  <img
                    className={styles.potential_vector}
                    src="/Vector.png"
                    width="55"
                    height="73"
                  />
                </div>
              </div>
            </div>
            <div className={styles.potential_arrow_wrap}>
              <p className={styles.potential_arrow_text}>explore</p>
              <img className={styles.potential_arrow_img} src="/arrow.png" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
