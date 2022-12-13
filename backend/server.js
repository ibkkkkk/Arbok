const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config("./config/.env");
const PORT = process.env.PORT || 8000;
const app = express();
const path = require("path");
const cors = require("cors");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const uploadRouter = require("./routes/upload");

// MiddleWare
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/upload", uploadRouter);
app.use("/images", express.static(path.join(__dirname, "public/images")));

// app.get("/", (req, res) => {
//   res.send("hello!");
// });

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("connecting DB ... ");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 8000, () => console.log(" "));
