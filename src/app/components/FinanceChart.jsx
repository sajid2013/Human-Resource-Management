"use client";
import "./FinanceChart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Sep",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Oct",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Nov",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="main-finance">
      {/* title */}
      <div className="title">
        <h1 className="text-lg font-semibold">Finance</h1>
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"  stroke="#ddd"/>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickMargin={20} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#8884d8"
           strokeWidth={5}
          />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
      {/* Bottom */}
    </div>
  );
};

export default FinanceChart;
