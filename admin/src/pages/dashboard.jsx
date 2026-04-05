import { useState } from "react";
import MoodChart from "../components/moodChart";
import EnergyChart from "../components/energyChart";
import FoodChart from "../components/foodChart";
import EngagementChart from "../components/engagementChart";
import { totalResidents, checkIns, responses } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const cardStyle = {
  padding: "24px 28px",
  borderRadius: "12px",
  background: "#ffffff",
  boxShadow: "0 2px 8px rgba(100,160,200,0.15)",
  flex: 1,
};

const numberStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginTop: "10px",
  color: "#4a90b8",
};

const toggleBtn = {
  background: "#ffffff",
  border: "1px solid #c2daea",
  borderRadius: "12px",
  padding: "18px 0",
  fontSize: "20px",
  color: "#5a8fa8",
  cursor: "pointer",
  fontWeight: "700",
  width: "160px",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState("overall");

  const filteredData =
    timeFilter === "overall"
      ? responses
      : responses.filter((r) => r.time === timeFilter);

  const countByKey = (data, key) => {
    const counts = {};
    data.forEach((item) => {
      counts[item[key]] = (counts[item[key]] || 0) + 1;
    });
    return counts;
  };

  const moodCounts = countByKey(filteredData, "mood");
  const energyCounts = countByKey(filteredData, "energy");
  const foodCounts = countByKey(filteredData, "food");

  const moodData = Object.keys(moodCounts).map((key) => ({ mood: key, count: moodCounts[key] }));
  const energyData = Object.keys(energyCounts).map((key) => ({ level: key, count: energyCounts[key] }));
  const foodData = Object.keys(foodCounts).map((key) => ({ status: key, count: foodCounts[key] }));

  return (
    <div className="dashboard-page" style={{
      padding: "40px 48px",
      background: "#dce8f0",
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
    }}>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
        <div style={{ width: 180 }} />
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4a90b8", margin: 0, fontSize: "64px", fontWeight: "800", letterSpacing: "-1px" }}>Staff Dashboard</h1>
          <p style={{ color: "#7aa8c2", margin: "30px 0 0", fontSize: "25px" }}>Anonymous wellbeing trends</p>
        </div>
        <div style={{ width: 180, display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => navigate("/")} style={{ ...toggleBtn, width: "120px", padding: "12px 0" }}>Logout</button>
        </div>
      </div>

      {/* Row 1: Pie | Stat Cards | Toggle Buttons */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center", marginBottom: "48px" }}>

        <div style={{ flex: 1.2 }}>
          <EngagementChart />
        </div>

        <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "35px" }}>
          <div style={cardStyle}>
            <h4 style={{ color: "#7aa8c2", margin: 0, fontSize: "20px" }}>Total Shelter Attendance</h4>
            <p style={numberStyle}>{totalResidents}</p>
          </div>
          <div style={cardStyle}>
            <h4 style={{ color: "#7aa8c2", margin: 0, fontSize: "20px" }}>Total Check-ins</h4>
            <p style={numberStyle}>{checkIns}</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
          <button style={toggleBtn} onClick={() => setTimeFilter("morning")}>Morning</button>
          <button style={toggleBtn} onClick={() => setTimeFilter("evening")}>Evening</button>
          <button style={toggleBtn} onClick={() => setTimeFilter("overall")}>Overall</button>
        </div>

      </div>

      {/* Row 2: Bar Charts */}
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ flex: 1 }}><MoodChart data={moodData} /></div>
        <div style={{ flex: 1 }}><EnergyChart data={energyData} /></div>
        <div style={{ flex: 1 }}><FoodChart data={foodData} /></div>
      </div>

    </div>
  );
}