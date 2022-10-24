const mongoose = require('mongoose')

const podcastSchema = mongoose.Schema({
   country: {type: String},
   id: {type: Number},
   adult:{type: Boolean},
   backdrop_path: {type: String},
   genre_ids: {},
   original_language: {type: String},
   original_title: {type: String},
   overview: {type: String},
   popularity: {type: Double},
   poster_path: {type: String},
   release_date: {type: String},
   title: {type: String},
   video: {type: Number},
   vote_average: {type: Double},
   vote_count: {type: Number}

},   
{
   timestamps: true  
}
)

module.exports = mongoose.model('Podcast', podcastSchema)