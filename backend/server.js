const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = 8000;
const app = express();
const cors = require("cors");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("hello!");
});

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("connecting DB ... ");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => null);
