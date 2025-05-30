const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  title: String,
  location: String,
  appliedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'submitted' }
});

module.exports = mongoose.model('Job', jobSchema);
