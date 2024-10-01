const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index.js");

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use("/api/", router);
const PORT = 8000 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to mongo successful");
    console.log("server is running in port 8000");
  });
});
