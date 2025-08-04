import UserCard from "../../../components/UserCard";
import AttendanceChart from "../../../components/AttendanceChart"
import "./admin.scss";
import FinanceChart from "../../../components/FinanceChart";
import EventCalendar from "../../../components/EventCalendar";
import Announcements from "../../../components/Announcements";
import CountChartContainer from "../../../components/CountChartContainer";

const AdminPage = () => {
  return (
    <div className="admin-main">
      {/* left */}
      <div className="admin-left">
        {/* usercard */}
        <div className="user-card">
          <UserCard type="employee" />
  
          <UserCard type="admin" />
        </div>

        {/* middlechart */}
        <div className="middle-charts">
          {/* countcharttt */}
          <div className="count-chart">
            <CountChartContainer />
          </div>
          {/* attendance charttt */}
          <div className="attendance-chart"><AttendanceChart/></div>
          
        </div>

        {/* bottomchart */}
        <div className="bottom-chart">
          <FinanceChart/>
        </div>
      </div>

      {/* right */}
      <div className="admin-right">
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  );
};
export default AdminPage;
