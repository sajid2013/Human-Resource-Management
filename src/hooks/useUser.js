"use client";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMe() {
      try {
        const res = await fetch("/api/auth/me");
        const json = await res.json();
        if (json.loggedIn) setUser(json.user);
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMe();
  }, []);

  return { user, loading };
}

//user ka authentication status check karne k liye 