import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { totalResidents, checkIns } from "../data/mockData";

export default function EngagementChart() {
  const data = [
    { name: "Used App", value: checkIns },
    { name: "Remaining", value: totalResidents - checkIns },
  ];

  const COLORS = ["#4CAF50", "#F5F5F5"]; // strong green + very light grey

  return (
    <div>
      <h3>App Engagement</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          stroke="none" // removes dividing line
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}