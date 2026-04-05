import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { foodData } from "../data/mockData";

export default function foodChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Food Trends</h3>
      <ResponsiveContainer>
        <BarChart data={foodData}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}