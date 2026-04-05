import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { moodData } from "../data/mockData";

export default function MoodChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Mood Trends</h3>
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