import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Login } from "./screens/Login";

// eslint-disable-next-line react/prop-types
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
          <Route path="/profile" element={<PrivateRoute element={<GetProfile />} />} />
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

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";





// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState({ text: "", type: "" });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:3000/login", { email, password });
//       localStorage.setItem("token", response.data.token);
//       setMessage({ text: "Login Successful! Redirecting...", type: "success" });
//       setTimeout(() => navigate("/dashboard"), 2000);
//     } catch (error) {
//       console.log(error)
//       setMessage({ text: "Login Failed! Try Again.", type: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-black text-white">
//       <div className="p-8 rounded-lg shadow-lg bg-gray-900">
//         <h1 className="text-3xl text-center">Login</h1>
//         {loading && <div className="spinner border-4 border-white border-t-transparent rounded-full w-8 h-8 animate-spin mx-auto my-4"></div>}
//         <form onSubmit={handleSubmit}>
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2" />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-2" />
//           <button type="submit" className="w-full p-2 bg-purple-600">Login</button>
//         </form>
//       </div>
//       <AnimatePresence>
//         {message.text && (
//           <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
//             className={`fixed bottom-5 text-white px-4 py-2 rounded ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}> {message.text}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



// Register Page

import { useNavigate } from "react-router-dom";



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
      await axios.post("http://127.0.0.1:3000/register", formData);
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

// Dashboard





