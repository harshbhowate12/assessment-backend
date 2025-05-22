import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import questionRoutes from "./routes/questions.js";
import responseRoutes from "./routes/responses.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/questions", questionRoutes);
app.use("/api/responses", responseRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));

