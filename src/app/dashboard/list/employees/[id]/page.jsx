"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./employeeDetail.scss";
import {
  faBed,
  faBriefcase,
  faCalendarCheck,
  faCalendarDay,
  faEnvelope,
  faPhone,
  faCalendarXmark,
} from "@fortawesome/free-solid-svg-icons";import "react-big-calendar/lib/css/react-big-calendar.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MasksIcon from "@mui/icons-material/Masks";
import BigCalendar from "../../../../../components/BigCalendar";
import Announcements from "../../../../../components/Announcements";
import Link from "next/link";
import Performance from "../../../../../components/Performance";
import FormModal from "../../../../../components/FormModal";
import AttendanceCalendar from "../../../../../components/AttendanceCalendar";

const SingleEmployeePage = ({ params }) => {
  const { id } = params;
    const [employee, setEmployee] = useState(null);
    const [summary, setSummary] = useState({
  Present: 0,
  Absent: 0,
  "Sick Leave": 0,
  "Casual Leave": 0,
});

useEffect(() => {
  const fetchSummary = async () => {
    try {
      const res = await fetch(`/api/attendance/${id}/summary`);
      const data = await res.json();
      if (data.success) {
        setSummary(data.summary);
      }
    } catch (err) {
      console.error("Error fetching summary:", err);
    }
  };

  if (id) fetchSummary();
}, [id]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await fetch(`/api/employee/${id}`);
        const json = await res.json();
        if (json.success) {
          setEmployee(json.data);
        } else {
          console.error("Failed to load employee:", json.message);
        }
      } catch (error) {
        console.error("Error loading employee:", error);
      }
    };

    if (id) fetchEmployee();
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="employee-detail-container">
      {/* left */}
      <div className="left-section">
        {/* top */}
        <div className="top-content">
          {/* user info card */}
          <div className="user-card">
            <div className="user-image">
              <Image
                src={employee.img || "/assets/images.jpg"}
                alt=""
                width={144}
                height={144}
                className="profile-pic"
              />
            </div>
            <div className="user-info">
              <div className="flex justify-center items-center gap-36">
                <h1 className="user-name">{employee.firstName} {employee.lastName}</h1>
                <FormModal
                  table="employees"
                  type="update"
                  data={{
                    id: employee.id,
                    employeeId:employee.employeeId,
                    username: employee.username,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email:employee.email,
                    photo: employee.photo || "/assets/profile.jfif",
                    phone: employee.phone,
                    role: employee.role,
                    department:employee.department,
                  }}
                />

              </div>
              <p className="user-bio">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="user-details">
                <div className="detail-item">
                  <FontAwesomeIcon icon={faBriefcase}  style={{ width: 14, height: 14, color: "#ca6d69ff" }} />
                  <span>{employee.role}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faCalendarDay}  style={{ width: 14, height: 14, color: "#ca6d69ff" }}/>
                  <span>{new Date(employee.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faEnvelope}  style={{ width: 14, height: 14, color: "#ca6d69ff" }}/>
                  <span>{employee.email}</span>
                </div>
                <div className="detail-item">
                  <FontAwesomeIcon icon={faPhone}  style={{ width: 14, height: 14, color: "#ca6d69ff" }} />
                  <span>{employee.phone}</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="small-cards">
            {/* card 1*/}
            <div className="card">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ width: 24, height: 24, color: "#16a34a" }}
              />
              <h1 className="text-xl font-semibold">{summary.Present}</h1>
              <span className="text-sm text-gray-400">Presents</span>
            </div>
            {/* card 2 */}
            <div className="card">
              <FontAwesomeIcon
                icon={faCalendarXmark}
                style={{ width: 24, height: 24, color: "#2563eb" }}
              />
              <h1 className="text-xl font-semibold">{summary.Absent}</h1>
              <span className="text-sm text-gray-400">Absents</span>
            </div>
            {/* card 3*/}
            <div className="card">
              <MasksIcon style={{ width: 34, height: 34, color: "#dc2626" }} />
              <h1 className="text-xl font-semibold">{summary["Sick Leave"]}</h1>
              <span className="text-sm text-gray-400">Sick Leaves Taken</span>
            </div>
            {/* card 4*/}
            <div className="card">
              <FontAwesomeIcon
                icon={faBed}
                style={{ width: 28, height: 28, color: "#f59e0b" }}
              />
              <h1 className="text-xl font-semibold">{summary["Casual Leave"]}</h1>
              <span className="text-sm text-gray-400">
                Casual Leaves
              </span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom-content">
         
            <h1 className="text-xl">Employee&apos;s Schedule</h1>
            <BigCalendar />
          
          <div className="bottom-content">
            <h1 className="text-xl">Employee&apos;s Attendance</h1>
            <AttendanceCalendar employeeId={id} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="right-section ">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-1 flex-wrap text-xs text-gray-500 ">
            <Link
              className="p-3 rounded-md bg-skylight no-underline text-gray-950 hover:text-gray-700"
              href={`/dashboard/list/departments?departmentId=${id}`}
            >
              Employee&apos;s Departments
            </Link>
            <Link
              className="p-3 rounded-md bg-blue-50 no-underline text-gray-950 hover:text-gray-900"
              href={`/dashboard/list/projects?projectId=${id}`}
            >
              {" "}
              Employee&apos;s Projects
            </Link>
            <Link
              className="p-3 rounded-md bg-orange-50 no-underline text-gray-950 hover:text-gray-700"
              href="/dashboard/trainings"
            >
              Employee&apos;s Trainings{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50 no-underline text-gray-950 hover:text-gray-700"
               href={`/dashboard/list/employees/${id}/attendance`}
            >
              Employee&apos;s Attendance{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-violet-100 no-underline text-gray-950 hover:text-gray-700"
              href="/"
            >
              Employee&apos;s Performance Reviews{" "}
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />

      </div>
    </div>
  );
};

export default SingleEmployeePage;
