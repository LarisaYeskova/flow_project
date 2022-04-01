/* eslint-disable react/jsx-key */

import React from "react";
import Image from "next/image";
import styles from "./Clients.module.css";
import { clients } from "./ClientsList";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Clients() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1921 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1441, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const itemClass = {
    padding: 0,
  };
  return (
    <Carousel
      responsive={responsive}
      // swipeable={false}
      draggable={false}
      itemClass={itemClass}
      // showDots={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      arrows={false}
      centerMode={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
    >
      {clients.map(({ name, surname, stats, image }) => (
        <div className={styles.clients_wrap}>
          <div className={styles.clients_container}>
            <Image src={image} width="546" height="700" alt="картинка" />
            <div className={styles.clients_item}>
              <h2 className={styles.clients_name}>
                {name}
                <br />
                {surname}
              </h2>
              <div className={styles.clients_logo}>
                <Image
                  src="/VectorGroup.png"
                  width="84"
                  height="88"
                  alt="картинка"
                />
              </div>
              <h3 className={styles.clients_title}>Key Stats:</h3>
              <p className={styles.clients_paragraph}>{stats}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
