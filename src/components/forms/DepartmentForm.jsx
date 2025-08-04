'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function DepartmentForm({ type, onClose, data, table }) {
  const [departmentName, setDepartmentName] = useState('');
  const [totalEmployees, setTotalEmployees] = useState('');
  const [floor, setFloor] = useState('');
  const [supervisor, setSupervisor] = useState('');
const router= useRouter();

  useEffect(() => {
    if (type === 'update' && data) {
      setDepartmentName(data.departmentName || '');
      setTotalEmployees(data.totalEmployees || '');
      setFloor(data.floor || '');
      setSupervisor(data.supervisor || '');
    }
  },[type,data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      departmentName,
      totalEmployees: parseInt(totalEmployees),
      floor,
      supervisor,
    };

    try {
      if (type === 'create') {
        await axios.post('/api/departments', payload);
        toast.success('Department created successfully!');
      } else if (type === 'update') {
        await axios.put(`/api/departments/${data.id}`, payload);
        toast.success('Department updated successfully!');
      } else if (type === 'delete') {
        await axios.delete(`/api/departments/${data.id}`);
        toast.success('Department deleted successfully!');
      }

      onClose();
      router.refresh();
    } catch (error) {
         console.error("Update error:", error); 
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {type === 'delete' ? (
        <p className="text-center text-red-600">
          Are you sure you want to delete department: <strong>{data.departmentName}</strong>?
        </p>
      ) : (
        <>
          <div>
            <label className="block mb-1 text-sm font-medium">Department Name</label>
            <input
              type="text"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="e.g. Human Resources"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Total Employees</label>
            <input
              type="number"
              value={totalEmployees}
              onChange={(e) => setTotalEmployees(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="e.g. 15"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Floor</label>
            <input
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="e.g. 2nd Floor"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Supervisor</label>
            <input
              type="text"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              placeholder="e.g. Ahmed Khan"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className={`w-full py-2 rounded-md text-white ${
          type === 'delete' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {type === 'create' && 'Create'}
        {type === 'update' && 'Update'}
        {type === 'delete' && 'Delete'}
      </button>
    </form>
  );
}
