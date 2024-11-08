// server/models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String, // Can store URL to image or path if using local storage
    required: false,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
