const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index.js");

const app = express();
const allowedOrigins = ["https://e-commerce-red-front.vercel.app"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // يسمح بالاتصال إذا كان الدومين مسموح أو لو الطلب جاي من localhost
      } else {
        callback(new Error("Not allowed by CORS")); // يمنع أي دومين غير مسموح
      }
    },
    credentials: true, // يسمح بإرسال الكوكيز
  })
);
app.options('*', cors());
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
