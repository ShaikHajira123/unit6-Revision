const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    followers:{ type: Number , required:true},
    following:{type: Number ,required:true},
    personalInfo:{type:String , required:true}
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);


const User = mongoose.model("user", userSchema);

module.exports = User;
