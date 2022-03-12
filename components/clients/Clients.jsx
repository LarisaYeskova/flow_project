import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { clients } from "./ClientsList";
// import Slider from "react-slick";

export default function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <Slider {...settings}>
    <div className={styles.clients_wrap}>
      {clients.map(({ name, surname, stats, image }) => (
        <div className={styles.clients_wrap}>
          <div className={styles.clients_container}>
            <Image src={image} width="546" height="700" />
            <div className={styles.clients_item}>
              <h2 className={styles.clients_name}>
                {name}
                <br />
                {surname}
              </h2>
              <Image
                className={styles.clients_logo}
                src="/VectorGroup.png"
                width="84"
                height="88"
              />
              <h3 className={styles.clients_title}>Key Stats:</h3>
              <p className={styles.clients_paragraph}>{stats}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </Slider>
  );
}
