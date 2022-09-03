var mongoose = require('mongoose');
var Post = mongoose.Schema({
  LIKE: {
    type: Number,
    required: false
  },
  COMMENT: {
    type: String,
    required: false,
  },
  DATE: {
    type: Date.now(),
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  CONTENT: {
    type: String,
    required: true
  },
  HEADER: {
    type: String,
    required: true
  }
});