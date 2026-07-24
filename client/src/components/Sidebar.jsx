

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTicketAlt,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/user",
    },
    {
      name: "Queue Status",
      icon: <FaTicketAlt />,
      path: "/queue",
    },
    {
      name: "Analytics",
      icon: <FaChartBar />,
      path: "/analytics",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/admin",
    },
    
  ];

  return (
    <div className="w-72 h-screen bg-white shadow-xl flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          QueueFlow AI
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Smart Queue Platform
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 p-4">

        <div className="space-y-2">

          {menuItems.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-purple-700 font-semibold"
                  : "hover:bg-slate-100 text-slate-600"
              }`}
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </Link>

          ))}

        </div>

      </div>

      {/* User Section */}

      <div className="border-t p-4">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div>

            <h3 className="font-semibold">
              {user?.name || "Guest"}
            </h3>

            <p className="text-sm text-slate-500">
              {user?.role || ""}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 py-3 rounded-xl transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;
