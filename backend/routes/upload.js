const router = require("express").Router();
// const Image = require("../models/Image");
const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    // cb(null, file.filename + "-" + Date.now());
    // cb(null, file.originalname);
    cb(null, req.body.name);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("success to upload the image");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
