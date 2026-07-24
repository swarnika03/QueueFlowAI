// import DashboardLayout from "../layouts/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import socket from "../services/socket";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// function Analytics() {
//   const [analytics, setAnalytics] = useState({
//     totalUsers: 0,
//     totalTokens: 0,
//     averageWaitTime: 0,
//     activeCounters: 0,
//     dailyTokens: [],
//     waitTrend: [],
//     completionData: [],
// });
//   // const dailyTokens = [
//   //   { day: "Mon", tokens: 120 },
//   //   { day: "Tue", tokens: 150 },
//   //   { day: "Wed", tokens: 180 },
//   //   { day: "Thu", tokens: 140 },
//   //   { day: "Fri", tokens: 210 },
//   // ];

//   // const waitTime = [
//   //   { day: "Mon", wait: 18 },
//   //   { day: "Tue", wait: 15 },
//   //   { day: "Wed", wait: 20 },
//   //   { day: "Thu", wait: 14 },
//   //   { day: "Fri", wait: 12 },
//   // ];

//   // const completionData = [
//   //   { name: "Completed", value: 85 },
//   //   { name: "Skipped", value: 10 },
//   //   { name: "Missed", value: 5 },
//   // ];
// const [analytics, setAnalytics] = useState(null);
//   const COLORS = ["#C4B5FD", "#F9A8D4", "#93C5FD"];
//  const fetchAnalytics = async () => {

//     try {

//         const user = JSON.parse(
//             localStorage.getItem("userInfo")
//         );

//         const { data } = await axios.get(
//             "http://localhost:5000/api/analytics/dashboard",
//             {
//                 headers: {
//                     Authorization: `Bearer ${user.token}`,
//                 },
//             }
//         );

//         setAnalytics(data);

//     }

//     catch (err) {

//         console.log(err);

//     }

// };
// useEffect(() => {

//     fetchAnalytics();

//     socket.on("analyticsUpdated", () => {

//         fetchAnalytics();

//     });

//     return () => {

//         socket.off("analyticsUpdated");

//     };

// }, []);
//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">
//           Analytics Dashboard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Queue performance and operational insights.
//         </p>
//       </div>

//       {/* KPI Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Users
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             {analytics.totalUsers}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Tokens
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//            {analytics.totalTokens}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Average Wait Time
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//            {analytics.averageWaitTime} Min
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Active Counters
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//            {analytics.activeCounters}
//           </h2>
//         </div>

//       </div>

//       {/* Charts */}

//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//         {/* Bar Chart */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Daily Tokens
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>
//            <BarChart data={analytics.dailyTokens}>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="tokens" fill="#C4B5FD" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>

//         </div>

//         {/* Line Chart */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Wait Time Trend
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>
//            <LineChart data={analytics.waitTrend}>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="wait"
//                 stroke="#93C5FD"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>

//         </div>

//       </div>

//       {/* Pie Chart */}

//       <div className="mt-6 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-xl font-semibold mb-4">
//           Completion Status
//         </h2>

//         <ResponsiveContainer width="100%" height={350}>
//           <PieChart>
//             <Pie
//               data={analytics.completionData}
//               cx="50%"
//               cy="50%"
//               outerRadius={120}
//               dataKey="value"
//               label
//             >
//               {/* {completionData.map((entry, index) => (
//                 <Cell
//                   key={index}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))} */}
//               {analytics.completionData.map((entry, index) => (
//     <Cell
//         key={index}
//         fill={COLORS[index % COLORS.length]}
//     />
// ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default Analytics;



// 2


// import DashboardLayout from "../layouts/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import socket from "../services/socket";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// function Analytics() {

//   const [analytics, setAnalytics] = useState({
//     totalUsers: 0,
//     totalTokens: 0,
//     averageWaitTime: 0,
//     activeCounters: 0,
//     dailyTokens: [],
//     waitTrend: [],
//     completionData: [],
//   });

//   const COLORS = ["#C4B5FD", "#F9A8D4", "#93C5FD"];

//   // -------------------------
//   // Fetch Analytics
//   // -------------------------

//   const fetchAnalytics = async () => {
//     try {

//       const user = JSON.parse(
//         localStorage.getItem("userInfo")
//       );

//       const { data } = await axios.get(
//         "http://localhost:5000/api/analytics/dashboard",
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       setAnalytics(data);

//     } catch (err) {

//       console.log(err);

//     }
//   };

