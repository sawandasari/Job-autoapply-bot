
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());
// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Server is up and running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const Job = require('./models/Job');

app.post('/api/apply-job', async (req, res) => {
  try {
    const job = new Job(req.body);
    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/applied-jobs', async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.status(200).json(jobs);    // Send them back as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while retrieving jobs' });
  }
});