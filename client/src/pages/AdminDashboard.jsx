

import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await axios.get(
        // "http://localhost:5000/api/users",
         `${import.meta.env.VITE_API_URL}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalUsers = users.length;

  const totalAdmins = users.filter(
    (u) => u.role === "admin"
  ).length;

  const totalStaff = users.filter(
    (u) => u.role === "staff"
  ).length;

  const totalUsersOnly = users.filter(
    (u) => u.role === "user"
  ).length;

  const registeredToday = users.filter((u) => {
    if (!u.createdAt) return false;

    const today = new Date();

    const joined = new Date(u.createdAt);

    return (
      today.getDate() === joined.getDate() &&
      today.getMonth() === joined.getMonth() &&
      today.getFullYear() === joined.getFullYear()
    );
  }).length;

  return (
    <DashboardLayout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Users Management
        </h1>

        <p className="text-slate-500 mt-2">
          Manage all registered users of QueueFlow AI.
        </p>

      </div>

      {/* Search */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-10">

        <div className="bg-white rounded-3xl shadow-md p-6">
          <p className="text-slate-500">
            Total Users
          </p>

          <h2 className="text-4xl font-bold mt-3 text-black-600">
            {totalUsers}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <p className="text-slate-500">
            Admins
          </p>

          <h2 className="text-4xl font-bold mt-3 text-black-500">
            {totalAdmins}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <p className="text-slate-500">
            Staff
          </p>

          <h2 className="text-4xl font-bold mt-3 text-black-500">
            {totalStaff}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <p className="text-slate-500">
            Users
          </p>

          <h2 className="text-4xl font-bold mt-3 text-black-600">
            {totalUsersOnly}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <p className="text-slate-500">
            Joined Today
          </p>

          <h2 className="text-4xl font-bold mt-3 text-black-600">
            {registeredToday}
          </h2>
        </div>

      </div>

      {/* Users Table */}

      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Registered Users
        </h2>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>

              <tr className="border-b text-slate-600">

                <th className="text-left py-4">
                  User
                </th>

                <th className="text-left py-4">
                  Email
                </th>

                <th className="text-left py-4">
                  Role
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Joined
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center py-12 text-slate-500"
                  >

                    No users found.

                  </td>

                </tr>

              ) : (

                filteredUsers.map((user) => (

                  <tr
                    key={user._id}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    {/* User */}

                    <td className="py-5">

                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">

                          {user.name.charAt(0).toUpperCase()}

                        </div>

                        <div>

                          <p className="font-semibold">
                            {user.name}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Email */}

                    <td>
                      {user.email}
                    </td>

                    {/* Role */}

                    <td>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold
                        ${
                          user.role === "admin"
                            ? "bg-red-100 text-red-600"
                            : user.role === "staff"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >

                        {user.role}

                      </span>

                    </td>

                    {/* Status */}

                    <td>

                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

                        Active

                      </span>

                    </td>

                    {/* Joined */}

                    <td>

                      {user.createdAt
                        ? new Date(
                            user.createdAt
                          ).toLocaleDateString()
                        : "--"}

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;