const asyncHandler = require('express-async-handler')
const axios = require('axios');
const Podcast = require('../models/podcastModel')
const { Client } = require('podcast-api');

var country_list_media = ["North Macedonia","Palau","Saint kitts and nevis","Saint lucia","Saint vincent and the grenadines","Sao tome and principe","Solomon islands","Somalia","South sudan","Trinidad and tobago","Tuvalu","Vanuatu"];


// @desc Get podcast
// @route  GET /api/podcast/:id
// @access Private
const getPodcast = asyncHandler(async (req, res) => {

	const podcast = await Podcast.find({id: req.params.id});

	if(!podcast){
		res.status(400)
		throw new Error('Podcast not found')
	}
	
	res.status(200).json(podcast)

})

// @desc Get podcasts
// @route  GET /api/podcasts
// @access Private
const getPodcasts = asyncHandler(async (req, res) => {
	const podcasts = await Podcast.find({country: req.params.country});
	res.status(200).json(podcasts)
})

// @desc Set podcast
// @route  POST /api/podcast
// @access Private
const setPodcast = asyncHandler(async (req, res) => {

	let j = 0;

	setInterval(function(){ 

  	const country = country_list_media[j].toLowerCase();

	const sendGetRequest = async () => {
	    try {

			    const client = Client({ apiKey: '04cf4adce49d41c8ac3a50bebebfb2d6' });
			    
			    const response = await client.search({
			        q: country,
			        sort_by_date: 0,
			        type: 'episode',
			        offset: 0,
			        len_min: 10,
			        len_max: 60,
			        genre_ids: '125,99,111',
			        published_before: 1669834808000,
			        published_after: 0,
			        only_in: 'title,description',
			        language: 'English',
			        safe_mode: 0,
			    });
			    
			    // Get response json data here
			    for(let i = 0; i < response.data.count; i++){
			      try{
							const podcast = await Podcast.create({
									"country": country,
									"id": response.data.results[i].id, 
									"audio": response.data.results[i].audio,
									"audio_length_sec": response.data.results[i].audio_length_sec,
									"description_highlighted": response.data.results[i].description_highlighted,
									"description_original": response.data.results[i].description_original,
									"title_original": response.data.results[i].title_original,
									"title_highlighted": response.data.results[i].title_highlighted,
									"image": response.data.results[i].image,
									"thumbnail": response.data.results[i].thumbnail,
									"itunes_id": response.data.results[i].itunes_id,
									"listennotes_url": response.data.results[i].listennotes_url,
									"explicit_content": response.data.results[i].explicit_content,
									"link": response.data.results[i].link,
									"podcast": {
										"listennotes_url": response.data.results[i].podcast.listennotes_url,
										"id": response.data.results[i].podcast.id,
										"title_highlighted": response.data.results[i].podcast.title_highlighted,
										"title_original": response.data.results[i].podcast.title_original, 
										"publisher_original": response.data.results[i].podcast.publisher_original,
										"image": response.data.results[i].podcast.image,
										"thumbnail": response.data.results[i].podcast.thumbnail,
										"genre_ids": response.data.results[i].podcast.genre_ids,
									}

							})

							res.json(podcast);
						}catch (err) {
	        			// Handle Error Here
	        			console.error(err);
	    			}
					}
		
			  }catch(err){
					console.error(err);
				}
		};

	sendGetRequest();

	if(j < country_list_media.length){
		j++;
	}


	}, 7000);

})

// @desc Update podcast
// @route  PUT /api/podcast
// @access Private
const updatePodcast = asyncHandler(async (req, res) => {
	const podcast = await Podcast.findById(req.params.id)

	if(!podcast){
		res.status(400)
		throw new Error('Podcast not found')
	}

	const updatedPodcast = await Podcast.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedPodcast)
})

// @desc Delete podcats
// @route  DELETE /api/podcats
// @access Private
const deletePodcast = asyncHandler(async (req, res) => {
	const podcast = await Podcast.findById(req.params.id)

	if(!podcast){
		res.status(400)
		throw new Error('Podcast not found')
	}

	await podcast.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getPodcast,
	getPodcasts,
	setPodcast,
	updatePodcast,
	deletePodcast
}