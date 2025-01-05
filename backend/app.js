const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Define routes (corrected spelling of "students")
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5002; // Ensure default port is set if not defined in .env

// Start the server
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
