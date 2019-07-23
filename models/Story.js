const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  childAge: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  storyTitle: {
    type: String
  },
  story: {
    type: String,
    required: true
  },
  lessons: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model('story', StorySchema);
