import React, { Component } from "react";
import styles from "./Video.module.css";
import Image from "next/image";

export default function Video() {
  return (
    <div className={styles.video_wrap}>
      <div className={styles.video_text_wrap}>
        <p className={styles.video_text}>
          more about
          <br /> &nbsp; &nbsp; &nbsp; &nbsp; us & u
        </p>
      </div>

      <div className={styles.video}>
        <div className={styles.video_img}>
          <Image src="/videoImg.png" width={1010} height={568} alt="video" />
        </div>
        <div className={styles.video_logo}>
          <Image src="/videoLogo.png" width={292} height={307} alt="logo" />
        </div>
        <div className={styles.video_click_wrap}>
          <p className={styles.video_click}>
            click <br />
            to view
          </p>
        </div>
        <div className={styles.video_flow}>
          <Image src="/logo.png" width={124} height={31} alt="flow" />
        </div>
      </div>
    </div>
  );
}
