
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";


import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import branchRoutes from "./routes/branchRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
     origin: [
      "http://localhost:5173",
      "https://queueflow-ai-frontend.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log(
    `User Connected: ${socket.id}`
  );

  socket.on("disconnect", () => {
    console.log(
      `User Disconnected: ${socket.id}`
    );
  });
});

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://queueflow-ai-frontend.onrender.com",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/analytics", analyticsRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "QueueFlow AI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});