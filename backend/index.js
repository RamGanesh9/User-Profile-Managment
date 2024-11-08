const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db'); // Import the connectDB function

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Routes
app.get("/", (req, res) => {
    res.json({
        name: "Ram",
        message: "working As Developer"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
