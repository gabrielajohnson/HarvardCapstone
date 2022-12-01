const path = require('path')
const express = require('express');
const app = express()
const colors = require('colors');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON

//comment
//comment
const connectDB = require("./config/db")
connectDB()

app.use('/api/goals', require('./routes/api/goalRoutes'))
app.use('/api/books', require('./routes/api/bookRoutes'))
app.use('/api/podcasts', require('./routes/api/podcastRoutes'))
app.use('/api/articles', require('./routes/api/articleRoutes'))
app.use('/api/movies', require('./routes/api/movieRoutes'))
app.use('/api/encyclopedias', require('./routes/api/encyclopediaRoutes'))


// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`));