//   // -------------------------
//   // Initial Load + Socket
//   // -------------------------

//   useEffect(() => {

//     fetchAnalytics();

//     socket.on("analyticsUpdated", () => {

//       fetchAnalytics();

//     });

//     return () => {

//       socket.off("analyticsUpdated");

//     };

//   }, []);

//   return (

//     <DashboardLayout>

//       {/* Header */}

//       <div className="mb-8">

//         <h1 className="text-4xl font-bold text-slate-800">
//           Analytics Dashboard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Queue performance and operational insights.
//         </p>

//       </div>

//       {/* KPI Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Users
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             {analytics.totalUsers}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Total Tokens
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             {analytics.totalTokens}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Average Wait Time
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             {analytics.averageWaitTime} Min
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Active Counters
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             {analytics.activeCounters}
//           </h2>
//         </div>

//       </div>

//       {/* Charts */}

//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

//         {/* Daily Tokens */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Daily Tokens
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>

//             <BarChart data={analytics.dailyTokens}>

//               <XAxis dataKey="day" />

//               <YAxis />

//               <Tooltip />

//               <Bar
//                 dataKey="tokens"
//                 fill="#C4B5FD"
//                 radius={[8, 8, 0, 0]}
//               />

//             </BarChart>

//           </ResponsiveContainer>

//         </div>

//         {/* Wait Trend */}

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-xl font-semibold mb-4">
//             Wait Time Trend
//           </h2>

//           <ResponsiveContainer width="100%" height={300}>

//             <LineChart data={analytics.waitTrend}>

//               <XAxis dataKey="day" />

//               <YAxis />

//               <Tooltip />

//               <Line
//                 type="monotone"
//                 dataKey="wait"
//                 stroke="#93C5FD"
//                 strokeWidth={3}
//               />

//             </LineChart>

//           </ResponsiveContainer>

//         </div>

//       </div>

//       {/* Pie Chart */}

//       <div className="mt-6 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-xl font-semibold mb-4">
//           Completion Status
//         </h2>

//         <ResponsiveContainer width="100%" height={350}>

//           <PieChart>

//             <Pie
//               data={analytics.completionData}
//               cx="50%"
//               cy="50%"
//               outerRadius={120}
//               dataKey="value"
//               label
//             >

//               {analytics.completionData.map((entry, index) => (

//                 <Cell
//                   key={index}
//                   fill={COLORS[index % COLORS.length]}
//                 />

//               ))}

//             </Pie>

//             <Tooltip />

//           </PieChart>

//         </ResponsiveContainer>

//       </div>

//     </DashboardLayout>

//   );

// }

// export default Analytics;






