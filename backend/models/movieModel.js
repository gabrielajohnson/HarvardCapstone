const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
   country: {type: String},
   id: {type: Number},
   adult:{type: Boolean},
   backdrop_path: {type: String},
   genre_ids: {},
   original_language: {type: String},
   original_title: {type: String},
   overview: {type: String},
   popularity: {type: Number},
   poster_path: {type: String},
   release_date: {type: String},
   title: {type: String},
   video: {type: Number},
   vote_average: {type: Number},
   vote_count: {type: Number}

},   
{
   timestamps: true  
}
)

module.exports = mongoose.model('Movie', movieSchema)