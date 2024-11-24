import './Dashboard.css'
import DashHeader from '../components/DashHeader';
import CenterPane from '../components/CenterPane';

function Dashboard(){
  return(
  <div className="dashboard">
      <DashHeader name={"Ashu"}/>
        <CenterPane/>
    </div>
  )
}

export default Dashboard;
