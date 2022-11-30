const mongoose = require('mongoose')

const encyclopediaSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	url: {type: String},
	overview: {type: String}
},
{
	timestamps: true	
}
)

module.exports = mongoose.model('Encyclopedia', encyclopediaSchema)