import CountChart from "./CountChart";
import "./CountChartContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import prisma from "../lib/prisma"


const CountChartContainer = async () => {
 
    return (
        <div className="main-countchart">
            {/* title */}
            <div className="title">
                <h1 className="text-lg font-semibold">Team Members</h1>
                <FontAwesomeIcon icon={faEllipsis} style={{ color: "#64748b" }} />
            </div>
            {/* chart */}
            <CountChart />
            {/* bottom */}
            <div className="bottom">
                <div className="circlesss">
                    <div className="circle bg-sky"></div>
                    <h5 className="font-bold">342</h5>
                    <h1 className="text-xs text-gray-400">Employees (97%)</h1>
                </div>
                <div className="circlesss">
                    <div className="circle bg-greenlight"></div>
                    <h5 className="font-bold">12</h5>
                    <h1 className="text-xs text-gray-400">Admin (3%)</h1>

                </div>
            </div>
        </div>
    )
}
export default CountChartContainer;