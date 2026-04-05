import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { energyData } from "../data/mockData";

export default function EnergyChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Energy Trends</h3>
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