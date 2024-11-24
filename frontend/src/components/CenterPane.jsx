import MembershipCard from "./Membership";
import AttendanceCard from "./AttendanceCard";
import WorkoutPlanCard from "./WorkoutPlan";
import TrainerCard from "./TrainerCard";
import PaymentCard from "./Payment";
import './CenterPane.css'

function CenterPane() {
  return (
    <div className="center-pane">
      <MembershipCard />
      <AttendanceCard/>
      <WorkoutPlanCard/>
      <TrainerCard/>
      <PaymentCard/>
    </div>
  )
}


export default CenterPane;
