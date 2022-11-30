const asyncHandler = require('express-async-handler')
const axios = require('axios');
var country_list = ["Bahrain","Bangladesh","Belarus","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Zambia"];


const Article = require('../models/articleModel')

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