import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../services/socket";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {

  const [analytics, setAnalytics] = useState({

    totalUsers: 0,

    totalTokens: 0,

    waitingTokens: 0,

    servingTokens: 0,

    completedTokens: 0,

    heldTokens: 0,

    completionRate: 0,

    averageWaitTime: 0,

    activeCounters: 0,

    dailyTokens: [],

    waitTrend: [],

    completionData: [],

  });

  const COLORS = [
    "#60A5FA", // Waiting
    "#FBBF24", // Serving
    "#22C55E", // Completed
    "#F87171", // Held
  ];

  // ===============================
  // Fetch Analytics
  // ===============================

  const fetchAnalytics = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      const { data } = await axios.get(
        "http://localhost:5000/api/analytics/dashboard",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setAnalytics(data);

    } catch (err) {

      console.log(err);

    }

  };

  // ===============================
  // Initial Load
  // ===============================

  useEffect(() => {

    fetchAnalytics();

    socket.on("analyticsUpdated", () => {

      fetchAnalytics();

    });

    return () => {

      socket.off("analyticsUpdated");

    };

  }, []);

  return (

    <DashboardLayout>

      {/* ================= Header ================= */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Live insights into queue performance and operational efficiency.
        </p>

      </div>

      {/* ================= KPI Cards ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Total Users
          </p>

          <h2 className="text-3xl font-bold mt-2 text-purple-600">
            {analytics.totalUsers}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Total Tokens
          </p>

          <h2 className="text-3xl font-bold mt-2 text-pink-500">
            {analytics.totalTokens}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Waiting Tokens
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-500">
            {analytics.waitingTokens}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Currently Serving
          </p>

          <h2 className="text-3xl font-bold mt-2 text-yellow-500">
            {analytics.servingTokens}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Completed Tokens
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {analytics.completedTokens}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Held Tokens
          </p>

          <h2 className="text-3xl font-bold mt-2 text-red-500">
            {analytics.heldTokens}
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Average Wait Time
          </p>

          <h2 className="text-3xl font-bold mt-2 text-indigo-500">
            {analytics.averageWaitTime} min
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <p className="text-slate-500 text-sm">
            Completion Rate
          </p>

          <h2 className="text-3xl font-bold mt-2 text-emerald-600">
            {analytics.completionRate}%
          </h2>

        </div>

      </div>
            {/* ================= Charts ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Daily Tokens */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">
            Daily Token Generation
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={analytics.dailyTokens}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="tokens"
                fill="#8B5CF6"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Wait Time Trend */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">
            Average Wait Time Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={analytics.waitTrend}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="wait"
                stroke="#3B82F6"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ================= Bottom Section ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* Queue Status Pie Chart */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">

            Queue Status Distribution

          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <PieChart>

              <Pie
                data={analytics.completionData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={65}
                dataKey="value"
                label
              >

                {analytics.completionData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Queue Summary */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">

            Queue Summary

          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-600">
                Total Tokens Generated
              </span>

              <span className="font-bold">
                {analytics.totalTokens}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Waiting Tokens
              </span>

              <span className="font-bold text-blue-500">
                {analytics.waitingTokens}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Currently Serving
              </span>

              <span className="font-bold text-yellow-500">
                {analytics.servingTokens}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Completed Tokens
              </span>

              <span className="font-bold text-green-600">
                {analytics.completedTokens}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Held Tokens
              </span>

              <span className="font-bold text-red-500">
                {analytics.heldTokens}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Active Counters
              </span>

              <span className="font-bold text-purple-600">
                {analytics.activeCounters}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-600">
                Average Wait
              </span>

              <span className="font-bold">
                {analytics.averageWaitTime} min
              </span>

            </div>

          </div>

        </div>

      </div>
            {/* ================= Recent Activity + Queue Health ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">

            Recent Activity

          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-green-500 pl-4">

              <p className="font-semibold">

                Completed Tokens

              </p>

              <p className="text-slate-500 text-sm">

                {analytics.completedTokens} tokens have been completed.

              </p>

            </div>

            <div className="border-l-4 border-yellow-400 pl-4">

              <p className="font-semibold">

                Tokens Currently Serving

              </p>

              <p className="text-slate-500 text-sm">

                {analytics.servingTokens} token(s) are currently being served.

              </p>

            </div>

            <div className="border-l-4 border-blue-500 pl-4">

              <p className="font-semibold">

                Waiting Queue

              </p>

              <p className="text-slate-500 text-sm">

                {analytics.waitingTokens} users are waiting.

              </p>

            </div>

            <div className="border-l-4 border-red-400 pl-4">

              <p className="font-semibold">

                Held Tokens

              </p>

              <p className="text-slate-500 text-sm">

                {analytics.heldTokens} token(s) are currently on hold.

              </p>

            </div>

          </div>

        </div>

        {/* Queue Health */}

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">

            Queue Health

          </h2>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <span className="text-slate-600">

                  Completion Rate

                </span>

                <span className="font-bold">

                  {analytics.completionRate}%

                </span>

              </div>

              <div className="w-full bg-slate-200 rounded-full h-4">

                <div

                  className="bg-gradient-to-r from-green-400 to-emerald-600 h-4 rounded-full"

                  style={{

                    width: `${analytics.completionRate}%`,

                  }}

                ></div>

              </div>

            </div>

            <div>

              <h3 className="font-semibold mb-2">

                System Status

              </h3>

              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                🟢 Operational

              </div>

            </div>

            <div>

              <h3 className="font-semibold mb-2">

                Queue Performance

              </h3>

              <p className="text-slate-600">

                Average waiting time is

                <span className="font-bold text-purple-600">

                  {" "}
                  {analytics.averageWaitTime} minutes

                </span>

                .

              </p>

            </div>

            <div>

              <h3 className="font-semibold mb-2">

                Recommendation

              </h3>

              <p className="text-slate-600">

                {analytics.waitingTokens > 10

                  ? "⚠ High queue load detected. Consider opening additional counters."

                  : analytics.waitingTokens > 5

                  ? "🟡 Moderate queue load. Monitor token flow."

                  : "✅ Queue operating efficiently."}

              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default Analytics;