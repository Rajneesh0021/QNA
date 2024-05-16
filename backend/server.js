const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./src/routes/questionRoutes');
require('dotenv').config();
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURI = process.env.MONGOURL;
app.use(cors())

app.use(express.json());


app.use('/api', questionRoutes);

app.listen(PORT, async() => {
   await  mongoose.connect(MONGOURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
   console.log(`Server is running on port ${PORT}`);
});
