import mongoose from "mongoose";

let Schema = mongoose.Schema;

let userSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("User", userSchema);

export default User;