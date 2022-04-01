/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import styles from "./Covered.module.css";

export default function Covered() {
  return (
    <div className={styles.covered_wrapper}>
      <div className={styles.covered_img}>
        <Image
          src="/footballman.png"
          height={760}
          width={1235}
          alt="картинка"
        />

        <div className={styles.covered_logo}>
          <Image
            src="/VectorGroup.png"
            width="188"
            height="197"
            alt="картинка"
          />
        </div>
        <div className={styles.covered_wrap}>
          <h2 className={styles.covered_title}>
            Contacts. Compliance. Payments. Disputes.
          </h2>
          <p className={styles.convered_text1}>
            these are challenges for any NIL deal, regardless of size, that you
            won't have to worry about because
          </p>
          <div className={styles.textdbl_wrap}>
            <p className={style.dblfont}>FLOW </p>
            <p className={styles.convered_text2}> has you covered.</p>
          </div>
          <p className={styles.convered_text3}>
            Nothing can stop you on the field and{" "}
            <b>nothing can stop you here.</b>
          </p>
        </div>
      </div>
    </div>
  );
}
