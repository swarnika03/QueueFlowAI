
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import socket from "../services/socket";
import axios from "axios";
// import { useEffect } from "react";
import { useEffect, useState } from "react";
function UserDashboard() {
   
const fetchServingToken = async () => {

    try {

        const user = JSON.parse(
            localStorage.getItem("userInfo")
        );

        const { data } = await axios.get(
            // "http://localhost:5000/api/tokens/current-serving",
            `${import.meta.env.VITE_API_URL}/api/tokens/current-serving`,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );

        if (data) {
            setCurrentServing(data.tokenNumber);
        }

    } catch (err) {

        console.log(err);

    }

};
const generateToken = async () => {
    try {

        const user = JSON.parse(
            localStorage.getItem("userInfo")
        );

       const branchId =
"6a2ca3c287da669e29e8b4d0";

        const { data } = await axios.post(
            // "http://localhost:5000/api/tokens",
           `${import.meta.env.VITE_API_URL}/api/tokens`,
            {
                branchId,
            },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );

        console.log(data);

        localStorage.setItem("tokenId", data._id);

        alert("Token Generated Successfully!");

        window.location.reload();

    } catch (err) {
        console.log(err);
    }
};
const [etaData, setEtaData] = useState(null);
  const [queueData, setQueueData] = useState(null);
  useEffect(() => {
    console.log("Queue Data:", queueData);
}, [queueData]);
const [currentServing, setCurrentServing] = useState("-");


    const fetchMyToken = async () => {

        try {

            const user = JSON.parse(
                localStorage.getItem("userInfo")
            );

            const { data } = await axios.get(
                // "http://localhost:5000/api/tokens/my-token",
               `${import.meta.env.VITE_API_URL}/api/tokens/my-token`,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );

            setQueueData(data);
             const etaRes = await axios.get(
            // `http://localhost:5000/api/tokens/${data.tokenId}/eta`,
           `${import.meta.env.VITE_API_URL}/api/tokens/${data.tokenId}/eta`,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
        );

        setEtaData(etaRes.data);

        } catch (err) {
            console.log(err);
        }

    };

  useEffect(() => {

    
    fetchMyToken();
    fetchServingToken();

    // socket.on("tokenCalled", (data) => {

    //     console.log("Token Called:", data);

    //     setCurrentServing(data.tokenNumber);

    // });
//     socket.on("tokenCalled", async (data) => {
//     setCurrentServing(data.tokenNumber);

//     await fetchMyToken();
// });
    socket.on("tokenCalled", async (data) => {

    console.log("Token Called:", data);

    setCurrentServing(data.tokenNumber);

    // Refresh queue details
    await fetchMyToken();

    // Notify the user if it's their turn
    if (queueData?.tokenNumber === data.tokenNumber) {

        alert("🎉 It's your turn!");

    }

});
    socket.on("tokenCompleted", (data) => {

        console.log("Token Completed:", data);

    });

    socket.on("tokenHeld", (data) => {

        console.log("Token Held:", data);

    });

    socket.on("tokenRecalled", (data) => {

        console.log("Token Recalled:", data);

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

      {/* Page Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          User Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor your queue status in real time.
        </p>
      </div>

      {/* Cards Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Current Token"
          // value="A101"
          value={queueData?.tokenNumber || "-"}
          // value={queueData?.tokenNumber || "-"}
          
          icon="🎫"
          color="border-pink-400"
        />

        <StatCard
          title="Queue Position"
          // value="5"
          value={queueData?.position || 0}
          // value={queueData?.position || 0}
          icon="📍"
          color="border-purple-400"
        />

        <StatCard
          title="ETA"
          // value="20 Min"
          value={
  etaData
    ? `${etaData.eta} Min`
    : "-"
}
          icon="⏳"
          color="border-blue-400"
        />

        <StatCard
          title="Branch"
          // value="Main"
          value={queueData?.branch || "-"}
          icon="🏥"
          color="border-green-400"
        />

      </div>

      {/* Queue Status Card */}
      {!queueData && (
  <div className="mt-6">
    <button
      onClick={generateToken}
      className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
    >
      Generate Token
    </button>
  </div>
)}
      <div className="mt-8 bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Queue Progress
        </h2>

        <div className="flex justify-between mb-2">
          <span className="text-slate-600">
            Position in Queue
          </span>

          <span className="font-semibold">
            {/* 5 / 20 */}
            {queueData?.position || 0} / 20
          </span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-4">

          <div
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-4 rounded-full"
            // style={{ width: "25%" }}
            style={{
    width: queueData
        ? `${
            ((queueData.totalQueue - queueData.peopleAhead) /
                queueData.totalQueue) *
            100
        }%`
        : "0%",
}}
          ></div>

        </div>

        <p className="text-slate-500 mt-3">
          You are getting closer to your turn.
        </p>

      </div>

      {/* Live Queue Info */}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-4">
            Current Serving
          </h2>

          <div className="text-5xl font-bold text-purple-600">
             {currentServing}
          </div>

          <p className="mt-2 text-slate-500">
            Live token currently being served.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-4">
            Queue Status
          </h2>

          {/* <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            🟢 Live
          </div> */}
          <div
    className={`inline-block px-4 py-2 rounded-full font-semibold ${
        queueData?.status === "waiting"
            ? "bg-yellow-100 text-yellow-700"
            : queueData?.status === "serving"
            ? "bg-green-100 text-green-700"
            : queueData?.status === "completed"
            ? "bg-blue-100 text-blue-700"
            : queueData?.status === "held"
            ? "bg-orange-100 text-orange-700"
            : "bg-gray-100 text-gray-700"
    }`}
>
    {queueData?.status === "waiting" && "🟡 Waiting"}

    {queueData?.status === "serving" && "🟢 Serving"}

    {queueData?.status === "completed" && "✅ Completed"}

    {queueData?.status === "held" && "⏸ Held"}
</div>

          <p className="mt-4 text-slate-500">
            Real-time updates will appear here once Socket.IO is integrated.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default UserDashboard;