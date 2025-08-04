'use client';

export default function AttendanceSelector({ employeeId, value, onChange }) {
  const options = ['Present', 'Absent', 'Sick Leave', 'Casual Leave'];

  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <label key={option} className="inline-flex items-center space-x-2">
          <input
            type="radio"
            name={`attendance-${employeeId}`}
            value={option}
            checked={value === option}
            onChange={() => onChange(employeeId, option)}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
}
