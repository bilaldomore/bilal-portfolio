import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

function FloatingIcons() {
  const icons = [
    {
      icon: <FaReact className="text-cyan-400" />,
      className: "top-[-10%]  left-1/2 -translate-x-1/2",
    },
    {
      icon: <FaNodeJs className="text-green-500" />,
      className: "top-[18%] right-0",
    },
    {
      icon: <SiExpress className="text-gray-300" />,
      className: "bottom-[18%] right-0",
    },
    {
      icon: <SiTailwindcss className="text-cyan-500" />,
      className: "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: <SiMongodb className="text-green-600" />,
      className: "bottom-[18%] left-0",
    },
    {
      icon: <SiJavascript className="text-yellow-400" />,
      className: "top-[18%] left-0",
    },
    {
      icon: <SiShopify className="text-green-500" />,
      className: "top-1/2 -left-10 -translate-y-1/2",
    },
    {
      icon: <SiWordpress className="text-blue-500" />,
      className: "top-1/2 -right-10 -translate-y-1/2",
    },
  ];

  return (
    <>
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.className}
          w-12 h-12 lg:w-16 lg:h-16 rounded-full
          bg-[#0B1120]
          border border-white/10
          flex items-center justify-center
          text-2xl lg:text-3xl
          shadow-lg
          hover:scale-110
          transition-all
          duration-300`}
        >
          {item.icon}
        </div>
      ))}
    </>
  );
}

export default FloatingIcons;