"use client";
import { useRef, useState } from "react";
import axios from "axios";
import "./login.scss";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import DotLoader from "../components/Loader";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast.error("Please enter email and password.");
      setLoading(false);
      return;
    } 

    try {
      const response = await axios.post("/api/users/login", user);
      toast.success("Login successful!");
      router.push("../home");
    } catch (error) {
      console.log("Login Failed");
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false); // Stop loading in any case
    }
  };

  return (
    <>
      <div className="main">
        {/* login Form */}
        <form onSubmit={handleSubmit} id="loginForm" className="form">
          <h2 className="heading2">Login</h2>
          {/* Email */}
          <div className="name">
            <label htmlFor="email" className="labels">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="inputs"
              value={email}
              disabled={loading}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="inputs"
              disabled={loading}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="teal-btn" disabled={loading}>
            {loading ? <DotLoader /> : "Login"}
          </button>

          {/* Don't have an account */}
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="../signup" className="login">
              Sign up
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
