import Image from "next/image";
import styles from "./Connecting.module.css";
import { useState } from "react";
import { connecting } from "./ConnectingList";

export default function Connecting() {
  const [list, setList] = useState(connecting);

  console.log(list);

  const toggleActive = (inputId) => {
    console.log(inputId);
    setList((prev) => {
      const newList = prev.map((item) => {
        const { id, isActive } = item;

        return {
          ...item,
          isActive: inputId === id ? !isActive : isActive,
        };
      });
      return newList;
    });
  };

  return (
    <div className={styles.connecting_wrapper}>
      <div className={styles.c_wrap}>
        {connecting.map(({ id, connectingTitle, description, isActive }) => {
          return (
            <div>
              <div
                onClick={() => toggleActive({ id })}
                className={styles.c_item}
                id={id}
              >
                <div className={styles.c_title}>{connectingTitle}</div>
                <p className={styles.c_des}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {connecting.map(
        ({ id, connectingTitle, description, text, isActive }) => {
          console.log({ isActive });
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
