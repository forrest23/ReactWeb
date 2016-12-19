const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Todo = new Schema({
  user_id: String,
  content: String,
  updated_at: Date,
  status: Boolean,
});

mongoose.model('Todo', Todo);
mongoose.connect('mongodb://localhost/express');

