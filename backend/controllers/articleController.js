const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Article = require('../models/articleModel');

//var country_list_media = ["Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

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

  const country = country_list_media[j].toLowerCase();

  //let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&api-key=AEx1aQzAkBudyq3qGIH76OMG0Yt10suE`;
	let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&sort=newest&api-key=AEx1aQzAkBudyq3qGIH76OMG0Yt10suE`;

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


	if(j < country_list_media.length){
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