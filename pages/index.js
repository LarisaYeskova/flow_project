import Potential from "../components/potential/Potential";
import Clients from "../components/clients/Clients";
import Opportunity from "../components/Opportunity";
import ProblemSolution from "../components/ProblemSolution";
import TextBlock from "../components/TextBlock";

export default function Flow() {
  return (
    <div>
      <Potential />
      <Clients />
      <TextBlock/>
      <Opportunity />
      <ProblemSolution />
    </div>
  );
}

