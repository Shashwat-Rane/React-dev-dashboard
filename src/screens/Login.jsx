import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../redux/authSlice"; // Import action to update Redux store
import { motion, AnimatePresence } from "framer-motion";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://3.110.104.206:3000/auth/login", {
        email,
        password,
      });
      console.log("response ");  
      localStorage.setItem("token", response.data.token);
      dispatch(setToken(response.data.token));

      setMessage({ text: "Login Successful! Redirecting...", type: "success" });

      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      console.log(error);
      setMessage({ text: "Login Failed! Try Again.", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white relative">
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl shadow-lg w-96 border border-purple-600">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-400 animate-pulse">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 bg-black text-purple-400 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-black text-purple-400 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-3 text-black bg-purple-600 hover:bg-purple-800 rounded-lg text-xl transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300 transition-all duration-200"
          >
            Register here
          </Link>
        </p>
      </div>

      {/* Bottom Alert */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold ${
              message.type === "success"
                ? "bg-green-500 text-black"
                : "bg-red-500 text-white"
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
