const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const stories = require('./routes/viewStoryRoutes.js');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB")})
  .catch(err => console.log(err));


// Use routes
app.use('/stories', stories);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
