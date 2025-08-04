'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProjectForm({ type, onClose, data }) {
  const [projectName, setprojectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
 
  const router = useRouter();

  useEffect(() => {
   if (type === 'update' && data) {
  setprojectName(data.projectName || '');

  setStartDate(
    data.startDate ? new Date(data.startDate).toISOString().split('T')[0] : ''
  );

  setEndDate(
    data.endDate ? new Date(data.endDate).toISOString().split('T')[0] : ''
  );
}
  }, [type, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      projectName,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
     
    };

    try {
      if (type === 'create') {
        await axios.post('/api/projects', payload);
        toast.success('Project created successfully!');
      } else if (type === 'update') {
        await axios.put(`/api/projects/${data.id}`, payload);
        toast.success('Project updated successfully!');
      } else if (type === 'delete') {
        await axios.delete(`/api/projects/${data.id}`);
        toast.success('Project deleted successfully!');
      }
      onClose();
      router.refresh();
    } catch (error) {
      console.error("Project error:", error);
      toast.error(error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {type === 'delete' ? (
        <p className="text-center text-red-600">
          Are you sure you want to delete project: <strong>{data.projectName}</strong>?
        </p>
      ) : (
        <>
          <input type="text" placeholder="projectName" value={projectName} onChange={e => setprojectName(e.target.value)} required className="w-full border px-3 py-2 rounded-md" />
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required className="w-full border px-3 py-2 rounded-md" />
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required className="w-full border px-3 py-2 rounded-md" />
        </>
      )}

      <button
        type="submit"
        className={`w-full py-2 rounded-md text-white ${
          type === 'delete' ? 'bg-red-600' : 'bg-blue-600'
        }`}
      >
        {type === 'create' ? 'Create' : type === 'update' ? 'Update' : 'Delete'}
      </button>
    </form>
  );
}
