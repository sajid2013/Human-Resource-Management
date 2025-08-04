// app/dashboard/list/employees/[id]/attendance/page.jsx

"use client";
import { useParams } from "next/navigation";
import AttendanceCalendar from "../../../../../../components/AttendanceCalendar";

export default function EmployeeAttendancePage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee's Attendance</h1>
      <AttendanceCalendar employeeId={id} />
    </div>
  );
}
