
import { FaCircle } from "react-icons/fa";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl shadow-md px-8 py-6 flex justify-between items-center">

      {/* Left */}

      <div>
 <p className="text-base text-slate-500 mt-1">
          Queue Management System
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-8">

        {/* Status */}

        <div className="text-right">

          <div className="flex items-center justify-end gap-2">

            <FaCircle className="text-green-500 text-xs" />

            <span className="text-sm font-semibold text-green-600">
              Operational
            </span>

          </div>

          <p className="text-xs text-slate-400 mt-1">
            {today}
          </p>

        </div>

        {/* Divider */}

        <div className="h-12 w-px bg-slate-200"></div>

        {/* User */}

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow">

            {user?.name?.charAt(0).toUpperCase()}

          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              {user?.name}
            </h3>

            <p className="text-sm text-slate-500 capitalize">
              {user?.role}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;

