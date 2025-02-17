import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function () {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse"
        >
          Welcome to the VR Gaming Dashboard
        </motion.h1>
        <p className="text-lg md:text-xl opacity-80 max-w-3xl">
          Explore immersive VR experiences, manage your profile, and connect
          with other gamers.
        </p>

      </div>

      {/* Featured Sections */}
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top AR Games */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="from-purple-900 via-black to-purple-900 border-2 border-purple-600 rounded-lg shadow-lg overflow-hidden p-6"
          >
            <h3 className="text-xl font-semibold text-white">Top AR Games</h3>
            <p className="text-gray-300 mt-2">
              Discover the best Augmented Reality (AR) games that blend the
              virtual and real worlds for an immersive experience.
            </p>
            <button
              onClick={() => navigate("/page-one")}
              className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-black font-bold rounded-lg transition-all"
            >
              Read More
            </button>
          </motion.div>

          {/* Top VR Tech */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="from-purple-900 via-black to-purple-900 border-2 border-purple-600 rounded-lg shadow-lg overflow-hidden p-6"
          >
            <h3 className="text-xl font-semibold text-white">Top VR Tech</h3>
            <p className="text-gray-300 mt-2">
              Explore the latest advancements in Virtual Reality technology,
              from headsets to innovative controllers.
            </p>
            <button
              onClick={() => navigate("/page-two")}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-black font-bold rounded-lg transition-all"
            >
              Explore Tech
            </button>
          </motion.div>

          {/* Checkout Profile */}



          <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 bg-purple-900 border-2 border-purple-600 rounded-full shadow-lg overflow-hidden w-16 h-16 flex items-center justify-center cursor-pointer"
      onClick={() => navigate("/profile")}
    >
      <img
        src="/assets/profile2.png" // Placeholder Profile Image
        alt="Profile"
        className="w-full h-full object-cover rounded-full bg-white"
      />
    </motion.div>




    
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="from-purple-900 via-black to-purple-900 border-2 border-purple-600 rounded-lg shadow-lg overflow-hidden p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              Checkout Profile
            </h3>
            <p className="text-gray-300 mt-2">
              View and manage your gaming profile, track your achievements, and
              connect with other VR enthusiasts.
            </p>
            <button
              onClick={() => navigate("/profile")}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-black font-bold rounded-lg transition-all"
            >
              View Profile
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// export function Dashboard() {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse">
//           Welcome to the VR Gaming Dashboard
//         </h1>
//         <p className="text-lg md:text-xl opacity-80 max-w-2xl text-center">
//           Explore immersive VR experiences, manage your profile, and connect with other gamers.
//         </p>
//         <div className="mt-8 flex gap-6">
//           <button className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-xl text-lg transition-all duration-300">
//             Start Game
//           </button>
//           <button className="px-6 py-3 bg-gray-700 hover:bg-gray-900 rounded-xl text-lg transition-all duration-300">
//             Settings
//           </button>
//         </div>
//       </div>
//     );
//   }
