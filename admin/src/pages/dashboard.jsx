import { useState } from "react";
import MoodChart from "../components/moodChart";
import EnergyChart from "../components/energyChart";
import FoodChart from "../components/foodChart";
import EngagementChart from "../components/engagementChart";
import { totalResidents, checkIns, responses } from "../data/mockData";

export default function Dashboard() {
    const [timeFilter, setTimeFilter] = useState("overall");

    // Filter data
    const filteredData =
        timeFilter === "overall"
            ? responses
            : responses.filter((r) => r.time === timeFilter);

    // ===== COUNTING LOGIC =====

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

    const moodData = Object.keys(moodCounts).map((key) => ({
        mood: key,
        count: moodCounts[key],
    }));

    const energyData = Object.keys(energyCounts).map((key) => ({
        level: key,
        count: energyCounts[key],
    }));

    const foodData = Object.keys(foodCounts).map((key) => ({
        status: key,
        count: foodCounts[key],
    }));

    // ===== STYLES =====

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

    return (
        <div style={{ padding: "20px"}}>
            <h1>Staff Dashboard</h1>
            <p>Anonymous wellbeing trends</p>

            {/* FILTER BUTTONS */}
            <div style={{
                display: "flex", flexDirection: "column",
                right: "20px", top: "5px",
                gap: "10px",   
                width: "120px", position: "absolute"
            }}>
                <button onClick={() => setTimeFilter("morning")}>Morning</button>
                <button onClick={() => setTimeFilter("evening")}>Evening</button>
                <button onClick={() => setTimeFilter("overall")}>Overall</button>
            </div>

            {/* Row 1 */}
            <div style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                <div style={{ flex: 1 }}>
                    <EngagementChart />
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
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
                <MoodChart data={moodData} />
                <EnergyChart data={energyData} />
                <FoodChart data={foodData} />
            </div>
        </div>
    );
}