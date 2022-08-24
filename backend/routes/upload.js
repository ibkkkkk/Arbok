const router = require("express").Router();
const multer = require("multer");

const upload = multer({ storage });

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("success to upload the image");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
