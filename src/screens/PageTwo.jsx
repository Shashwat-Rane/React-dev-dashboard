import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const vrTechnologies = [
  {
    title: "Oculus Quest 3",
    description:
      "Experience next-gen wireless VR with advanced tracking and crisp visuals.",
    image:
      "https://vrcover.com/wp-content/uploads/2023/06/Meta-Quest-3-VR-headset-and-controllers.jpg",
    knowMore:
      "https://www.meta.com/quest/quest-3/?srsltid=AfmBOoq4bGGV6eKWTEFs69Bvkiirko-gZR6FOqeSlEirheFxvVMZigd-",
  },
  {
    title: "HTC Vive Pro 2",
    description: "High-resolution VR headset for a fully immersive experience.",
    image:
      "https://www.vive.com/media/filer_public/fed-assets/vivepro2/images/pro2-meta.jpg",
    knowMore: "https://www.vive.com/us/product/vive-pro2/overview/",
  },
  {
    title: "PlayStation VR2",
    description: "Sony's powerful VR headset bringing console gaming to life.",
    image:
      "https://mms.businesswire.com/media/20230222005126/en/1718672/5/PSVR2_16X9.jpg",
    knowMore: "https://www.playstation.com/en-in/ps-vr2/",
  },
  {
    title: "Varjo XR-4",
    description:
      "Industry-leading mixed reality headset for enterprise and gaming.",
    image:
      "https://assets-web-varjo.s3.eu-north-1.amazonaws.com/wp-content/uploads/2023/11/22111703/W5A0746-1-1.jpg",
    knowMore: "https://varjo.com/products/xr-4/",
  },
  {
    title: "HoloLens 2",
    description:
      "Microsoft’s AR-powered device blending virtual with real-world interactions.",
    image: "https://5.imimg.com/data5/QN/GI/BR/SELLER-1094211/hololens-2.jpg",
    knowMore: "https://learn.microsoft.com/en-us/hololens/",
  },
  {
    title: "Pimax Crystal",
    description:
      "A high-resolution VR headset delivering ultra-wide FOV for immersive gameplay.",
    image:
      "https://pimax.com/cdn/shop/files/Crystal_Banner_fee102e1-2c19-4bd9-9fc3-9f1f12373f84.webp?v=1714374418",
    knowMore:
      "https://pimax.com/?gfsid=CjsaCgaARa8LoLw9WNnE2i9Hzga6UH048kqGIMaAlbLEALw_wcB&varce=vplolpo&edva=vterukilop2&amvaign=gadare3da&onnert=ikopolte&ref=o3d7ao&cafs=banlolop&gad_source=1&gbraid=0AAAAApzgUaNxgm0VIUkaUvydncFilQFw6&gclid=CjwKCAiA8Lu9BhA8EiwAag16b_6qbsEbGAocOq3gMmaMSpyozyaRBiIvFZwVxVKEbW4ztHCO9G7GhRoCaPAQAvD_BwE",
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
        Ascend to Olympus, where the most advanced VR technology meets
        breathtaking storytelling. Discover the power of virtual gods and embark
        on a divine adventure beyond imagination.
      </p>

      {/* VR Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {vrTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-xl shadow-lg overflow-hidden transition-transform duration-300 border border-gray-700 hover:shadow-xl"
          >
            <img
              src={tech.image}
              alt={tech.title}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-purple-400">
                {tech.title}
              </h3>
              <p className="text-gray-300 mt-2">{tech.description}</p>
              <button
                onClick={() =>
                  window.open(tech.knowMore, "_blank", "noopener,noreferrer")
                }
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
