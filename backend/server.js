const path = require('path')
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB()

const app = express()

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/goals', require('./routes/api/goalRoutes'))
app.use('/api/books', require('./routes/api/bookRoutes'))
app.use('/api/podcasts', require('./routes/api/podcastRoutes'))
app.use('/api/articles', require('./routes/api/articleRoutes'))
app.use('/api/movies', require('./routes/api/movieRoutes'))
//app.use('/api/encyclopedias', require('./routes/api/encyclopediaRoutes'))


// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static Folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA

  app.get(/.*/, (req, res) => {
      res.sendFile(path.join(__dirname + '/public/index.html'));
  })

}


app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`));

// Export the Express API
module.exports = app;