// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function MoodChart({ data }) {
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <h3>Mood Trends</h3>
//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <XAxis dataKey="mood" />
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

const moodMap = {
  1: "Terrible",
  2: "Sad",
  3: "Okay",
  4: "Good",
  5: "Great"
};

export default function MoodChart({ timeFilter }) { // accept timeFilter prop
  const [moodData, setMoodData] = useState([]);

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

      const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

      filtered.forEach((entry) => {
        const mood = entry.mood;
        count[mood] = (count[mood] || 0) + 1;
      });

      const chartData = Object.entries(count)
        .sort(([a], [b]) => a - b)
        .map(([mood, count]) => ({
          mood: moodMap[mood],
          count
        }));

      setMoodData(chartData);
    };

    fetchData();
  }, [timeFilter]); // rerun when filter changes

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ color: "#000000" }}>Mood Trends</h3>
      <ResponsiveContainer>
        <BarChart data={moodData}>
          <XAxis dataKey="mood" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4a90b8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}