const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: false },
  userImage: { type: String, required: false },
  rewards: {
    star: { type: Number, required: false },
    rainbow: { type: Number, required: false },
    stars: { type: Array, required: false },
    rainbows: { type: Array, required: false },
  },
  // message: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

