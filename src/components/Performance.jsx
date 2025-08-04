"use client";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-svg-core/styles.css";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Attendance Chart</h1>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-300">of 10 max </p>
      </div>
      <h2 className="absolute font-medium bottom-16 left-0 right-0 m-auto text-center">2024 - 2025</h2>
    </div>
  );
};

export default Performance;
