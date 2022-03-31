import styles from "./TextBlock.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TextBlock() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1921 },
      items: 4,
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
      items: 2,
    },
  };

  const itemClass = {
    padding: 0,
  };

  return (
    <div className={styles.textBlock_wrap}>
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
        customTransition="transform 0.6s ease-in-out"
        transitionDuration={500}
      >
        <span>GAME</span>
        <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>GAME</span>
        <span>GAME</span>
        <span>GAME</span>
        <span>GAME</span>
        <span>GAME</span>
      </Carousel>

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
        customTransition="transform 0.6s ease-in-out"
        transitionDuration={500}
      >
        <span> CASH </span>
        <span> CASH </span>
        <span style={{ color: "rgba(255, 255, 255, 0.3)" }}> CASH </span>

        <span> CASH </span>
        <span> CASH </span>
        <span> CASH </span>
        {/* <span> CASH </span> */}
      </Carousel>

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
        customTransition="transform 0.6s ease-in-out"
        transitionDuration={500}
      >
        <span> DEAL </span>
        <span> DEAL </span>
        <span> DEAL </span>
        <span style={{ color: "rgba(255, 255, 255, 0.3)" }}> DEAL </span>

        <span> DEAL </span>
        <span> DEAL </span>
        {/* <span> DEAL </span> */}
      </Carousel>

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
        <span> FLOW </span>
        <span
          style={{
            color: "rgba(123, 74, 255, 1)",
            fontFamily: "AryaW00-Double",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "110px",
            lineHeight: "137px",
          }}
        >
          {" "}
          FLOW{" "}
        </span>
        <span> FLOW </span>
        <span> FLOW </span>
        <span> FLOW </span>
        {/* <span> FLOW </span>
        <span> FLOW </span>
        <span> FLOW </span> */}
      </Carousel>
    </div>
  );
}
