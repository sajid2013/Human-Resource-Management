"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./verifyemail.scss";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUser = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error.response.data);
    }
  };

  const searchParams = useSearchParams()
  
  useEffect(() => {
    setError(false);
    const urlToken = searchParams.get("token");
    setToken(urlToken || "");
  }, [searchParams]);

  useEffect(() => {
    setError(false);
    if (token.length > 0) {
      verifyUser();
    }
  }, [token]);
  return (
    <>
      <div className="main">
        {/* Signup Form */}
        <form id="verifyForm" className="form">
          <h2 className="heading2">Verify Email</h2>
          {verified && (
            <div className="verify-icon">
              <lord-icon
                src="https://cdn.lordicon.com/hmzvkifi.json"
                trigger="in"
                delay="1500"
                stroke="bold"
                state="in-reveal"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
              <br/><h2 type="" className="teal-btn">
            Verified !
          </h2>
          <br/>
              <Link className="login" href="../login">
                Login here
              </Link>
            </div>
          )}

          {error && (
            <div>
              <h2>Error</h2>
            </div>
          )}

          
          

          {/* Footer Links */}
          <div className="flex justify-center text-xs text-gray-400 gap-4 mt-4">
            <a href="#">Privacy</a>
            <span>&bull;</span>
            <a href="#">Terms</a>
            <span>&bull;</span>
            <a href="#">About</a>
          </div>
        </form>
      </div>
    </>
  );
}
