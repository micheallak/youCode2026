import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function EnergyChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Energy Trends</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}