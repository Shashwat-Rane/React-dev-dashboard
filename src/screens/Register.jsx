import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

export function Register() {
  
  const [formData, setFormData] = useState({ firstName: "", email: "", password: "", age: "", country: "" });
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://www.konkanspecials.com/auth/register", formData);
      setRegistered(true); // Show success animation
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.log(error);
      setMessage({ text: "Login Failed! Try Again.", type: "error" });

    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <AnimatePresence>
        {!registered ? (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-lg w-96 border border-purple-600"
          >
            <h1 className="text-4xl font-bold text-center mb-6 text-purple-400 animate-pulse">Register</h1>
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key, index) => (
                <input
                  key={index}
                  type={key === "password" ? "password" : key === "age" ? "number" : "text"}
                  name={key}
                  placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 bg-black text-purple-400 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
              <button
                type="submit"
                className="w-full py-3 text-black bg-purple-600 hover:bg-purple-800 rounded-lg text-xl transition-all duration-300"
              >
                Register
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-all duration-200">
                Login here
              </Link>
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-2xl font-semibold bg-green-500 text-black px-6 py-3 rounded-lg shadow-lg"
          >
            ✅ Registration Successful! Redirecting...
          </motion.div>
        )}
      </AnimatePresence>
       {/* Bottom Alert */}
       <AnimatePresence>
        {message.text && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold ${
              message.type === "success" ? "bg-green-500 text-black" : "bg-red-500 text-white"
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
