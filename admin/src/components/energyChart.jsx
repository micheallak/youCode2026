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
}


export default function EnergyChart({ data }) {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8080/api/user-input')
      const data = await res.json()
      console.log(data)

      const count = { 1:0, 2:0, 3:0 }
      data.forEach(entry => {
        const energy = entry.energy 
        count[energy] = (count[energy] || 0) + 1
      })

      const chartData = Object.entries(count).sort(([a], [b]) => a - b).map(([energy, count]) => ({ level: energyMap[energy], count }))
      setEnergyData(chartData)
    } 
    fetchData()
  }, [])

  return (
    <div style={{ flex: 1, height: 300 }}>
      <h3 style={{ color: '#000000' }}>Energy Trends</h3>
      <ResponsiveContainer>
        <BarChart data={energyData} margin={{right: 60}}>
          <XAxis dataKey="level" ticks={["Low", "Moderate", "High"]} interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}