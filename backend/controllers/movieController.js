const asyncHandler = require('express-async-handler')
const axios = require('axios');

const Movie = require('../models/movieModel')
// @desc Get movie
// @route  GET /api/movie
// @access Private
const getMovies = asyncHandler(async (req, res) => {
	console.log("Get");
	const movie = await Movie.find()
	res.status(200).json(movie)
})

// @desc Set movie
// @route  POST /api/movie
// @access Private
const setMovie = asyncHandler(async (req, res) => {

  const country = 'germany';
  let url = `https://api.themoviedb.org/3/search/movie?api_key=9794010689a269a9e8fbf803886678ff&language=en-US&query=${country}&page=1&include_adult=false`;

	const sendGetRequest = async () => {
	    try {
		      const response = await axios.get(url);
		      //res.status(200);
		      for(let i = 0; i < response.data.results.length; i++){
						try{
						const movie = await Movie.create({
		   					country: country,
   							id: response.data.results[i].id,
  							adult: response.data.results[i].adult,
  			 				backdrop_path: response.data.results[i].backdrop_path,
   							genre_ids: response.data.results[i].genre_ids,
  							original_language: response.data.results[i].original_language,
   							original_title: response.data.results[i].original_title,
   							overview: response.data.results[i].overview,
   							popularity: response.data.results[i].popularity,
   							poster_path: response.data.results[i].poster_path,
   							release_date: response.data.results[i].release_date,
   							title: response.data.results[i].title,
   							video: response.data.results[i].video,
   							vote_average: response.data.results[i].vote_average,
   							vote_count: response.data.results[i].vote_count

						})

						res.status(200).json(movie);
					}catch(err){
						console.error(err);
					}
				}


	    } catch (err) {
	        // Handle Error Here
	        console.error(err);
	    }
	};

	sendGetRequest();


})

// @desc Update movie
// @route  PUT /api/movie
// @access Private
const updateMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id)

	if(!movie){
		res.status(400)
		throw new Error('Movie not found')
	}

	const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedMovie)
})

// @desc Delete movies
// @route  DELETE /api/movies
// @access Private
const deleteMovie = asyncHandler(async (req, res) => {
	const movie = await Movie.findById(req.params.id)

	if(!movie){
		res.status(400)
		throw new Error('Movie not found')
	}

	await movie.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getMovies,
	setMovie,
	updateMovie,
	deleteMovie
}