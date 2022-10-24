const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	selfLink: {type: String},
	previewLink: {type: String},
	volumeInfo: {
		title: {type: String},
		subtitle: {type: String},
		authors: [{type:[String]}],
		publisher: {type: String},
		publishedDate: {type: String},
		description: {type: String},
		pageCount: {type: String},
		imageLinks: {
			thumbnail: {type: String}
		} 
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
	}
},
{
	timestamps: true	
}
)

module.exports = mongoose.model('Test', testSchema)