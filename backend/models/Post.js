const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      max: 200,
    },
    img: {
      type: String,
      required: false,
    },
    likes: {
      type: Array,
      default: [],
    },
    // createdAt: {
    //   type: Number,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
