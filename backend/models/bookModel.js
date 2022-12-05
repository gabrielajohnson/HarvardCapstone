const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	selfLink: {type: String},
	volumeInfo: {},
	layerInfo: {},
	saleInfo: {},
	accessInfo: {}
	/*volumeInfo: {
		title: {type: String},
		subtitle: {type: String},
		authors: [{type:[String]}],
		publisher: {type: String},
		publishedDate: {type: String},
		description: {type: String},
		pageCount: {type: String},
		imageLinks: {}, 
		language: {type: String},
		previewLink: {type: String},
		infoLink: {type: String},
		canonicalVolumeLink: {type: String},
	},
	saleInfo: {
		listPrice: {},
		retailPrice: {},
		buyLink: {type: String},
	},
	accessInfo: {
		pdf: {
			isAvailable: {type: String},
			ascTokenLink: {type: String},
		},
	}*/
},
{
	timestamps: true	
}
)

module.exports = mongoose.model('Book', bookSchema)