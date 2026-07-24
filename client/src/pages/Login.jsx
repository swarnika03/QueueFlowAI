// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center px-4">

//       <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-slate-800">
//             QueueFlow AI
//           </h1>

//           <p className="text-slate-500 mt-2">
//             Smart Queue Management Platform
//           </p>
//         </div>

//         <form className="space-y-5">

//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700 mb-2">
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
//           </div>

//           <button
//             className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition"
//           >
//             Login
//           </button>

//         </form>

//         <div className="text-center mt-6">
//           <p className="text-slate-500">
//             Don't have an account?
//           </p>

//          <Link
//   to="/register"
//   className="text-purple-600 font-semibold"
// >
//   Register Here
// </Link>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;








// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="min-h-screen flex">

//       {/* Left Section */}
//       <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 items-center justify-center p-10">

//         <div>
//           <h1 className="text-5xl font-bold text-slate-800 mb-6">
//             QueueFlow AI
//           </h1>

//           <p className="text-xl text-slate-700 mb-8">
//             Smart Queue Optimization Platform
//           </p>

//           <div className="space-y-4">

//             <div className="bg-white p-4 rounded-2xl shadow">
//               📊 Real-Time Queue Monitoring
//             </div>

//             <div className="bg-white p-4 rounded-2xl shadow">
//               ⏳ AI ETA Prediction
//             </div>

//             <div className="bg-white p-4 rounded-2xl shadow">
//               🔔 Live Notifications
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* Right Section */}
//       <div className="flex-1 flex items-center justify-center bg-slate-50">

//         <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">

//           <h2 className="text-3xl font-bold text-center mb-2">
//             Welcome Back
//           </h2>

//           <p className="text-center text-slate-500 mb-8">
//             Login to continue
//           </p>

//           <form className="space-y-5">

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border rounded-xl p-3"
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border rounded-xl p-3"
//             />

//             <button
//               className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600"
//             >
//               Login
//             </button>

//           </form>

//           <div className="text-center mt-6">

//             <span className="text-slate-500">
//               Don't have an account?
//             </span>

//             <Link
//               to="/register"
//               className="ml-2 text-purple-600 font-semibold"
//             >
//               Register
//             </Link>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save user information
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", JSON.stringify(res.data));
localStorage.setItem("token", res.data.token);
localStorage.setItem("userInfo", JSON.stringify(res.data));
      alert("Login Successful!");

      // Navigate according to role
      if (res.data.role === "admin") {
        navigate("/admin");
      } else if (res.data.role === "staff") {
        navigate("/staff");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Section */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 items-center justify-center p-10">

        <div>

          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            QueueFlow AI
          </h1>

          <p className="text-xl text-slate-700 mb-8">
            Smart Queue Optimization Platform
          </p>

          <div className="space-y-4">

            <div className="bg-white p-4 rounded-2xl shadow">
              📊 Real-Time Queue Monitoring
            </div>

            <div className="bg-white p-4 rounded-2xl shadow">
              ⏳ AI ETA Prediction
            </div>

            <div className="bg-white p-4 rounded-2xl shadow">
              🔔 Live Notifications
            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex items-center justify-center bg-slate-50">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-slate-500 mb-8">
            Login to continue
          </p>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="text-center mt-6">

            <span className="text-slate-500">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="ml-2 text-purple-600 font-semibold"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;