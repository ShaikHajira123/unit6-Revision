const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    tweetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tweets",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


module.exports = mongoose.model("comment", commentSchema);
