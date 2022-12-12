const asyncHandler = require('express-async-handler');
const axios = require('axios');

//var country_list_media = ["Eswatini"];

const Movie = require('../models/movieModel');

var country_list_media = ["Antigua and barbuda", 
"Bosnia and herzegovina",
"Central african republic",
"Democratic republic of the congo",
"Equatorial guinea",
"Eswatini",
"Holy See",
"Lesotho",
"North macedonia",
"Saint kitts and nevis",
"Saint lucia",
"Saint vincent and the grenadines",
"Sao tome and principe",
"United arab emirates"];

//var country_list_media = var country_list_media = ["Antigua and Barbuda","Bosnia and Herzegovina","Côte d'Ivoire","Cabo Verde","Canada","Central African Republic","Comoros","Czechia","Democratic Republic of the Congo","Eritrea","Eswatini","Guinea-Bissau","Holy See","Kiribati","Kyrgyzstan","Marshall Islands","Micronesia","Myanmar","Nauru","North Korea","North Macedonia","Palau","Palestine State","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Sao Tome and Principe","Solomon Islands","Somalia","South Sudan","Timor-Leste","Trinidad and Tobago","Tuvalu","United States of America","Vanuatu"];
//var country_list_media = ["Equatorial Guinea","Lesotho","United Arab Emirates","Antigua and Barbuda","Bosnia and Herzegovina","Côte d'Ivoire","Cabo Verde","Canada","Central African Republic","Comoros","Czechia","Democratic Republic of the Congo","Eritrea","Eswatini","Guinea-Bissau","Holy See","Kiribati","Kyrgyzstan","Marshall Islands","Micronesia","Myanmar","Nauru","North Korea","North Macedonia","Palau","Palestine State","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Sao Tome and Principe","Solomon Islands","Somalia","South Sudan","Timor-Leste","Trinidad and Tobago","Tuvalu","United States of America","Vanuatu"];



//var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// @desc Get movie
// @route  GET /api/movie
// @access Private
const getMovie = asyncHandler(async (req, res) => {

	const movie = await Movie.find({id: req.params.id});

	if(!movie){
		res.status(400)
		throw new Error('Movie not found')
	}
	
	res.status(200).json(movie)

})

// @desc Get movies
// @route  GET /api/movies
// @access Private
const getMovies = asyncHandler(async (req, res) => {
	const movies = await Movie.find({country: req.params.country});
	res.status(200).json(movies)
})

// @desc Set movie
// @route  POST /api/movie
// @access Private
const setMovie = asyncHandler(async (req, res) => {

	let j = 0;

	setInterval(function(){ 
		let country = country_list_media[j];
		country = country.toLowerCase();
		console.log(country);
		
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

		if(j < country_list_media.length){
			j++;
		}


	}, 7000);

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
	getMovie,
	getMovies,
	setMovie,
	updateMovie,
	deleteMovie
}