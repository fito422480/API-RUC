const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const rucsRoutes = require("./src/routes/rucs");
const razonsocialRoutes = require("./src/routes/razonsocial");

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use("/api", rucsRoutes);
app.use("/api", razonsocialRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Jungle!");
});

//MongoDB conection
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server Listening On", port));
