"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AnnouncementForm = ({ type, data, onClose }) => {
  const router = useRouter();
  const [title, setTitle] = useState(data?.title || "");
  const [date, setDate] = useState(data?.date || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/announcements", {
      method: type === "create" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data?.id,
        title,
        date,
      }),
    });

    if (res.ok){
      toast.success(`Announcement ${type === "create" ? "created" : "updated"} successfully`);
    onClose();
    router.refresh();
  }else {
    toast.error("Something went wrong");
  } 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">
        {type === "create" ? "Create" : "Update"} Announcement
      </h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-yellow py-2 px-4 rounded text-white self-start"
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
