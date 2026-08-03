

import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");
const socket = io(import.meta.env.VITE_API_URL);

socket.on("connect", () => {
  console.log("Socket Connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Socket Disconnected");
});

export default socket;