const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
},
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Contact', ContactSchema);