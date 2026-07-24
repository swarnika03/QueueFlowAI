// import DashboardLayout from "../layouts/DashboardLayout";

// function StaffDashboard() {
//   const queueData = [
//     {
//       token: "A101",
//       status: "Serving",
//       branch: "Main",
//       counter: "2",
//     },
//     {
//       token: "A102",
//       status: "Waiting",
//       branch: "Main",
//       counter: "2",
//     },
//     {
//       token: "A103",
//       status: "Waiting",
//       branch: "Main",
//       counter: "2",
//     },
//     {
//       token: "A104",
//       status: "Held",
//       branch: "Main",
//       counter: "2",
//     },
//     {
//       token: "A105",
//       status: "Completed",
//       branch: "Main",
//       counter: "2",
//     },
//   ];

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case "Serving":
//         return "bg-green-100 text-green-700";

//       case "Waiting":
//         return "bg-blue-100 text-blue-700";

//       case "Held":
//         return "bg-yellow-100 text-yellow-700";

//       case "Completed":
//         return "bg-purple-100 text-purple-700";

//       default:
//         return "bg-slate-100 text-slate-700";
//     }
//   };

//   return (
//     <DashboardLayout>
//       {/* Header */}

//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">
//           Staff Dashboard
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Manage tokens, monitor queues, and control queue flow.
//         </p>
//       </div>

//       {/* KPI Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Waiting Tokens
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             20
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Serving Token
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             A101
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Completed Today
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             150
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Avg Service Time
//           </h3>

//           <h2 className="text-3xl font-bold mt-2">
//             5 Min
//           </h2>
//         </div>

//       </div>

//       {/* Queue Controls */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//           Queue Controls
//         </h2>

//         <div className="flex flex-wrap gap-4">

//           <button className="px-6 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600">
//             Call Next
//           </button>

//           <button className="px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600">
//             Skip
//           </button>

//           <button className="px-6 py-3 rounded-xl bg-yellow-400 text-white hover:bg-yellow-500">
//             Hold
//           </button>

//           <button className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600">
//             Complete
//           </button>

//           <button className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
//             Recall
//           </button>

//         </div>

//       </div>

//       {/* Current Serving + Queue Summary */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-2xl font-semibold mb-4">
//             Currently Serving
//           </h2>

//           <div className="space-y-4">

//             <div>
//               <p className="text-slate-500">
//                 Token
//               </p>

//               <h3 className="text-4xl font-bold">
//                 A101
//               </h3>
//             </div>

//             <div>
//               <p className="text-slate-500">
//                 Counter
//               </p>

//               <h3 className="font-semibold">
//                 Counter 2
//               </h3>
//             </div>

//             <div>
//               <p className="text-slate-500">
//                 Started At
//               </p>

//               <h3 className="font-semibold">
//                 10:20 AM
//               </h3>
//             </div>

//           </div>

//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">

//           <h2 className="text-2xl font-semibold mb-4">
//             Queue Summary
//           </h2>

//           <div className="space-y-4">

//             <div className="flex justify-between">
//               <span>Total Queue Length</span>
//               <span className="font-semibold">20</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Active Counters</span>
//               <span className="font-semibold">4</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Branch</span>
//               <span className="font-semibold">
//                 Main Branch
//               </span>
//             </div>

//             <div className="flex justify-between">
//               <span>Status</span>
//               <span className="text-green-600 font-semibold">
//                 Operational
//               </span>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Queue Table */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//           Queue Table
//         </h2>

//         <div className="overflow-x-auto">

//           <table className="w-full">

//             <thead>

//               <tr className="border-b">

//                 <th className="text-left py-4">
//                   Token
//                 </th>

//                 <th className="text-left py-4">
//                   Status
//                 </th>

//                 <th className="text-left py-4">
//                   Branch
//                 </th>

//                 <th className="text-left py-4">
//                   Counter
//                 </th>

//               </tr>

//             </thead>

//             <tbody>

//               {queueData.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b hover:bg-slate-50"
//                 >

//                   <td className="py-4 font-medium">
//                     {item.token}
//                   </td>

//                   <td className="py-4">

//                     <span
//                       className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
//                         item.status
//                       )}`}
//                     >
//                       {item.status}
//                     </span>

