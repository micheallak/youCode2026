// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function EnergyChart({ data }) {
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <h3>Energy Trends</h3>
//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <XAxis dataKey="level" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="count" fill="#4a90b8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

const energyMap = {
  1: "Low",
  2: "Moderate",
  3: "High"
};

export default function EnergyChart({ timeFilter }) { // accept timeFilter prop
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/user-input");
      const data = await res.json();

      // filter backend data based on createdAt
      const filtered =
        timeFilter === "overall"
          ? data
          : data.filter((entry) => {
              if (!entry.createdAt) return false;
              const hour = new Date(entry.createdAt).getHours();
              if (timeFilter === "morning") return hour < 12;
              if (timeFilter === "evening") return hour >= 12;
              return true;
            });

      const count = { 1: 0, 2: 0, 3: 0 };

      filtered.forEach((entry) => {
        const energy = entry.energy;
        count[energy] = (count[energy] || 0) + 1;
      });

      const chartData = Object.entries(count)
        .sort(([a], [b]) => a - b)
        .map(([energy, count]) => ({
          level: energyMap[energy],
          count
        }));

      setEnergyData(chartData);
    };

    fetchData();
  }, [timeFilter]); // rerun when filter changes

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ color: "#000000" }}>Energy Trends</h3>
      <ResponsiveContainer>
        <BarChart data={energyData}>
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4a90b8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}