export function Dashboard() {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse">
          Welcome to the VR Gaming Dashboard
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl text-center">
          Explore immersive VR experiences, manage your profile, and connect with other gamers.
        </p>
        <div className="mt-8 flex gap-6">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-xl text-lg transition-all duration-300">
            Start Game
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-900 rounded-xl text-lg transition-all duration-300">
            Settings
          </button>
        </div>
      </div>
    );
  }
  
  