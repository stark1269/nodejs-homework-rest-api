const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
},
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('User', UserSchema);