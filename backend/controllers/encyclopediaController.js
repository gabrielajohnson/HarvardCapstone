const asyncHandler = require('express-async-handler')
const axios = require('axios');
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");

const Encyclopedia = require('../models/encyclopediaModel')
// @desc Get encyclopedia
// @route  GET /api/encyclopedia
// @access Private
const getEncyclopedias = asyncHandler(async (req, res) => {
	console.log("Get");
	const encyclopedia = await Encyclopedia.find()
	res.status(200).json(encyclopedia)
})

// @desc Set encyclopedia
// @route  POST /api/encyclopedia
// @access Private
const setEncyclopedia = asyncHandler(async (req, res) => {

  const country = 'germany';

  const getData = async () => {
    // Make HTTP Fetch
    const response = await axios.get(
          // Main API "https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=7&lastUpdated=1990-03-20&page=1",
          //Concise API article id = 45
          "https://syndication.api.eb.com/production/articles?articleTypeId=45&categoryId=7&lastUpdated=1990-03-20&page=1",
          {
            headers: {
              "Content-Type": "application/json",
              //"x-api-key": "2ff132d7-2420-4396-9a84-d6e25018a64d",
              "x-api-key": "d2844c5b-f96e-407a-a8ad-7d2a4d933cc1"
            },
          }).then(response => {
              res.status(200);
              //res.send(response.data);
              //console.log("articles", response.data);
          })
          .catch(error => {
            console.log(error);
          });


          const result = await axios.get(
            "https://syndication.api.eb.com/production/article/354677/xml",
              {
                headers: {
                  "Content-Type": "text/xml",
                  //"x-api-key": "2ff132d7-2420-4396-9a84-d6e25018a64d",
                  "x-api-key": "d2844c5b-f96e-407a-a8ad-7d2a4d933cc1"
                },
              })
              .then((data) => {
              	//console.log(data);
                //var xml = new XMLParser().parseFromString(data)
                
                //var xml = new XMLParser().parse(data.data);
                
                //setArticle({ article: xml.children[0] })
                //console.log(xml.children[0]);
                //console.log("data",data.data)
                
                console.log(data.data);
                res.send(data.data);
                //console.log(xml);
              })
              .catch((err) => console.log(err))
        }


        getData();


})

// @desc Update encyclopedia
// @route  PUT /api/encyclopedia
// @access Private
const updateEncyclopedia = asyncHandler(async (req, res) => {
	const encyclopedia = await Encyclopedia.findById(req.params.id)

	if(!encyclopedia){
		res.status(400)
		throw new Error('Encyclopedia not found')
	}

	const updatedEncyclopedia = await Encyclopedia.findByIdAndUpdate(req.params.id,req.body,{
		new: true,
	})

	res.status(200).json(updatedEncyclopedia)
})

// @desc Delete encyclopedia
// @route  DELETE /api/encyclopedias
// @access Private
const deleteEncyclopedia = asyncHandler(async (req, res) => {
	const encyclopedia = await Encyclopedia.findById(req.params.id)

	if(!encyclopedia){
		res.status(400)
		throw new Error('Encyclopedia not found')
	}

	await encyclopedia.remove()

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getEncyclopedias,
	setEncyclopedia,
	updateEncyclopedia,
	deleteEncyclopedia
}