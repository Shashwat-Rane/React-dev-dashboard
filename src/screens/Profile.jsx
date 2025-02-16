import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const token =
      useSelector((state) => state.auth.token) || localStorage.getItem("token");
  
    useEffect(() => {
      if (token) {
        fetch("https://www.konkanspecials.com/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setProfile(data))
          .catch((err) => console.error("Error fetching profile:", err));
      }
    }, [token]);
  
    useEffect(() => {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener("popstate", function () {
        window.history.pushState(null, document.title, window.location.href);
      });
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };
  
    if (!profile) {
      return (
        <div className="flex justify-center items-center h-screen w-screen bg-black text-white text-2xl">
          Loading profile...
        </div>
      );
    }
  
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden px-6">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
  
        {/* Profile Card */}
        <div className="relative bg-gray-800 bg-opacity-95 p-10 rounded-2xl shadow-2xl border-4 border-purple-600 max-w-lg w-full text-center">
          <img
            src="https://i.pravatar.cc/150?u=profile" // Placeholder Profile Image
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto border-4 border-purple-500 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold mt-4">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-lg opacity-80">{profile.email}</p>
          <p className="text-lg mt-2">
            <span className="text-purple-400">Phone:</span> {profile.phone}
          </p>
          <p className="text-lg">
            <span className="text-purple-400">Country:</span> {profile.country}
          </p>
          <p className="text-lg">
            <span className="text-purple-400">Role:</span> {profile.role}
          </p>
  
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => navigate("/Dashboard")}
              className="border-2 border-purple-500 text-purple-400 px-6 py-2 hover:bg-purple-900 font-bold rounded-lg shadow-md transition-all duration-300 text-lg"
            >
              Back to Dashboard
            </button>
  
            <button
              onClick={handleLogout}
              className="border-4 text-red-500 px-6 py-2 bg-red-600 hover:bg-red-800 font-bold rounded-lg shadow-md transition-all duration-300 text-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  