//                   </td>

//                   <td className="py-4">
//                     {item.branch}
//                   </td>

//                   <td className="py-4">
//                     {item.counter}
//                   </td>

//                 </tr>
//               ))}

//             </tbody>

//           </table>

//         </div>

//       </div>

//       {/* Recent Actions */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

//         <h2 className="text-2xl font-semibold mb-6">
//           Recent Actions
//         </h2>

//         <div className="space-y-4">

//           <div className="border-l-4 border-purple-400 pl-4">
//             <p className="font-medium">
//               Token A101 Called
//             </p>

//             <p className="text-sm text-slate-500">
//               10:20 AM
//             </p>
//           </div>

//           <div className="border-l-4 border-green-400 pl-4">
//             <p className="font-medium">
//               Token A100 Completed
//             </p>

//             <p className="text-sm text-slate-500">
//               10:18 AM
//             </p>
//           </div>

//           <div className="border-l-4 border-blue-400 pl-4">
//             <p className="font-medium">
//               Token A102 Waiting
//             </p>

//             <p className="text-sm text-slate-500">
//               10:15 AM
//             </p>
//           </div>

//         </div>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default StaffDashboard;

import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../services/socket";

function StaffDashboard() {

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [queueData, setQueueData] = useState([]);
  const [currentServing, setCurrentServing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [recentActions, setRecentActions] = useState([]);

  // ============================
  // Fetch Queue
  // ============================

  const fetchQueue = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/tokens/queue",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setQueueData(data);

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Fetch Current Serving
  // ============================

  const fetchCurrentServing = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/tokens/current-serving",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setCurrentServing(data);

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Refresh Everything
  // ============================

  const refreshDashboard = async () => {

    setLoading(true);

    await fetchQueue();

    await fetchCurrentServing();

    setLoading(false);

  };

  // ============================
  // Call Next Token
  // ============================

  const handleCallNext = async () => {

    try {

      await axios.put(
        "http://localhost:5000/api/tokens/call-next",
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      refreshDashboard();

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Complete Current Token
  // ============================

  const handleComplete = async () => {

    if (!currentServing) {

      alert("No Token is currently serving");

      return;

    }

    try {

      await axios.put(
        `http://localhost:5000/api/tokens/${currentServing._id}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      refreshDashboard();

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Hold Token
  // ============================

  const handleHold = async () => {

    if (!currentServing) return;

    try {

      await axios.put(
        `http://localhost:5000/api/tokens/${currentServing._id}/hold`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      refreshDashboard();

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Skip Token
  // ============================

  const handleSkip = async () => {

    if (!currentServing) return;

    try {

      await axios.put(
        `http://localhost:5000/api/tokens/${currentServing._id}/skip`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      refreshDashboard();

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Recall Token
  // ============================

  const handleRecall = async () => {

    if (!currentServing) return;

    try {

      await axios.put(
        `http://localhost:5000/api/tokens/${currentServing._id}/recall`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      refreshDashboard();

    } catch (err) {

      console.log(err);

    }

  };

  // ============================
  // Socket.IO
  // ============================

  useEffect(() => {

    refreshDashboard();

    socket.on("tokenCalled", (data) => {

      refreshDashboard();

      setRecentActions(prev => [

        {
          action: `Called ${data.tokenNumber}`,
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

    });

    socket.on("tokenCompleted", (data) => {

      refreshDashboard();

      setRecentActions(prev => [

        {
          action: `Completed ${data.tokenNumber}`,
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

    });

    socket.on("tokenHeld", refreshDashboard);

    socket.on("tokenRecalled", refreshDashboard);

    return () => {

      socket.off("tokenCalled");

      socket.off("tokenCompleted");

      socket.off("tokenHeld");

      socket.off("tokenRecalled");

    };

  }, []);

  const getStatusStyle = (status) => {

    switch (status) {

      case "waiting":
        return "bg-blue-100 text-blue-700";

      case "serving":
        return "bg-green-100 text-green-700";

      case "completed":
        return "bg-purple-100 text-purple-700";

      case "held":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-slate-100 text-slate-700";

    }

  };

  return (
    <DashboardLayout>

  {/* Header */}

  <div className="mb-8">

    <h1 className="text-4xl font-bold text-slate-800">
      Staff Dashboard
    </h1>

    <p className="text-slate-500 mt-2">
      Manage tokens and monitor queue in real time.
    </p>

  </div>

  {/* Loading */}

  {loading ? (

    <div className="text-center text-2xl font-semibold py-20">
      Loading Queue...
    </div>

  ) : (

    <>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h3 className="text-slate-500 text-sm">
            Waiting Tokens
          </h3>

          <h2 className="text-3xl font-bold mt-2">

            {queueData.filter(
              token => token.status === "waiting"
            ).length}

          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h3 className="text-slate-500 text-sm">
            Serving Token
          </h3>

          <h2 className="text-3xl font-bold mt-2 text-purple-600">

            {currentServing?.tokenNumber || "--"}

          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h3 className="text-slate-500 text-sm">
            Completed Today
          </h3>

          <h2 className="text-3xl font-bold mt-2">

            {queueData.filter(
              token => token.status === "completed"
            ).length}

          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h3 className="text-slate-500 text-sm">
            Total Queue
          </h3>

          <h2 className="text-3xl font-bold mt-2">

            {queueData.length}

          </h2>

        </div>

      </div>

      {/* Queue Controls */}

      <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-6">

          Queue Controls

        </h2>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={handleCallNext}
            className="px-6 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600"
          >
            Call Next
          </button>

          <button
            onClick={handleSkip}
            className="px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600"
          >
            Skip
          </button>

          <button
            onClick={handleHold}
            className="px-6 py-3 rounded-xl bg-yellow-400 text-white hover:bg-yellow-500"
          >
            Hold
          </button>

          <button
            onClick={handleComplete}
            className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600"
          >
            Complete
          </button>

          <button
            onClick={handleRecall}
            className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
          >
            Recall
          </button>

        </div>

      </div>

      {/* Current Serving + Queue Summary */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Currently Serving
          </h2>

          <div className="space-y-4">

            <div>

              <p className="text-slate-500">
                Token
              </p>

              <h3 className="text-5xl font-bold text-purple-600">

                {currentServing?.tokenNumber || "--"}

              </h3>

            </div>

            <div>

              <p className="text-slate-500">
                Branch
              </p>

              <h3 className="font-semibold">

                {currentServing?.branch?.name || "--"}

              </h3>

            </div>

            <div>

              <p className="text-slate-500">
                Status
              </p>

              <span className="px-4 py-2 rounded-full bg-green-100 text-green-700">

                {currentServing?.status || "--"}

              </span>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Queue Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Queue Length</span>

              <span className="font-semibold">

                {queueData.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Waiting</span>

              <span className="font-semibold">

                {queueData.filter(
                  t => t.status === "waiting"
                ).length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Serving</span>

              <span className="font-semibold">

                {queueData.filter(
                  t => t.status === "serving"
                ).length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Completed</span>

              <span className="font-semibold">

                {queueData.filter(
                  t => t.status === "completed"
                ).length}

              </span>

            </div>

          </div>

        </div>

      </div>
            {/* ===================== Queue Table ===================== */}

      <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Live Queue
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4">Token</th>

                <th className="text-left py-4">Status</th>

                <th className="text-left py-4">Branch</th>

                <th className="text-left py-4">Generated At</th>

              </tr>

            </thead>

            <tbody>

              {queueData.map((item) => (

                <tr
                  key={item._id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="py-4 font-semibold">
                    {item.tokenNumber}
                  </td>

                  <td className="py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="py-4">
                    {item.branch?.name}
                  </td>

                  <td className="py-4">

                    {new Date(
                      item.generatedAt
                    ).toLocaleTimeString()}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* ===================== Recent Actions ===================== */}

      <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-6">

          Recent Actions

        </h2>

        {recentActions.length === 0 ? (

          <p className="text-slate-500">
            No recent actions.
          </p>

        ) : (

          <div className="space-y-4">

            {recentActions.map((item, index) => (

              <div
                key={index}
                className="border-l-4 border-purple-400 pl-4"
              >

                <p className="font-medium">
                  {item.action}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </>

  )}

</DashboardLayout>

);

}

export default StaffDashboard;