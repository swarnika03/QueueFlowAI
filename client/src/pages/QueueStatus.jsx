// // import DashboardLayout from "../layouts/DashboardLayout";
// import DashboardLayout from "../layouts/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";
// function QueueStatus() {
//   const [queueData, setQueueData] = useState(null);
//   const [etaData, setEtaData] = useState(null);
//   const [servingToken,
// setServingToken] =
// useState(null);
//   useEffect(() => {

//   const loadQueueData = async () => {

//     try {

//       // const tokenId =
//       //   localStorage.getItem("tokenId");

//       const jwt =
//         localStorage.getItem("token");

//       // const statusRes =
//       //   await axios.get(
//       //     `http://localhost:5000/api/tokens/${tokenId}/status`,
//       //     {
//       //       headers: {
//       //         Authorization: `Bearer ${jwt}`,
//       //       },
//       //     }
//       //   );
//       const user = JSON.parse(
// localStorage.getItem("userInfo")
// );

// const statusRes = await axios.get(
// "http://localhost:5000/api/tokens/my-token",
// {
// headers:{
// Authorization:`Bearer ${user.token}`
// }
// }
// );

//       // const etaRes =
//       //   await axios.get(
//       //     `http://localhost:5000/api/tokens/${tokenId}/eta`,
//       //     {
//       //       headers: {
//       //         Authorization: `Bearer ${jwt}`,
//       //       },
//       //     }
//       //   );

//       // setQueueData(statusRes.data);
//       // setEtaData(etaRes.data);
//       const etaRes =
//   await axios.get(
//     `http://localhost:5000/api/tokens/${tokenId}/eta`,
//     {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     }
//   );

// const servingRes =
//   await axios.get(
//     "http://localhost:5000/api/tokens/current-serving",
//     {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     }
//   );

// setQueueData(statusRes.data);
// setEtaData(etaRes.data);
// setServingToken(servingRes.data);

//     } catch (error) {

//       console.error(error);

//     }

//   };

//   loadQueueData();

// }, []);
//   return (
//     <DashboardLayout>

//       {/* Page Header */}

//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">
//           Queue Status
//         </h1>

//         <p className="text-slate-500 mt-2">
//           Real-time queue monitoring and estimated waiting time.
//         </p>
//       </div>

//       {/* Top Cards */}

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Current Token
//           </h3>

//           <h2 className="text-4xl font-bold text-slate-800 mt-3">
//             {queueData?.tokenNumber || "-"}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Now Serving
//           </h3>

//           <h2 className="text-4xl font-bold text-slate-800 mt-3">
//             {servingToken?.tokenNumber || "-"}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             People Ahead
//           </h3>

//           <h2 className="text-4xl font-bold text-slate-800 mt-3">
//             {queueData?.peopleAhead || 0}
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-6">
//           <h3 className="text-slate-500 text-sm">
//             Estimated Wait
//           </h3>

//           <h2 className="text-4xl font-bold text-slate-800 mt-3">
//             {etaData?.eta
//  ? `${etaData.eta} Min`
//  : "-"}
//           </h2>
//         </div>

//       </div>

//       {/* Queue Progress */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-8">

//         <h2 className="text-2xl font-semibold text-slate-800 mb-4">
//           Queue Progress
//         </h2>

//         <div className="flex justify-between mb-3">

//           <span className="text-slate-600">
//             Position
//           </span>

//           <span className="font-semibold">
//             {/* 5 / 20 */}
//             {queueData?.position || 0}
//           </span>

//         </div>

//         <div className="w-full bg-slate-200 rounded-full h-5">

//           <div
//             className="h-5 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"
//             style={{
//     width: `${
//       queueData
//         ? Math.min(((20 - queueData.peopleAhead) / 20) * 100, 100)
//         : 0
//     }%`,
//   }}
//           ></div>

//         </div>

//         <p className="text-slate-500 mt-4">
//           Your token is moving closer to service.
//         </p>

//       </div>

//       {/* Live Status Section */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

//         <div className="bg-white rounded-3xl shadow-md p-8">

//           <h2 className="text-xl font-semibold mb-4">
//             Queue Information
//           </h2>

//           <div className="space-y-4">

//             <div className="flex justify-between">
//               <span className="text-slate-500">
//                 Branch
//               </span>

//               <span className="font-medium">
//                 {queueData?.branch || "-"}
//               </span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-slate-500">
//                 Counter
//               </span>

//               <span className="font-medium">
//                 Counter 2
//               </span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-slate-500">
//                 Queue Length
//               </span>

//               <span className="font-medium">
//                 20
//               </span>
//             </div>

//           </div>

//         </div>

//         <div className="bg-white rounded-3xl shadow-md p-8">

//           <h2 className="text-xl font-semibold mb-4">
//             Live Status
//           </h2>

//           <div className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium">
//             Live
//           </div>

//           <p className="mt-6 text-slate-500 leading-relaxed">
//             This section will receive real-time updates from Socket.IO.
//             When staff call the next token, the current serving token,
//             queue position, and ETA will automatically update.
//           </p>

