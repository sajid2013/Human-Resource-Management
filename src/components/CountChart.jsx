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


const CountChart = ({employee, admin}) => {
  const data = [
    {
      name: "Total",
      count: employee + admin,
      fill: "white",
    }, {
      name: "Admin",
     count: admin,
      fill: "#c3ebda",
    },{
      name: "Employees",
      count: employee,
      fill: "#95c0f4",
    },
   
    
  ];
  return (
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
  );
};

export default CountChart;
