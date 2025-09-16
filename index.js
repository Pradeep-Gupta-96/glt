import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);

// ✅ Enable CORS for Vercel frontend
app.use(cors({ origin: "*" }));

// ✅ Attach Socket.IO to HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", // replace with your Vercel URL for security
    methods: ["GET", "POST"],
  },
});

// 🔄 Socket.IO handlers
io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("form:submit", (data) => {
    console.log("📥 Received form:", data);

    // Broadcast to all admins
    io.emit("form:update", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Socket.IO + Express server is running");
});

// Start server
const PORT = process.env.PORT || 4003;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
