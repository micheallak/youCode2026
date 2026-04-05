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
}

export default function MoodChart({ data }) {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8080/api/user-input')
      const data = await res.json()
      console.log(data)

      const count = { 1:0, 2:0, 3:0, 4:0, 5:0}
      data.forEach(entry => {
        const mood = entry.mood 
        count[mood] = (count[mood] || 0) + 1
      })

      const chartData = Object.entries(count).sort(([a], [b]) => a - b).map(([mood, count]) => ({ mood: moodMap[mood], count }))
      setMoodData(chartData)
    } 
    fetchData()
  }, [])

  return (
    <div style={{ flex: 1, height: 300 }}>
      <h3 style={{ color: '#000000' }}>Mood Trends</h3>
      <ResponsiveContainer> 
        <BarChart data={moodData} margin={{right: 30}}>
          <XAxis dataKey="mood" ticks={["Terrible", "Sad", "Okay", "Good", "Great"]}/>
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}