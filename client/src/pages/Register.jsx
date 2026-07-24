// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className="min-h-screen flex">

//       {/* Left Side */}
//       <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 items-center justify-center p-10">

//         <div className="max-w-md">

//           <h1 className="text-5xl font-bold text-slate-800 mb-6">
//             QueueFlow AI
//           </h1>

//           <p className="text-xl text-slate-700 mb-8">
//             Smart Queue Optimization Platform
//           </p>

//           <div className="space-y-4">

//             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
//               📊 Real-Time Queue Monitoring
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
//               ⏳ AI ETA Prediction
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
//               🔔 Smart Notifications
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 flex items-center justify-center bg-slate-50 p-6">

//         <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

//           <div className="text-center mb-8">

//             <h2 className="text-3xl font-bold text-slate-800">
//               Create Account
//             </h2>

//             <p className="text-slate-500 mt-2">
//               Join QueueFlow AI today
//             </p>

//           </div>

//           <form className="space-y-4">

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Full Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Create password"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-2">
//                 Confirm Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition duration-300"
//             >
//               Create Account
//             </button>

//           </form>

//           <div className="text-center mt-6">

//             <span className="text-slate-500">
//               Already have an account?
//             </span>

//             <Link
//               to="/"
//               className="ml-2 text-purple-600 font-semibold hover:text-purple-700"
//             >
//               Login
//             </Link>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log("Registered User:", data);

      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Registration Successful!");

      navigate("/");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 items-center justify-center p-10">

        <div className="max-w-md">

          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            QueueFlow AI
          </h1>

          <p className="text-xl text-slate-700 mb-8">
            Smart Queue Optimization Platform
          </p>

          <div className="space-y-4">

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              📊 Real-Time Queue Monitoring
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              ⏳ AI ETA Prediction
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
              🔔 Smart Notifications
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center bg-slate-50 p-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-slate-800">
              Create Account
            </h2>

            <p className="text-slate-500 mt-2">
              Join QueueFlow AI today
            </p>

          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            {/* Name */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

            </div>

            {/* Password */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

            </div>

            {/* Confirm Password */}

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition duration-300 disabled:bg-gray-400"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <div className="text-center mt-6">

            <span className="text-slate-500">
              Already have an account?
            </span>

            <Link
              to="/"
              className="ml-2 text-purple-600 font-semibold hover:text-purple-700"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;