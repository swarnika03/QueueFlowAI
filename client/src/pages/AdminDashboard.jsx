// import DashboardLayout from "../layouts/DashboardLayout";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function AdminDashboard() {
//   const branchData = [
//     {
//       branch: "Branch A",
//       tokens: 120,
//     },
//     {
//       branch: "Branch B",
//       tokens: 150,
//     },
//     {
//       branch: "Branch C",
//       tokens: 180,
//     },
//   ];

//   const staffPerformance = [
//     {
//       counter: "Counter 1",
//       served: 100,
//     },
//     {
//       counter: "Counter 2",
//       served: 85,
//     },
//     {
//       counter: "Counter 3",
//       served: 92,
//     },
//   ];

//   const recentActivity = [
//     {
//       activity: "User Registered",
//       time: "10:15 AM",
//     },
//     {
//       activity: "Token Generated",
//       time: "10:25 AM",
//     },
//     {
//       activity: "Counter Started",
//       time: "10:40 AM",
//     },
//     {
//       activity: "Queue Closed",
//       time: "11:00 AM",
//     },
//   ];

//   return (
//     <DashboardLayout>
//       {/* Header */}

//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">
//           Admin Dashboard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Monitor system performance, branches, counters, and queue operations.
//         </p>
//       </div>

//       {/* KPI Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Users
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             500
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Tokens
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             2500
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Active Counters
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             8
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Branches
//           </h3>

//           <h2 className="text-4xl font-bold mt-3">
//             3
//           </h2>
//         </div>

//       </div>

//       {/* Branch Statistics */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//           Branch Statistics
//         </h2>

//         <ResponsiveContainer width="100%" height={320}>
//           <BarChart data={branchData}>
//             <XAxis dataKey="branch" />
//             <YAxis />
//             <Tooltip />

//             <Bar
//               dataKey="tokens"
//               fill="#C4B5FD"
//               radius={[8, 8, 0, 0]}
//             />
//           </BarChart>
//         </ResponsiveContainer>

//       </div>

//       {/* Staff Performance */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//           Staff Performance
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="w-full">

//             <thead>

//               <tr className="border-b">

//                 <th className="text-left py-4">
//                   Counter
//                 </th>

//                 <th className="text-left py-4">
//                   Tokens Served
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {staffPerformance.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b hover:bg-slate-50"
//                 >

//                   <td className="py-4">
//                     {item.counter}
//                   </td>

//                   <td className="py-4 font-semibold">
//                     {item.served}
//                   </td>

//                 </tr>
//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//       {/* Recent Activity + System Health */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

//         {/* Recent Activity */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-2xl font-semibold mb-6">
//             Recent Activity
//           </h2>

//           <div className="space-y-4">

//             {recentActivity.map((item, index) => (
//               <div
//                 key={index}
//                 className="border-b pb-3"
//               >

//                 <h3 className="font-medium">
//                   {item.activity}
//                 </h3>

//                 <p className="text-sm text-slate-500">
//                   {item.time}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>

//         {/* System Health */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-2xl font-semibold mb-6">
//             System Health
//           </h2>

//           <div className="space-y-5">

//             <div className="flex justify-between items-center">

//               <span>
//                 Database Status
//               </span>

//               <span className="px-4 py-1 rounded-full bg-green-100 text-green-700">
//                 Online
//               </span>

//             </div>

//             <div className="flex justify-between items-center">

//               <span>
//                 Socket.IO Status
//               </span>

//               <span className="px-4 py-1 rounded-full bg-green-100 text-green-700">
//                 Active
//               </span>

//             </div>

//             <div className="flex justify-between items-center">

//               <span>
//                 ML Service Status
//               </span>

//               <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700">
//                 Training
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default AdminDashboard;





// 2.




// import DashboardLayout from "../layouts/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function AdminDashboard() {

//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {

//     try {

//       const user = JSON.parse(
//         localStorage.getItem("userInfo")
//       );

//       const { data } = await axios.get(
//         "http://localhost:5000/api/users",
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       setUsers(data);

//     } catch (err) {

//       console.log(err);

//     }

//   };

//   useEffect(() => {

//     fetchUsers();

//   }, []);

//   return (

//     <DashboardLayout>

//       {/* Header */}

//       <div className="mb-8">

//         <h1 className="text-4xl font-bold text-slate-800">
//           Staff & Users
//         </h1>

//         <p className="text-slate-500 mt-2">
//           View all registered users in QueueFlow AI.
//         </p>

//       </div>

//       {/* Top Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <p className="text-slate-500">
//             Total Users
//           </p>

//           <h2 className="text-4xl font-bold mt-3 text-purple-600">
//             {users.length}
//           </h2>

//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <p className="text-slate-500">
//             Staff Members
//           </p>

//           <h2 className="text-4xl font-bold mt-3 text-pink-500">
//             {users.filter(u => u.role === "staff").length}
//           </h2>

//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <p className="text-slate-500">
//             Regular Users
//           </p>

//           <h2 className="text-4xl font-bold mt-3 text-blue-600">
//             {users.filter(u => u.role === "user").length}
//           </h2>

//         </div>

//       </div>

//       {/* Table */}

//       <div className="bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-bold mb-6">

//           Registered Users

//         </h2>

//         <div className="overflow-x-auto">

//           <table className="min-w-full">

//             <thead>

//               <tr className="border-b">

//                 <th className="text-left py-3">
//                   Name
//                 </th>

//                 <th className="text-left py-3">
//                   Email
//                 </th>

//                 <th className="text-left py-3">
//                   Role
//                 </th>

//                 <th className="text-left py-3">
//                   Joined
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {users.map((user) => (

//                 <tr
//                   key={user._id}
//                   className="border-b hover:bg-slate-50 transition"
//                 >

//                   <td className="py-4 font-medium">

//                     {user.name}

//                   </td>

//                   <td>

//                     {user.email}

//                   </td>

//                   <td>

//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold
//                       ${
//                         user.role === "admin"
//                           ? "bg-red-100 text-red-600"
//                           : user.role === "staff"
//                           ? "bg-purple-100 text-purple-600"
//                           : "bg-blue-100 text-blue-600"
//                       }`}
//                     >

//                       {user.role}

//                     </span>

//                   </td>

//                   <td>

//                     {new Date(user.createdAt).toLocaleDateString()}

//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//     </DashboardLayout>

//   );

// }

// export default AdminDashboard;



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
        "http://localhost:5000/api/users",
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