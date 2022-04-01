/* eslint-disable react/no-unknown-property */
import React from "react";
import styles from "./PopUp.module.css";
import Image from "next/image";

export default function PopUp({ active, setActive }) {
  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popUp_wrap}>
          <div className={styles.popUp_wrap_head}>
            <p className={styles.popUp_flow}>flow</p>
            <button
              className={styles.popUp_btn}
              onClick={() => setActive(false)}
            >
              Close
            </button>
          </div>

          <div className={styles.popUp_wrap_section}>
            <div className={styles.popUp_wrap_black}>
              <div className={styles.popUp_title}>
                <p>let’s</p>
                <p style={{ color: "#7745FF" }}>get in touch</p>
              </div>

              <p className={styles.popUp_section_text}>
                Ask us anything or just say hi...
              </p>
              <div className={styles.popUp_contact}>
                <p className={styles.popUp_section_text_title}>Talk to us</p>
                <p className={styles.popUp_section_text}>+1 234 567 890</p>
                <p className={styles.popUp_section_text}>
                  flow@flowathlets.com
                </p>
              </div>
              <div className={styles.popUp_sosial}>
                <p className={styles.popUp_item}>linkedin</p>
                <p className={styles.popUp_item}>facebook</p>
                <p className={styles.popUp_item}>twitter</p>
              </div>
            </div>
            <div className={styles.popUp_wrap_white}>
              <form className={styles.popUp_wrap_white}>
                <div style={{ display: "flex" }}>
                  <div className={styles.popUp_wrap_label}>
                    <label className={styles.formLabel} for="fname">
                      Full Name
                    </label>
                    <input
                      placeholder="John Doe"
                      className={styles.formImput}
                      type="text"
                      id="fname"
                      name="fname"
                    />
                  </div>{" "}
                  <div className={styles.popUp_wrap_label}>
                    <label className={styles.formLabel} for="lname">
                      email
                    </label>
                    <input
                      placeholder="example@yourdomain.com"
                      className={styles.formImput}
                      type="email"
                      id="lname"
                      name="lname"
                    />
                  </div>
                </div>
                <div className={styles.formMassanger}>
                  <label className={styles.formLabel} for="massange">
                    massange
                  </label>
                  <input
                    className={styles.formImput}
                    placeholder="Hi there..."
                    type="text"
                    id="massange"
                    name="lname"
                  />
                </div>
                <button disabled className={styles.popUp_form_btn}>
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className={styles.popUp_img}>
            <Image src="/11111.png" width={642} height={847} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={styles.popUp_close_wrap}>
<div className={styles.popUp_close_title}>
  <p>thank</p>
  <p style={{ color: "#7745FF", paddingLeft: "15px" }}>you</p>
</div>

<p className={styles.popUp_close_text}>
  We will contact you as soon as possible
</p>
<p className={styles.popUp_close_text2}>
  The popup automatically closes after 5 seconds, or you can{" "}
  <p
    style={{ textDecorationLine: "underline", paddingLeft: "10px" }}
    onClick={() => setActive(false)}
  >
    close it
  </p>
</p>
</div> */
}
