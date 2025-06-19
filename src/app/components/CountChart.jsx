"use client";
import "./CountChart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 76,
    fill: "white",
  }, {
    name: "Interns",
   count: 26,
    fill: "#fae27c",
  },{
    name: "Employees",
    count: 50,
    fill: "#c3ebda",
  },
 
  
];

const CountChart = () => {
  return (
    <div className="main-countchart">
      {/* title */}
      <div className="title">
        <h1 className="text-lg font-semibold">Team Members</h1>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <FontAwesomeIcon icon={faPeopleGroup} size="2xl" className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: "#cfceff" }} />
      </div>
      {/* bottom */}
      <div className="bottom">
        <div className="circlesss">
          <div className="circle bg-sky"></div>
          <h5 className="font-bold">342</h5>
          <h1 className="text-xs text-gray-400">Employees (97%)</h1>
        </div>
        <div className="circlesss">
          <div className="circle bg-yellow"></div>
            <h5 className="font-bold">12</h5>
            <h1 className="text-xs text-gray-400">Interns (3%)</h1>
          
        </div>
      </div>
    </div>
  );
};

export default CountChart;
