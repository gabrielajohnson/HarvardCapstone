const asyncHandler = require('express-async-handler')
const axios = require('axios');

var country_list_media = ["Timor"];


const Book = require('../models/bookModel');

// @desc Get book
// @route  GET /api/book/:id
// @access Private
const getBook = asyncHandler(async (req, res) => {

	const book = await Book.find({id: req.params.id});

	if(!book){
		res.status(400)
		throw new Error('Book not found')
	}
	
	res.status(200).json(book)

})

// @desc Get book
// @route  GET /api/book
// @access Private
const getBooks = asyncHandler(async (req, res) => {
	const books = await Book.find({country: req.params.country});
	res.status(200).json(books)
})

// @desc Set book
// @route  POST /api/book
// @access Private
const setBook = asyncHandler(async (req, res) => {

  let j = 0;

  setInterval(function(){ 

  const country = country_list_media[j].toLowerCase();

  let url = `https://www.googleapis.com/books/v1/volumes?q=${country}`;

	const sendGetRequest = async () => {
	    try {
		      const response = await axios.get(url);
		      //res.status(200);
		      for(let i = 0; i < response.data.items.length; i++){
						try{
						const book = await Book.create({
							"country": country,
							"id": response.data.items[i].id, 
							"selfLink": response.data.items[i].selfLink, 
							"volumeInfo": response.data.items[i].volumeInfo,
							"layerInfo": response.data.items[i].layerInfo,
							"saleInfo": response.data.items[i].saleInfo,
							"accessInfo": response.data.items[i].accessInfo,
						})

						res.status(200).json(book);
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

// @desc Update book
// @route  PUT /api/book
// @access Private
const updateBook = asyncHandler(async (req, res) => {
	const book = await Book.findById(req.params.id)

	if(!book){
		res.status(400)
		throw new Error('Book not found')
	}

	const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedBook)
})

// @desc Delete books
// @route  DELETE /api/books
// @access Private
const deleteBook = asyncHandler(async (req, res) => {
	const book = await Book.findById(req.params.id)

	if(!book){
		res.status(400)
		throw new Error('Book not found')
	}

	await book.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getBook,
	getBooks,
	setBook,
	updateBook,
	deleteBook
}