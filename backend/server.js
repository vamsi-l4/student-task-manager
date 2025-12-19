const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://student-task-manager-wheat.vercel.app'], // Add your Vercel URL
  credentials: true
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL || process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API running");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const auth = require("./middleware/auth");
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", auth, taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
