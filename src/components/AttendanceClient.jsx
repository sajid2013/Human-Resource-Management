'use client';

import { useState } from 'react';
import AttendanceSelector from "./AttendanceSelector.jsx";
import Table from './Table.jsx';
import Pagination from './Pagination.jsx';

//  Dummy employee data added here
// const dummyData = [
//   { id: '1', username: 'Ali Raza', remainingLeaves: 5 },
//   { id: '2', username: 'Sara Khan', remainingLeaves: 3 },
//   { id: '3', username: 'Hamza Iqbal', remainingLeaves: 2 },
// ];

const columns = [
  { header: 'Employee Name', accessor: 'username', className: 'p-4' },
  { header: 'Attendance', accessor: 'attendance', className: 'p-4', colSpan: 4 },
  { header: 'Remaining Leaves', accessor: 'remainingLeaves', className: 'p-4' },
];

export default function AttendanceClient({ data, page, count }) {
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (employeeId, status) => {
    setAttendance(prev => ({
      ...prev,
      [employeeId]: status,
    }));
  };
const handleSubmit = async () => {
  try {
    const response = await fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: new Date().toISOString().split('T')[0], // today's date in YYYY-MM-DD format
        records: attendance,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit attendance');
    }

    const result = await response.json();
    alert('Attendance submitted successfully!');
    console.log(result);
  } catch (error) {
    console.error('Submit error:', error);
    alert('Error submitting attendance');
  }
};


  const renderRow = (item, index) => (
    <tr
      key={item.id || index}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-green transition-all duration-200"
    >
      <td className="p-4">{item.username}</td>

      <td colSpan={4}>
        <AttendanceSelector
          employeeId={item.id}
          value={attendance[item.id] || ''}
          onChange={handleAttendanceChange}
        />
      </td>

      <td>{item.remainingLeaves}</td>
    </tr>
  );

  return (
    <div className="main-employees">
      <h1 className="text-lg font-semibold mb-4">Attendance Portal</h1>

      <Table columns={columns} renderRow={renderRow} data={data} />

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Attendance
        </button>
      </div>

      <Pagination page={page} count={count} />
    </div>
  );
}
