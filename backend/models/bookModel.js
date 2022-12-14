const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	selfLink: {type: String},
	volumeInfo: {},
	layerInfo: {},
	saleInfo: {},
	accessInfo: {}

},
{
	timestamps: true	
}
)

module.exports = mongoose.model('Book', bookSchema)