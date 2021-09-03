const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
});

const questionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: [String],
  answers: [
    new mongoose.Schema({
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      isAccepted: {
        type: Boolean,
        default: false,
      },
    }),
  ],
});

const Users = new mongoose.model("Users", userSchema);
const Questions = new mongoose.model("Questions", questionSchema);

module.exports = {
  Users,
  Questions,
};
