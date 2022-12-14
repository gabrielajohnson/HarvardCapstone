const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	abstract: {type: String}, 
	web_url: {type: String},
	snippet: {type: String},
	lead_paragraph: {type: String},
	source: {type: String},
	pub_date: {type: String},
	document_type: {type: String},
	type_of_material: {type: String},
	headline: {
		main: {type: String},
	},
	multimedia: {},
	byline: {}
},
{
	timestamps: true	
}
)


module.exports = mongoose.model('Article', articleSchema)