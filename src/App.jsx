import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard";
import { PageOne } from "./screens/PageOne";
import { PageTwo } from "./screens/PageTwo";
import { Profile } from "./screens/Profile";
import { Register } from "./screens/Register";

const PrivateRoute = ({ element }) => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/page-one" element={<PrivateRoute element={<PageOne />} />} />
          <Route path="/page-two" element={<PrivateRoute element={<PageTwo />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/vrNews" element={<PrivateRoute element={<LatestVRNews />} />} />
          <Route path="/vrEvents" element={<PrivateRoute element={<UpcomingVREvents />} />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

// Login Page


import { motion, AnimatePresence } from "framer-motion";






import { useNavigate } from "react-router-dom";














export function LatestVRNews() {
  const navigate = useNavigate();
  const newsArticles = [
    {
      title: "Meta's Next-Gen VR Headset Announced",
      description: "Meta has unveiled its latest VR headset with advanced features.",
      link: "https://www.roadtovr.com/meta-new-vr-headset/",
    },
    {
      title: "Apple Vision Pro Launch Date Revealed",
      description: "Apple's Vision Pro is set to launch worldwide next month.",
      link: "https://www.roadtovr.com/apple-vision-pro-launch/",
    },
    {
      title: "HTC Vive Unveils New Wireless Adapter",
      description: "HTC has announced a cutting-edge wireless adapter for its VR headsets.",
      link: "https://www.roadtovr.com/htc-vive-wireless-adapter/",
    },
    {
      title: "Sony PlayStation VR2 Gains New Features",
      description: "Sony is rolling out a new update with improved tracking and visuals.",
      link: "https://www.roadtovr.com/psvr2-new-features/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Latest VR News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {newsArticles.map((news, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-400">{news.title}</h2>
            <p className="text-gray-300 mt-2">{news.description}</p>
            <button
              onClick={() => window.open(news.link, "_blank")}
              className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-black font-bold rounded-lg transition-all"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white font-bold rounded-lg"
      >
        Back
      </button>
    </div>
  );
}

export function UpcomingVREvents() {
  const navigate = useNavigate();
  const events = [
    {
      title: "VR Gaming Expo 2025",
      description: "Join the biggest VR gaming expo with exclusive game demos and talks.",
      link: "https://www.vrfitnessinsider.com/vr-expo-2025/",
    },
    {
      title: "Global VR Esports Championship",
      description: "Top VR gamers battle for glory in this global esports event.",
      link: "https://www.vrfitnessinsider.com/vr-esports-championship/",
    },
    {
      title: "Virtual Reality Developer Conference",
      description: "Meet industry leaders and explore the future of VR development.",
      link: "https://www.vrfitnessinsider.com/vr-developer-conference/",
    },
    {
      title: "VR Fitness Challenge 2025",
      description: "Compete in exciting VR-based fitness challenges and win prizes!",
      link: "https://www.vrfitnessinsider.com/vr-fitness-challenge/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Upcoming VR Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-red-400">{event.title}</h2>
            <p className="text-gray-300 mt-2">{event.description}</p>
            <button
              onClick={() => window.open(event.link, "_blank")}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-black font-bold rounded-lg transition-all"
            >
              View Event
            </button>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white font-bold rounded-lg"
      >
        Back
      </button>
    </div>
  );
}
