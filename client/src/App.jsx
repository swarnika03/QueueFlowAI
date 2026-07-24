import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import QueueStatus from "./pages/QueueStatus";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/queue" element={<QueueStatus />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import Login from "./pages/Login";

// function App() {
//   return <Login />;
// }

// export default App;