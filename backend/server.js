const express = require('express');
const app = express()
const colors = require('colors')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const path = require('path')
const port = process.env.PORT || 5000



app.use(express.json());

app.use(express.urlencoded({extended: false}));

//NEWWWWWWWWWW
app.use(express.static(process.cwd() + '/frontend/dist'));

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/frontend/dist/index.html');
});

//ENDDDDDDDDDD

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON


const connectDB = require("./config/db")
connectDB()

app.use('/api/goals', require('./routes/api/goalRoutes'))
app.use('/api/books', require('./routes/api/bookRoutes'))
app.use('/api/podcasts', require('./routes/api/podcastRoutes'))
app.use('/api/articles', require('./routes/api/articleRoutes'))
app.use('/api/movies', require('./routes/api/movieRoutes'))
app.use('/api/encyclopedias', require('./routes/api/encyclopediaRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`));

/*
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')
//////////NEWWWWW
require('dotenv').config();

/////////ENDDDD

connectDB()

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

///////NEWWWW
app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON


app.use('/api/goals', require('./routes/api/goalRoutes'))
app.use('/api/books', require('./routes/api/bookRoutes'))
app.use('/api/podcasts', require('./routes/api/podcastRoutes'))
app.use('/api/articles', require('./routes/api/articleRoutes'))
app.use('/api/movies', require('./routes/api/movieRoutes'))
app.use('/api/encyclopedias', require('./routes/api/encyclopediaRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`));
*/