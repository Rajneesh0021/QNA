const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const questionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  text: { type: String, required: true },
  audioUrl: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: String, required: true }
});

// Apply auto-incrementing to the 'id' field
questionSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
