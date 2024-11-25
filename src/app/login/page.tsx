"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    try {
      const response = await axios.post("http://localhost:8000/auth/token", 
        new URLSearchParams({
          username:email,
          password,
          grant_type:"password" 
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { access_token } = response.data;

      // Save the access token in a cookie
      Cookies.set("access_token", access_token);

      // Fetch user data 
      const userData = await axios.get("http://localhost:8000/auth/users/me", {
        headers: {                
          Authorization: `Bearer ${access_token}`,
        },
      });
      
      // Save user data in a cookie
      Cookies.set("user_data", JSON.stringify(userData.data));

      console.log(userData.data);

      // Redirect to the home page
      router.push("/dashboard");

    } catch (error) {
      console.log(error);
    }
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[rgba(140,69,255,0.1)] p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-white/60">Sign in to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(140,69,255)] focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(140,69,255)] focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/10 text-[rgb(140,69,255)] focus:ring-[rgb(140,69,255)]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(140,69,255)] text-white py-3 px-4 rounded-lg hover:bg-[rgb(140,69,255)]/90 transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-white/60">Don&apos;t have an account?</span>{" "}
            <Link
              href="/signup"
              className="text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
