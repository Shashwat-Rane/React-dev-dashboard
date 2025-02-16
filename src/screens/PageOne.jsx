import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PageOne() {
  const navigate = useNavigate();
  const arGames = [
    {
      title: "Pokémon GO",
      description: "Catch Pokémon in the real world using AR technology.",
      image:
        "https://lh3.googleusercontent.com/8Tiud9g_ZTxKuFq8OxCr2fJLOwMzA1ajIKeFiu8Ub11X9AImQ58WzVxyVd6KSNpG79ceaHuFT66aihceJFNIYrerNHtpMomB-UibKIdJcJx1=rw-e365-w3600",
    },
    {
      title: "Harry Potter: Wizards Unite",
      description:
        "Step into the Wizarding World and battle magical creatures.",
      image:
        "https://storage.googleapis.com/nianticweb-media/v1/img/posts/wizardsunite.jpg",
    },
    {
      title: "Ingress Prime",
      description: "A sci-fi AR game where you battle for global domination.",
      image: "https://i.ytimg.com/vi/lN790amuld0/maxresdefault.jpg",
    },
    {
      title: "The Walking Dead: Our World",
      description: "Survive the zombie apocalypse in an AR experience.",
      image:
        "https://imageio.forbes.com/blogs-images/insertcoin/files/2018/07/dead-our-world1.jpg?format=jpg&height=900&width=1600&fit=bounds",
    },
    {
      title: "Jurassic World Alive",
      description:
        "Discover dinosaurs in your real-world surroundings and collect DNA.",
      image:
        "https://jurassicoutpost.com/static/c8d44bd433e9fcd665ab1d71e05620aa/ac943/Q9-Qhsuk.jpg",
    },
    {
      title: "Ghostbusters World",
      description: "Hunt down ghosts in an AR-powered experience.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMq_eWT4uW7E9693kOM070narUGLKOly8wA&s",
    },
    {
      title: "Minecraft Earth",
      description:
        "Create and explore Minecraft builds in the real world with AR.",
      image:
        "https://pub-f354ec240bea480db7320bd0e29d972e.r2.dev/sites/2/2020/04/Minecraft-Earth_Key-Art-Hero.jpg",
    },
    {
      title: "Knightfall AR",
      description: "Defend your kingdom in this medieval AR strategy game.",
      image: "https://i.ytimg.com/vi/JoXiu-2NsPw/maxresdefault.jpg",
    },
    {
      title: "Angry Birds AR: Isle of Pigs",
      description:
        "Slingshot Angry Birds in AR, taking down structures in your environment.",
      image:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1001140/capsule_616x353.jpg?t=1697719549e",
    },
    {
      title: "Zombies, Run!",
      description:
        "Turn your daily jog into a thrilling zombie survival adventure.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIbCJt4aBxwbBpca3aKGN73wAH9Ob-3mYbA&s",
    },
    {
      title: "Five Nights at Freddy’s AR: Special Delivery",
      description: "Face terrifying animatronics in AR horror encounters.",
      image: "https://i.ytimg.com/vi/UWlLuKmVH54/maxresdefault.jpg",
    },
    {
      title: "The Witcher: Monster Slayer",
      description:
        "Hunt down mythical creatures in this location-based AR RPG.",
      image:
        "https://www.cdprojekt.com/en/wp-content/uploads-en/2021/07/ms16x9-en.png",
    },
  ];
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
        Enter the legendary VR battle arena where warriors clash in stunning
        virtual landscapes. Feel the rush, wield legendary weapons, and claim
        your spot among the gods of battle.
      </p>

      {/* AR Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {arGames.map((game, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {game.title}
              </h3>
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
