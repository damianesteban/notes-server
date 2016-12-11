const mongoose = require('mongoose');

let Schema = mongoose.Schema;

// Defines the schema
let NoteSchema = Schema({
  contents: {
    type: String
  },
  title: {
    type: String
  },
  created: {
      type: Date,
      default: Date.now
  }
});

// Exports the note model
let NoteModel = mongoose.model('Note', NoteSchema);

module.exports = NoteModel;