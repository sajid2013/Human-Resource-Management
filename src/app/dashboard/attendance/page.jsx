
import prisma from "../../../lib/prisma"
import AttendanceClient from '../../../components/AttendanceClient.jsx';

export default async function AttendancePage() {
  const employees = await prisma.employee.findMany({
    select: {
      id: true,
      username: true,
      remainingLeaves: true,
    },
     orderBy: {
      username: 'asc',
    },
  });

  const page = 1;
  const count = employees.length;

  return <AttendanceClient data={employees} page={page} count={count} />;
}
