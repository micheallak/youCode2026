import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

export default function FoodChart({ data }) {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8080/api/user-input')
      const data = await res.json()
      console.log(data)

      const count = { Yes: 0, No: 0}
      data.forEach(entry => {
        if (entry.food_status === 1){
          count.Yes++
        } else {
          count.No++
        }})
      
        setFoodData([
          { status: "Yes", count: count.Yes },
          { status: "No", count: count.No }
        ])
      }
      fetchData()
  }, [])

    
  return (
    <div style={{ flex: 1, height: 300 }}>
      <h3  style={{ color: '#000000' }}>Food Trends</h3>
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
