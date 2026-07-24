import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Settings() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [branch, setBranch] = useState({
    name: "",
    counters: 0,
    workingHours: "",
  });

  const [queueSettings, setQueueSettings] = useState({
    averageServiceTime: 5,
  });

  const [notifications, setNotifications] = useState({
    email: true,
    browser: true,
    sound: true,
  });

  const [theme, setTheme] = useState("light");

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showLogout, setShowLogout] = useState(false);

  //--------------------------------------------------
  // Load Settings
  //--------------------------------------------------

  const fetchSettings = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      const { data } = await axios.get(
        "http://localhost:5000/api/settings",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setProfile(data.user);

      setQueueSettings(data.queue);

      setNotifications(data.notifications);

      setBranch(data.branch);

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchSettings();

  }, []);

  //--------------------------------------------------
  // Queue Setting
  //--------------------------------------------------

  const saveQueueSettings = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.put(
        "http://localhost:5000/api/settings/queue",
        queueSettings,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Queue settings updated.");

    } catch (err) {

      console.log(err);

    }

  };

  //--------------------------------------------------
  // Notification Setting
  //--------------------------------------------------

  const saveNotificationSettings = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.put(
        "http://localhost:5000/api/settings/notifications",
        notifications,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Notification settings updated.");

    } catch (err) {

      console.log(err);

    }

  };

  //--------------------------------------------------
  // Change Password
  //--------------------------------------------------

  const updatePassword = async () => {

    if (
      password.newPassword !==
      password.confirmPassword
    ) {

      alert("Passwords do not match.");

      return;

    }

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      await axios.put(
        "http://localhost:5000/api/users/change-password",
        password,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Password Updated Successfully");

      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (err) {

      console.log(err);

    }

  };

  //--------------------------------------------------
  // Logout
  //--------------------------------------------------

  const logoutHandler = () => {

    localStorage.removeItem("userInfo");

    localStorage.removeItem("token");

    navigate("/login");

  };

  //--------------------------------------------------

  if (loading) {

    return (

      <DashboardLayout>

        <div className="flex justify-center items-center h-[70vh]">

          <h2 className="text-2xl font-semibold">

            Loading Settings...

          </h2>

        </div>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">

          Settings

        </h1>

        <p className="text-slate-500 mt-2">

          Manage your QueueFlow AI account and application preferences.

        </p>

      </div>
            {/* ================= PROFILE ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Profile Information
            </h2>

            <p className="text-slate-500 mt-1">
              Your account information
            </p>

          </div>

          <button
            className="px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Edit Profile
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              Name
            </label>

            <input
              type="text"
              value={profile.name}
              readOnly
              className="w-full border rounded-xl px-4 py-3 bg-slate-50"
            />

          </div>

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              Email
            </label>

            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full border rounded-xl px-4 py-3 bg-slate-50"
            />

          </div>

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              Role
            </label>

            <input
              type="text"
              value={profile.role}
              readOnly
              className="w-full border rounded-xl px-4 py-3 bg-slate-50 capitalize"
            />

          </div>

        </div>

      </div>

      {/* ================= CHANGE PASSWORD ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">

          Change Password

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              Current Password
            </label>

            <input
              type="password"
              value={password.currentPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  currentPassword: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              New Password
            </label>

            <input
              type="password"
              value={password.newPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  newPassword: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm text-slate-500 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={password.confirmPassword}
              onChange={(e) =>
                setPassword({
                  ...password,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <button
          onClick={updatePassword}
          className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >

          Update Password

        </button>

      </div>

      {/* ================= QUEUE SETTINGS ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">

          Queue Settings

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>

            <label className="block text-sm text-slate-500 mb-2">

              Average Service Time (Minutes)

            </label>

            <input
              type="number"
              value={queueSettings.averageServiceTime}
              onChange={(e) =>
                setQueueSettings({
                  averageServiceTime: Number(e.target.value),
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <button
          onClick={saveQueueSettings}
          className="mt-6 px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >

          Save Queue Settings

        </button>

      </div>
            {/* ================= NOTIFICATION SETTINGS ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Notification Settings
        </h2>

        <div className="space-y-5">

          <label className="flex justify-between items-center">

            <span className="text-slate-700 font-medium">
              Email Notifications
            </span>

            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  email: !notifications.email,
                })
              }
              className="w-5 h-5"
            />

          </label>

          <label className="flex justify-between items-center">

            <span className="text-slate-700 font-medium">
              Browser Notifications
            </span>

            <input
              type="checkbox"
              checked={notifications.browser}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  browser: !notifications.browser,
                })
              }
              className="w-5 h-5"
            />

          </label>

          <label className="flex justify-between items-center">

            <span className="text-slate-700 font-medium">
              Sound Alerts
            </span>

            <input
              type="checkbox"
              checked={notifications.sound}
              onChange={() =>
                setNotifications({
                  ...notifications,
                  sound: !notifications.sound,
                })
              }
              className="w-5 h-5"
            />

          </label>

        </div>

        <button
          onClick={saveNotificationSettings}
          className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition"
        >
          Save Notification Settings
        </button>

      </div>

      {/* ================= THEME ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Theme
        </h2>

        <div className="space-y-4">

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="theme"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />

            <span>Light Mode</span>

          </label>

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="theme"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />

            <span>Dark Mode</span>

          </label>

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="theme"
              checked={theme === "system"}
              onChange={() => setTheme("system")}
            />

            <span>System Default</span>

          </label>

        </div>

      </div>

      {/* ================= BRANCH INFORMATION ================= */}

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Branch Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>

            <p className="text-slate-500 text-sm">
              Branch
            </p>

            <h3 className="text-xl font-bold mt-2">
              {branch.name}
            </h3>

          </div>

          <div>

            <p className="text-slate-500 text-sm">
              Active Counters
            </p>

            <h3 className="text-xl font-bold mt-2">
              {branch.counters}
            </h3>

          </div>

          <div>

            <p className="text-slate-500 text-sm">
              Working Hours
            </p>

            <h3 className="text-xl font-bold mt-2">
              {branch.workingHours}
            </h3>

          </div>

        </div>

      </div>

      {/* ================= LOGOUT ================= */}

      <div className="flex justify-end mb-10">

        <button
          onClick={() => setShowLogout(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Logout
        </button>

      </div>

      {/* ================= LOGOUT MODAL ================= */}

      {showLogout && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-3xl shadow-xl p-8 w-[400px]">

            <h2 className="text-2xl font-bold mb-4">

              Logout

            </h2>

            <p className="text-slate-600 mb-8">

              Are you sure you want to logout from QueueFlow AI?

            </p>

            <div className="flex justify-end gap-4">

              <button
                onClick={() => setShowLogout(false)}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300"
              >
                Cancel
              </button>

              <button
                onClick={logoutHandler}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>

  );

}

export default Settings;