import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MoodChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Mood Trends</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="mood" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4a90b8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}