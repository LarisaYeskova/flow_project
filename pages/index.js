import Potential from "../components/potential/Potential";
import Clients from "../components/Clients";
import Opportunity from "../components/Opportunity";
import ProblemSolution from "../components/ProblemSolution";

export default function Flow() {
  return (
    <div>
      <Potential />
      <Clients />
      <Opportunity />
      <ProblemSolution />
    </div>
  );
}
