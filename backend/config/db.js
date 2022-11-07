const mongoose = require('mongoose')
//const { PORT, mongoUri } = require('./config')
require('dotenv').config();

const connectDB = async() => {
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    	})
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	}catch(error){
		console.log(error);
		process.exit(1)
	}
}

module.exports = connectDB


/*const mongoose = require('mongoose')

const connectDB = async() => {
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	}catch(error){
		console.log(error);
		process.exit(1)
	}
}

module.exports = connectDB*/

/*const mongoose = require('mongoose')
//const { PORT, mongoUri } = require('./config')
require('dotenv').config();

const connectDB = async() => {
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	}catch(error){
		console.log(error);
		process.exit(1)
	}
}

module.exports = connectDB*/