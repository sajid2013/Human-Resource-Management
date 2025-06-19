"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");

  const getUserDetails = async () => {
    try {
      const response = await axios.post("/api/users/profile");
      console.log(response.data);
      setData(response.data._id);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.message);

    }
  };
  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      toast.success("Logged out successfully")
      router.push("../login")
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div>Profile Page</div>
    </>
  );
}