//         </div>

//       </div>

//       {/* Future Socket Events Table */}

//       <div className="mt-8 bg-white rounded-3xl shadow-md p-8">

//         <h2 className="text-xl font-semibold mb-6">
//           Recent Queue Activity
//         </h2>

//         <table className="w-full">

//           <thead>

//             <tr className="border-b">

//               <th className="text-left py-3">
//                 Token
//               </th>

//               <th className="text-left py-3">
//                 Status
//               </th>

//               <th className="text-left py-3">
//                 Time
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             <tr className="border-b">

//               <td className="py-3">
//                 A96
//               </td>

//               <td className="py-3">
//                 Completed
//               </td>

//               <td className="py-3">
//                 10:20 AM
//               </td>

//             </tr>

//             <tr className="border-b">

//               <td className="py-3">
//                 A97
//               </td>

//               <td className="py-3">
//                 Serving
//               </td>

//               <td className="py-3">
//                 10:24 AM
//               </td>

//             </tr>

//             <tr>

//               <td className="py-3">
//                 A101
//               </td>

//               <td className="py-3">
//                 Waiting
//               </td>

//               <td className="py-3">
//                 10:30 AM
//               </td>

//             </tr>

//           </tbody>

//         </table>

//       </div>

//     </DashboardLayout>
//   );
// }

// export default QueueStatus;


import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../services/socket";

