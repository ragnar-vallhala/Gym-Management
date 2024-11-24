import './DashHeader.css'
import MembershipCard from './Membership';

function DashHeader({ name }) {
  return (
    <div className="header">
      <h2>Welcome {name}!</h2>
      <div className='links'>
        <a>Home</a>
        <a>Membership</a>
        <a>Attendance</a>
        <a>Workout Plan</a>
        <a>Trainer</a>
        <a>Payments</a>
        <a>Logout</a>
      </div>
    </div>
  )
}

export default DashHeader;
