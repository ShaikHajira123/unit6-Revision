const mongoose = require("mongoose");

const tweetsSchema = new mongoose.Schema(
  {
    tweet: { type: String, required: true },
    tweetID: { type: Number, required: true , unique: true },
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


module.exports = mongoose.model("tweets", tweetsSchema); 
