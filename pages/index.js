import styles from "../styles/Home.module.css";

import Potential from "../components/potential/Potential";
import Clients from "../components/clients/Clients";
import Opportunity from "../components/opportunity/Opportunity";
import ProblemSolution from "../components/problemSolution/ProblemSolution";
import TextBlock from "../components/textBlock/TextBlock";
import Covered from "../components/covered/Covered";
import Connecting from "../components/Connecting/Connecting";
import Video from "../components/video/Video";
import AnyQues from "../components/anyQuestion/AnyQues";
import Team from "../components/team/Team";
import Copyright from "../components/copyright/Copyright";
import PopUp from '../components/popUp/PopUp'
import { useState } from "react";
// import {
//   Potential,
//   Clients,
//   Opportunity,
//   ProblemSolution,
//   TextBlock,
//   Covered,
//   Connecting,
//   Video,
//   AnyQues,
//   Team,
//   Copyright,}
// from "../components";
// TODO разобраться почему не работает такой импорт

export default function Flow() {
  const [activeModal, setActiveModal] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Potential active={activeModal} setActive={setActiveModal} />
      <Clients />
      <TextBlock />
      <Opportunity />
      <ProblemSolution />
      <Covered />
      <Connecting />
      <Video />
      <AnyQues active={activeModal} setActive={setActiveModal} />
      <Team />
      <Copyright />
      <Clients />
      <PopUp active={activeModal} setActive={setActiveModal} />
    </div>
  );
}
