// import styles from '../styles/Home.module.css'
import Potential from "../components/potential/Potential";
import Clients from "../components/clients/Clients";
import Opportunity from "../components/Opportunity";
import ProblemSolution from "../components/ProblemSolution";
import TextBlock from "../components/TextBlock";
import Covered from "../components/Covered";
import Connecting from "../components/Connecting/Connecting";
import Video from "../components/Video";
import AnyQues from "../components/AnyQues";
import Team from "../components/team/Team";
import Copyright from "../components/Copyright";

export default function Flow() {
  return (
    <div>
      <Potential />
      {/* <div className={styles.clients_wrap}> */}
      <Clients />
      {/* </div> */}
      <TextBlock/>
      <Opportunity />
      <ProblemSolution />
      <Covered/>
      <Connecting/>
      <Video/>
      <AnyQues/>
      <Team/>
      <Copyright/>
      {/* <div className={styles.clients_wrap}> */}
      <Clients />
      {/* </div> */}
    </div>
  );
}