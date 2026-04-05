// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function FoodChart({ data }) {
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <h3>Food Trends</h3>
//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <XAxis dataKey="status" />
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

export default function FoodChart({ timeFilter }) { // accept timeFilter prop
  const [foodData, setFoodData] = useState([]);

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

      const count = { Yes: 0, No: 0 };

      filtered.forEach((entry) => {
        // backend field is food_status
        if (entry.food_status === 1) {
          count.Yes++;
        } else {
          count.No++;
        }
      });

      setFoodData([
        { status: "Yes", count: count.Yes },
        { status: "No", count: count.No }
      ]);
    };

    fetchData();
  }, [timeFilter]); // rerun when filter changes

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ color: "#000000" }}>Food Trends</h3>
      <ResponsiveContainer>
        <BarChart data={foodData}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4a90b8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}