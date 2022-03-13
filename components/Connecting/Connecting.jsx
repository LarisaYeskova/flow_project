import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { connecting } from "./ConnectingList";

export default function Connecting() {
  return (
    <div className={styles.connecting_wrapper}>
      <div className={styles.c_wrap}>
        {connecting.map(({ id, connectingTitle, description, isActive }) => {
          const stl = {
            Color: !isActive ? "grey" : "white",
          };
          // решить почему не работает
          return (
            <div>
              <div className={styles.c_item} style={stl}>
                <div className={styles.c_title}>{connectingTitle}</div>
                <p className={styles.c_des}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {connecting.map(
        ({ id, connectingTitle, description, text, isActive }) => {
          if (isActive) {
            return (
              <div className={styles.c2_wrap}>
                <div className={styles.c2_title}>{connectingTitle}</div>
                <div>
                  <p className={styles.c2_des}>
                    <b>{description}</b>
                  </p>
                  <div className={styles.conn2_text}>{text}</div>
                </div>
                <div className={styles.c2_image}>
                  <Image src="/VectorZ.png" width={224} height={295} />
                </div>
              </div>
            );
          }
        }
      )}

      {/* <div>
        <Image src="/connBG.png" width={961} height={968} />
      </div>

      непонятная штука пятнами */}
    </div>
  );
}
