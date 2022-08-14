const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 25,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followings: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: String,
    default: false,
  },
  description: {
    type: String,
    max: 70,
  },
});

module.exports = mongoose.model("User", UserSchema);