export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function () {
      window.history.pushState(null, document.title, window.location.href);
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col">

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
          Explore immersive VR experiences, manage your profile, and connect with other gamers.
        </p>

        {/* Buttons Section */}
        {/* <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => navigate("/page-one")}
            className="px-6 py-3 text-black bg-blue-600 hover:bg-blue-800 rounded-xl text-lg transition-all"
          >
            Top AR Games
          </button>
          <button
            onClick={() => navigate("/page-two")}
            className="px-6 py-3 text-black bg-gray-700 hover:bg-gray-900 rounded-xl text-lg transition-all"
          >
            Top VR Tech
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="px-6 py-3 text-black bg-gray-700 hover:bg-gray-900 rounded-xl text-lg transition-all"
          >
            Profile
          </button>
        </div> */}
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
        Discover the best Augmented Reality (AR) games that blend the virtual and real worlds for an immersive experience.
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
        Explore the latest advancements in Virtual Reality technology, from headsets to innovative controllers.
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
      whileHover={{ scale: 1.05 }}
      className="from-purple-900 via-black to-purple-900 border-2 border-purple-600 rounded-lg shadow-lg overflow-hidden p-6"
    >
      <h3 className="text-xl font-semibold text-white">Checkout Profile</h3>
      <p className="text-gray-300 mt-2">
        View and manage your gaming profile, track your achievements, and connect with other VR enthusiasts.
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










const arGames = [
  {
    title: "Pokémon GO",
    description: "Catch Pokémon in the real world using AR technology.",
    image: "https://lh3.googleusercontent.com/8Tiud9g_ZTxKuFq8OxCr2fJLOwMzA1ajIKeFiu8Ub11X9AImQ58WzVxyVd6KSNpG79ceaHuFT66aihceJFNIYrerNHtpMomB-UibKIdJcJx1=rw-e365-w3600",
  },
  {
    title: "Harry Potter: Wizards Unite",
    description: "Step into the Wizarding World and battle magical creatures.",
    image: "https://storage.googleapis.com/nianticweb-media/v1/img/posts/wizardsunite.jpg",
  },
  {
    title: "Ingress Prime",
    description: "A sci-fi AR game where you battle for global domination.",
    image: "https://i.ytimg.com/vi/lN790amuld0/maxresdefault.jpg",
  },
  {
    title: "The Walking Dead: Our World",
    description: "Survive the zombie apocalypse in an AR experience.",
    image: "https://imageio.forbes.com/blogs-images/insertcoin/files/2018/07/dead-our-world1.jpg?format=jpg&height=900&width=1600&fit=bounds",
  },
  {
    title: "Jurassic World Alive",
    description: "Discover dinosaurs in your real-world surroundings and collect DNA.",
    image: "https://jurassicoutpost.com/static/c8d44bd433e9fcd665ab1d71e05620aa/ac943/Q9-Qhsuk.jpg",
  },
  {
    title: "Ghostbusters World",
    description: "Hunt down ghosts in an AR-powered experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMq_eWT4uW7E9693kOM070narUGLKOly8wA&s",
  },
  {
    title: "Minecraft Earth",
    description: "Create and explore Minecraft builds in the real world with AR.",
    image: "https://pub-f354ec240bea480db7320bd0e29d972e.r2.dev/sites/2/2020/04/Minecraft-Earth_Key-Art-Hero.jpg",
  },
  {
    title: "Knightfall AR",
    description: "Defend your kingdom in this medieval AR strategy game.",
    image: "https://i.ytimg.com/vi/JoXiu-2NsPw/maxresdefault.jpg",
  },
  {
    title: "Angry Birds AR: Isle of Pigs",
    description: "Slingshot Angry Birds in AR, taking down structures in your environment.",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1001140/capsule_616x353.jpg?t=1697719549e",
  },
  {
    title: "Zombies, Run!",
    description: "Turn your daily jog into a thrilling zombie survival adventure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIbCJt4aBxwbBpca3aKGN73wAH9Ob-3mYbA&s",
  },
  {
    title: "Five Nights at Freddy’s AR: Special Delivery",
    description: "Face terrifying animatronics in AR horror encounters.",
    image: "https://i.ytimg.com/vi/UWlLuKmVH54/maxresdefault.jpg",
  },
  {
    title: "The Witcher: Monster Slayer",
    description: "Hunt down mythical creatures in this location-based AR RPG.",
    image: "https://www.cdprojekt.com/en/wp-content/uploads-en/2021/07/ms16x9-en.png",
  },
];

import { ArrowLeft } from "lucide-react";
export function PageOne() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6 text-white-400 animate-pulse text-center"
      >
        Odins Realm - The VR Battle Arena
      </motion.h1>

      <p className="text-lg md:text-xl opacity-80 text-center max-w-3xl">
        Enter the legendary VR battle arena where warriors clash in stunning virtual landscapes. Feel the rush, wield
        legendary weapons, and claim your spot among the gods of battle.
      </p>

      {/* AR Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {arGames.map((game, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
          >
            <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-400">{game.title}</h3>
              <p className="text-gray-300 mt-2">{game.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <button
  onClick={() => navigate("/Dashboard")}
  className="mt-8 flex items-center gap-2 text-black px-8 py-3 font-bold rounded-lg shadow-md transition-all duration-300 text-lg"
>
  <ArrowLeft size={24} />
  Back
</button>
    </div>
  );
}



// Page Two - Zeus' Olympus (VR Adventure Hub)



const vrTechnologies = [
  {
    title: "Oculus Quest 3",
    description: "Experience next-gen wireless VR with advanced tracking and crisp visuals.",
    image: "https://vrcover.com/wp-content/uploads/2023/06/Meta-Quest-3-VR-headset-and-controllers.jpg",
    knowMore:"https://www.meta.com/quest/quest-3/?srsltid=AfmBOoq4bGGV6eKWTEFs69Bvkiirko-gZR6FOqeSlEirheFxvVMZigd-"
  },
  {
    title: "HTC Vive Pro 2",
    description: "High-resolution VR headset for a fully immersive experience.",
    image: "https://www.vive.com/media/filer_public/fed-assets/vivepro2/images/pro2-meta.jpg",
    knowMore:"https://www.vive.com/us/product/vive-pro2/overview/"
  },
  {
    title: "PlayStation VR2",
    description: "Sony's powerful VR headset bringing console gaming to life.",
    image: "https://mms.businesswire.com/media/20230222005126/en/1718672/5/PSVR2_16X9.jpg",
    knowMore:"https://www.playstation.com/en-in/ps-vr2/"
  },
  {
    title: "Varjo XR-4",
    description: "Industry-leading mixed reality headset for enterprise and gaming.",
    image: "https://assets-web-varjo.s3.eu-north-1.amazonaws.com/wp-content/uploads/2023/11/22111703/W5A0746-1-1.jpg",
    knowMore:"https://varjo.com/products/xr-4/"
  },
  {
    title: "HoloLens 2",
    description: "Microsoft’s AR-powered device blending virtual with real-world interactions.",
    image: "https://5.imimg.com/data5/QN/GI/BR/SELLER-1094211/hololens-2.jpg",
    knowMore:"https://learn.microsoft.com/en-us/hololens/"
  },
  {
    title: "Pimax Crystal",
    description: "A high-resolution VR headset delivering ultra-wide FOV for immersive gameplay.",
    image: "https://pimax.com/cdn/shop/files/Crystal_Banner_fee102e1-2c19-4bd9-9fc3-9f1f12373f84.webp?v=1714374418",
    knowMore:"https://pimax.com/?gfsid=CjsaCgaARa8LoLw9WNnE2i9Hzga6UH048kqGIMaAlbLEALw_wcB&varce=vplolpo&edva=vterukilop2&amvaign=gadare3da&onnert=ikopolte&ref=o3d7ao&cafs=banlolop&gad_source=1&gbraid=0AAAAApzgUaNxgm0VIUkaUvydncFilQFw6&gclid=CjwKCAiA8Lu9BhA8EiwAag16b_6qbsEbGAocOq3gMmaMSpyozyaRBiIvFZwVxVKEbW4ztHCO9G7GhRoCaPAQAvD_BwE"
  },
];

export function PageTwo() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r  from-purple-900 via-black to-purple-900 text-white p-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6 text-purple-400 animate-pulse text-center"
      >
        Zeus Olympus - The VR Adventure Hub
      </motion.h1>

      <p className="text-lg md:text-xl opacity-80 text-center max-w-3xl">
        Ascend to Olympus, where the most advanced VR technology meets breathtaking storytelling. Discover the power of
        virtual gods and embark on a divine adventure beyond imagination.
      </p>

      {/* VR Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {vrTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-xl shadow-lg overflow-hidden transition-transform duration-300 border border-gray-700 hover:shadow-xl"
          >
            <img src={tech.image} alt={tech.title} className="w-full h-60 object-cover rounded-t-xl" />
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-purple-400">{tech.title}</h3>
              <p className="text-gray-300 mt-2">{tech.description}</p>
              <button
  onClick={() => window.open(tech.knowMore, "_blank", "noopener,noreferrer")}
  className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-black font-bold rounded-lg shadow-md transition-all"
>
  Learn More
</button>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <button
  onClick={() => navigate("/Dashboard")}
  className="mt-8 flex items-center gap-2 text-black px-8 py-3 font-bold rounded-lg shadow-md transition-all duration-300 text-lg"
>
  <ArrowLeft size={24} />
  Back
</button>
    </div>
  );
}








export function GetProfile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://aruibackend-git-main-projects-ccaaeef7.vercel.app/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

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
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden px-6">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Profile Card - Centered */}
      <div className="relative bg-gray-900 bg-opacity-90 p-10 rounded-2xl shadow-2xl border-4 border-purple-600 max-w-2xl w-full text-center">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-purple-500 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mt-4">{profile.name}</h1>
        <p className="text-lg opacity-80">{profile.email}</p>
        <p className="text-xl mt-2">
          <span className="text-purple-400">Age:</span> {profile.age} years old
        </p>
        <p className="text-xl">
          <span className="text-purple-400">Location:</span> {profile.location}
        </p>

        {/* Interests */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-purple-400">Interests</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-purple-600 bg-opacity-30 rounded-lg px-4 py-2 text-sm font-semibold"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
         
        <button
  onClick={() => navigate("/Dashboard")}
  className="mt-8 border-2 border-purple-600 text-purple-500 px-8 py-3 hover:bg-purple-900 font-bold rounded-lg shadow-md transition-all duration-300 text-lg "
>
  Back
</button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 border-4 text-red-500 px-8 py-3 bg-red-600 hover:bg-red-800 font-bold rounded-lg shadow-md transition-all duration-300 text-lg"
        >
          Logout
        </button>
        </div>
      </div>
    </div>
  );
}


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