function QueueStatus() {

  const [queueData, setQueueData] = useState(null);
  const [etaData, setEtaData] = useState(null);
  const [servingToken, setServingToken] = useState(null);
  const [activity, setActivity] = useState([]);

  // -----------------------------
  // Load Queue Data
  // -----------------------------

  const loadQueueData = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("userInfo")
      );

      const jwt = user.token;

      // My latest token

      const statusRes = await axios.get(
        "http://localhost:5000/api/tokens/my-token",
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("Logged in user:", user);
console.log("JWT:", jwt);
console.log("API Response:", statusRes.data);
      setQueueData(statusRes.data);

      // ETA

      const etaRes = await axios.get(
        `http://localhost:5000/api/tokens/${statusRes.data.tokenId}/eta`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      setEtaData(etaRes.data);

      // Current serving token

      const servingRes = await axios.get(
        "http://localhost:5000/api/tokens/current-serving",
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      setServingToken(servingRes.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  // -----------------------------
  // Browser Notification
  // -----------------------------

  const showNotification = (title, body) => {

    if (!("Notification" in window))
      return;

    if (Notification.permission === "granted") {

      new Notification(title, {
        body,
      });

    }

    else if (Notification.permission !== "denied") {

      Notification.requestPermission();

    }

  };

  // -----------------------------
  // Socket Events
  // -----------------------------

  useEffect(() => {

    loadQueueData();

    socket.on("tokenCalled", (data) => {

      console.log("Token Called", data);

      setServingToken(data);

      loadQueueData();

      setActivity((prev) => [

        {
          token: data.tokenNumber,
          status: "Serving",
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

      if (
        queueData &&
        queueData.tokenNumber === data.tokenNumber
      ) {

        showNotification(
          "QueueFlow AI",
          "🎉 It's your turn!"
        );

      }

    });

    socket.on("tokenCompleted", (data) => {

      console.log("Token Completed", data);

      loadQueueData();

      setActivity((prev) => [

        {
          token: data.tokenNumber,
          status: "Completed",
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

    });

    socket.on("tokenHeld", (data) => {

      console.log("Token Held", data);

      loadQueueData();

      setActivity((prev) => [

        {
          token: data.tokenNumber,
          status: "Held",
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

    });

    socket.on("tokenRecalled", (data) => {

      console.log("Token Recalled", data);

      loadQueueData();

      setActivity((prev) => [

        {
          token: data.tokenNumber,
          status: "Recalled",
          time: new Date().toLocaleTimeString(),
        },

        ...prev,

      ]);

    });

    return () => {

      socket.off("tokenCalled");
      socket.off("tokenCompleted");
      socket.off("tokenHeld");
      socket.off("tokenRecalled");

    };

  }, []);
  return (
  <DashboardLayout>

    {/* Header */}

    <div className="mb-8">

      <h1 className="text-4xl font-bold text-slate-800">
        Live Queue Monitor
      </h1>

      <p className="text-slate-500 mt-2">
        Real-time monitoring of your queue. Updates automatically using Socket.IO.
      </p>

    </div>
{/* ===================== TOP CARDS ===================== */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {/* Your Token */}

  <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition">

    <p className="text-slate-500 text-sm">
      Your Token
    </p>

    <h2 className="text-5xl font-bold text-pink-500 mt-3">
      {queueData?.tokenNumber || "--"}
    </h2>

  </div>

  {/* Now Serving */}

  <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition">

    <p className="text-slate-500 text-sm">
      Now Serving
    </p>

    <h2 className="text-5xl font-bold text-purple-600 mt-3">
      {servingToken?.tokenNumber || "--"}
    </h2>

  </div>

  {/* People Ahead */}

  <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition">

    <p className="text-slate-500 text-sm">
      People Ahead
    </p>

    <h2 className="text-5xl font-bold text-orange-500 mt-3">
      {queueData?.peopleAhead ?? 0}
    </h2>

  </div>

  {/* ETA */}

  <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition">

    <p className="text-slate-500 text-sm">
      Estimated Wait
    </p>

    <h2 className="text-5xl font-bold text-green-600 mt-3">
      {etaData?.eta
        ? `${etaData.eta} min`
        : "--"}
    </h2>

  </div>

</div>

{/* ===================== QUEUE PROGRESS ===================== */}

<div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-5">

    <h2 className="text-2xl font-bold text-slate-800">
      Queue Progress
    </h2>

    <span className="text-lg font-semibold text-slate-600">

      Position #{queueData?.position || 0}

    </span>

  </div>

  <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">

    <div
      className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition-all duration-700"
      style={{
        width: queueData
          ? `${Math.max(
              ((20 - queueData.peopleAhead) / 20) * 100,
              5
            )}%`
          : "0%",
      }}
    />

  </div>

  <div className="mt-5 flex justify-between text-sm text-slate-500">

    <span>

      People Ahead:
      <strong className="ml-2 text-slate-800">
        {queueData?.peopleAhead ?? 0}
      </strong>

    </span>

    <span>

      ETA:
      <strong className="ml-2 text-slate-800">
        {etaData?.eta ?? "--"} min
      </strong>

    </span>

  </div>

</div>
{/* ===================== INFORMATION SECTION ===================== */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

  {/* Queue Information */}

  <div className="bg-white rounded-3xl shadow-lg p-8">

    <h2 className="text-2xl font-bold text-slate-800 mb-6">
      Queue Information
    </h2>

    <div className="space-y-5">

      <div className="flex justify-between border-b pb-3">

        <span className="text-slate-500">
          Branch
        </span>

        <span className="font-semibold text-slate-800">
          {queueData?.branch || "--"}
        </span>

      </div>

      <div className="flex justify-between border-b pb-3">

        <span className="text-slate-500">
          Your Token
        </span>

        <span className="font-semibold text-pink-500">
          {queueData?.tokenNumber || "--"}
        </span>

      </div>

      <div className="flex justify-between border-b pb-3">

        <span className="text-slate-500">
          Queue Position
        </span>

        <span className="font-semibold">
          #{queueData?.position || 0}
        </span>

      </div>

      <div className="flex justify-between border-b pb-3">

        <span className="text-slate-500">
          People Ahead
        </span>

        <span className="font-semibold">
          {queueData?.peopleAhead ?? 0}
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-slate-500">
          Estimated Wait
        </span>

        <span className="font-semibold text-green-600">
          {etaData?.eta
            ? `${etaData.eta} mins`
            : "--"}
        </span>

      </div>

    </div>

  </div>



  {/* ================= LIVE STATUS ================= */}

  <div className="bg-white rounded-3xl shadow-lg p-8">

    <h2 className="text-2xl font-bold text-slate-800 mb-6">

      Live Queue Status

    </h2>


    {/* Status Badge */}

    <div className="mb-6">

      {queueData?.status === "waiting" && (

        <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">

          🟡 Waiting

        </span>

      )}

      {queueData?.status === "serving" && (

        <span className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

          🟢 Serving

        </span>

      )}

      {queueData?.status === "completed" && (

        <span className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

          ✅ Completed

        </span>

      )}

      {queueData?.status === "held" && (

        <span className="px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold">

          ⏸ Held

        </span>

      )}

      {queueData?.status === "missed" && (

        <span className="px-5 py-2 rounded-full bg-red-100 text-red-700 font-semibold">

          ❌ Missed

        </span>

      )}

    </div>



    <div className="space-y-4">

      <div className="flex justify-between">

        <span className="text-slate-500">
          Current Serving
        </span>

        <span className="font-bold text-purple-600 text-xl">

          {servingToken?.tokenNumber || "--"}

        </span>

      </div>



      <div className="flex justify-between">

        <span className="text-slate-500">
          Your Token
        </span>

        <span className="font-bold text-pink-500 text-xl">

          {queueData?.tokenNumber || "--"}

        </span>

      </div>



      <div className="flex justify-between">

        <span className="text-slate-500">
          Difference
        </span>

        <span className="font-semibold">

          {queueData
            ? queueData.peopleAhead
            : "--"}{" "}
          people

        </span>

      </div>

    </div>



    {/* Progress Message */}

    <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-5">

      <p className="text-slate-700">

        {queueData?.status === "waiting" &&
          "Your token is waiting in the queue. Stay on this page for live updates."}

        {queueData?.status === "serving" &&
          "🎉 It's your turn! Please proceed to the counter."}

        {queueData?.status === "completed" &&
          "Your visit has been completed successfully."}

        {queueData?.status === "held" &&
          "Your token is currently on hold."}

      </p>

    </div>

  </div>

</div>
</DashboardLayout>
  );
}

export default QueueStatus;
