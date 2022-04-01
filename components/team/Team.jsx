import React from "react";
import styles from "./Team.module.css";
import Image from "next/image";
import { staff } from "./TeamList";

export default function Team() {
  return (
    <div>
      <div className={styles.team_wrap}>
        <div className={styles.team_logo}>
          <Image src="/Vector.png" width="65" height="85" alt="" />
        </div>
        <p className={styles.team_text}>
          Our{" "}
          <span
            style={{
              color: "black",
              paddingRight: "58px",
              letterSpacing: "0",
            }}
          >
            Our Team
          </span>{" "}
          Team
        </p>
      </div>

      <div className={styles.team_staff_wrap}>
        {staff.map(
          ({
            name,
            surname,
            stats,
            stats2,
            linkedin,
            facebook,
            twitter,
            image,
            position,
          }) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <div className={styles.team_item}>
                <div className={styles.team_img}>
                  <Image src={image} width="445" height="391" alt="" />
                </div>

                <h2 className={styles.team_name}>
                  {name}
                  <br />
                  {surname}
                  <p className={styles.team_position}>{position}</p>
                </h2>

                <div className={styles.team_sosial}>
                  {" "}
                  <p className={styles.team_sosial_item}>{linkedin}</p>{" "}
                  <p className={styles.team_sosial_item}>{facebook}</p>
                  <p className={styles.team_sosial_item}>{twitter}</p>
                </div>
              </div>
              <div>
                <p className={styles.team_state}>{stats}</p>
                <p className={styles.team_state2}>{stats2}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
