const asyncHandler = require('express-async-handler')
const axios = require('axios');

const Test = require('../models/testModel')
// @desc Get test
// @route  GET /api/test
// @access Private
const getTests = asyncHandler(async (req, res) => {
	console.log("Get");
	const test = await Test.find()
	res.status(200).json(test)
})

// @desc Set test
// @route  POST /api/test
// @access Private
const setTest = asyncHandler(async (req, res) => {

  const country = 'germany';
  let url = `https://www.googleapis.com/books/v1/volumes?q=${country}`;

	const sendGetRequest = async () => {
	    try {
		      const response = await axios.get(url);
		      //res.status(200);
		      for(let i = 0; i < response.data.items.length; i++){
						try{
						const test = await Test.create({
							"country": country,
							"id": response.data.items[i].id, 
							"selfLink": response.data.items[i].selfLink, 
							"previewLink": response.data.items[i].previewLink,
							"volumeInfo": {
								"title": response.data.items[i].volumeInfo.title,
								"subtitle": response.data.items[i].volumeInfo.subtitle,
								"authors": response.data.items[i].volumeInfo.authors,
								"publisher": response.data.items[i].volumeInfo.publisher,
								"publishedDate": response.data.items[i].volumeInfo.publishedDate,
								"description": response.data.items[i].volumeInfo.description,
								"pageCount": response.data.items[i].volumeInfo.pageCount,
								"imageLinks": {
									"thumbnail": response.data.items[i].volumeInfo.imageLinks.thumbnail,
								} 
							},
							"saleInfo": {
								"listPrice": response.data.items[i].saleInfo.listPrice,
								"retailPrice": response.data.items[i].saleInfo.retailPrice,
								"buyLink": response.data.items[i].saleInfo.buyLink,
							},
							"accessInfo": {
								"pdf": {
									"isAvailable": response.data.items[i].accessInfo.pdf.isAvailable,
									"ascTokenLink": response.data.items[i].accessInfo.pdf.ascTokenLink,
								},
							}
						})

						console.log("New ", i);
						res.status(200).json(test);
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

// @desc Update test
// @route  PUT /api/test
// @access Private
const updateTest = asyncHandler(async (req, res) => {
	const test = await Test.findById(req.params.id)

	if(!test){
		res.status(400)
		throw new Error('Test not found')
	}

	const updatedTest = await Test.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedTest)
})

// @desc Delete tests
// @route  DELETE /api/tests
// @access Private
const deleteTest = asyncHandler(async (req, res) => {
	const test = await Test.findById(req.params.id)

	if(!test){
		res.status(400)
		throw new Error('Test not found')
	}

	await test.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getTests,
	setTest,
	updateTest,
	deleteTest
}