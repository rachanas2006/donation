// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const donateRoutes = require("./routes/donate");
const homeRoutes = require("./routes/home");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/donate", donateRoutes);
app.use("/api/home", homeRoutes);

app.get("/", (req, res) => {
  res.send("Donation & Charity Management System API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
