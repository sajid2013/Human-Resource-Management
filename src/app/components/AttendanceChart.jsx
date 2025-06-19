"use client";
import "./AttendanceChart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 54,
    absent: 23,
  },
  {
    name: "Tue",
    present: 87,
    absent: 45,
  },
  {
    name: "Wed",
    present: 56,
    absent: 15,
  },
  {
    name: "Thur",
    present: 66,
    absent: 27,
  },
  {
    name: "Fri",
    present: 53,
    absent: 21,
  },
];

const AttendanceChart = () => {
  return (
    <div className="main-countchart">
      {/* title */}

      <div className="title">
        <h1 className="text-lg font-semibold">Attendance Chart</h1>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
         barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar
            dataKey="present"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#c3ebda"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
