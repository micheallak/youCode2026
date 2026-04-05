import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { totalResidents, checkIns } from "../data/mockData";

export default function EngagementChart() {
  const data = [
    { name: "Used App", value: checkIns },
    { name: "Remaining", value: totalResidents - checkIns },
  ];

  const COLORS = ["#4a90b8", "#e4eff5"];

  return (
    <div>
      <h3 style={{ color: "#5a8fa8", marginTop: 0, fontSize: "30px" }}>App Engagement</h3>
      <PieChart width={800} height={340}>
        <Pie data={data} dataKey="value" outerRadius={160} cx={450} stroke="none">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}