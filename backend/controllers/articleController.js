const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Article = require('../models/articleModel');

// @desc Get article
// @route  GET /api/article/:id
// @access Private
const getArticle = asyncHandler(async (req, res) => {

	const article = await Article.find({id: req.params.id});

	if(!article){
		res.status(400)
		throw new Error('Article not found')
	}
	
	res.status(200).json(article)

})

// @desc Get articles
// @route  GET /api/article
// @access Private
const getArticles = asyncHandler(async (req, res) => {
	const articles = await Article.find({country: req.params.country});
	res.status(200).json(articles)
})

// @desc Set article
// @route  POST /api/article
// @access Private
const setArticle = asyncHandler(async (req, res) => {

	let j = 0;

	setInterval(function(){ 

  const country = country_list[j].toLowerCase();

  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&api-key=AEx1aQzAkBudyq3qGIH76OMG0Yt10suE`;

	const sendGetRequest = async () => {
	    try {
		      const response = await axios.get(url);
		      //res.status(200);
		      for(let i = 0; i < response.data.response.docs.length; i++){
						try{
						const article = await Article.create({
							"country": country,
							"id": country + i,
							"abstract": response.data.response.docs[i].abstract, 
							"web_url": response.data.response.docs[i].web_url,
							"snippet": response.data.response.docs[i].snippet,
							"lead_paragraph": response.data.response.docs[i].lead_paragraph,
							"source": response.data.response.docs[i].source,
							"pub_date": response.data.response.docs[i].pub_date,
							"document_type": response.data.response.docs[i].document_type,
							"type_of_material": response.data.response.docs[i].type_of_material,
							"headline": {
								"main": response.data.response.docs[i].headline.main,
							},
							"multimedia": {
								"url": response.data.response.docs[i].multimedia.url,
								"pub_date": response.data.response.docs[i].multimedia.pub_date,
							"byline": {
								"original": response.data.response.docs[i].byline.original,
								"organization": response.data.response.docs[i].byline.organization,
							},
						},

						})

						res.status(200).json(article);
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


	if(j < country_list.length){
		j++;
	}


}, 7000);




})

// @desc Update article
// @route  PUT /api/article
// @access Private
const updateArticle = asyncHandler(async (req, res) => {
	const article = await Article.findById(req.params.id)

	if(!article){
		res.status(400)
		throw new Error('Article not found')
	}

	const updatedArticle = await Article.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedArticle)
})

// @desc Delete articles
// @route  DELETE /api/articles
// @access Private
const deleteArticle = asyncHandler(async (req, res) => {
	const article = await Article.findById(req.params.id)

	if(!article){
		res.status(400)
		throw new Error('Article not found')
	}

	await article.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getArticle,
	getArticles,
	setArticle,
	updateArticle,
	deleteArticle
}