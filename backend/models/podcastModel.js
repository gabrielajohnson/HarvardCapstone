const mongoose = require('mongoose')

const podcastSchema = mongoose.Schema({
	country: {type: String},
	id: {type: String},
	audio: {type: String},
	audio_length_sec: {type: String},
	description_highlighted: {type: String},
	description_original: {type: String},
	title_original: {type: String},
	title_highlighted: {type: String},
	image: {type: String},
	thumbnail: {type: String},
	itunes_id: {type: String},
	listennotes_url: {type: String},
	explicit_content: {type: String},
	link: {type: String},
	podcast: {
		listennotes_url: {type: String},
		id: {type: String},
		title_highlighted: {type: String},
		title_original: {type: String}, 
		publisher_original: {type: String},
		image: {type: String},
		thumbnail: {type: String},
		genre_ids: {},
	}
},
{
	timestamps: true	
}
)

module.exports = mongoose.model('Podcast', podcastSchema)