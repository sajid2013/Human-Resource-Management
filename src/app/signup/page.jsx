"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./signup.scss";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Success", response.data);
      const token = response.data.token;
      router.push(`../verifyemail?token=${token}`);
    } catch (error) {
      console.log("Signup Failed");
      toast.error("Please enter the credentials.");
    }
  };

  return (
    <>
      <div className="main">
        {/* Signup Form */}
        <form onSubmit={handleSubmit} id="signupForm" className="form">
          <h2 className="heading2">Sign Up</h2>

          {/* Full Name */}
          <div className="name">
            <label htmlFor="name" className="labels">
              Your Full Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
              placeholder="Enter your full name"
              className="inputs"
            />
          </div>

          {/* Email */}
          <div className="name">
            <label htmlFor="email" className="labels">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="inputs"
            />
          </div>

          {/* Password */}
          <div className="name">
            <label htmlFor="password" className="labels">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="inputs"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="teal-btn">
            Sign Up
          </button>

          {/* Or divider */}
          <div className="text-center text-gray-400 text-sm">or</div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-md flex justify-center items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.63 0 6.89 1.28 9.46 3.4l7.1-7.1C35.81 1.95 30.3 0 24 0 14.94 0 6.99 5.68 3.12 13.93l8.67 6.73C13.58 14.26 18.41 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.3 0 11.81-2.25 15.82-5.91l-8.18-6.68C29.25 37.82 26.7 39 24 39c-5.59 0-10.42-4.76-12.21-11.16l-8.67 6.72C6.99 42.32 14.94 48 24 48z"
              />
              <path
                fill="#4A90E2"
                d="M47.5 24c0-1.61-.13-3.15-.37-4.64H24v9.28h13.18c-.57 3.04-2.1 5.61-4.36 7.42l8.18 6.68C45.84 38.24 47.5 31.51 47.5 24z"
              />
              <path
                fill="#FBBC05"
                d="M11.79 27.84a14.35 14.35 0 010-7.67L3.12 13.44C1.13 17.27 0 21.5 0 24s1.13 6.73 3.12 10.56l8.67-6.72z"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Already have account */}
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="../login" className="login">
              Login
            </a>
          </div>

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
