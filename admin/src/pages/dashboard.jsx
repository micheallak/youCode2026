import MoodChart from "../components/moodChart";
import EnergyChart from "../components/energyChart";
import FoodChart from "../components/foodChart";
import EngagementChart from "../components/engagementChart";
import { totalResidents, checkIns } from "../data/mockData";

const cardStyle = {
  padding: "20px",
  borderRadius: "12px",
  background: "#f9f9f9",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const numberStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "10px",
};

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Staff Dashboard</h1>
      <p>Anonymous wellbeing trends</p>

      {/* Row 1 */}
<div style={{ 
  display: "flex", 
  gap: "30px", 
  alignItems: "center",
  marginBottom: "40px"
}}>

  {/* Pie Chart */}
  <div style={{ flex: 1 }}>
    <EngagementChart />
  </div>

  {/* Text Boxes */}
  <div style={{ 
    flex: 1, 
    display: "flex", 
    flexDirection: "column", 
    gap: "20px" 
  }}>
    
    <div style={cardStyle}>
      <h4>Total Shelter Attendance</h4>
      <p style={numberStyle}>{totalResidents}</p>
    </div>

    <div style={cardStyle}>
      <h4>Total Check-ins</h4>
      <p style={numberStyle}>{checkIns}</p>
    </div>

  </div>

</div>

      

      {/* Row 2 */}
      <div style={{ display: "flex", gap: "20px" }}>
        <MoodChart />
        <EnergyChart />
        <FoodChart />
      </div>
    </div>
  );
}