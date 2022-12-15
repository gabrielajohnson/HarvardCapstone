const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Encyclopedia = require('../models/encyclopediaModel');


var country_list_media = [

        {
            "articleId": 368333,
            "articleTypeId": 45,
            "title": "Côte dIvoire",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 361394,
            "articleTypeId": 45,
            "title": "Republic of the Congo",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 362142,
            "articleTypeId": 45,
            "title": "Czech Republic",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 365197,
            "articleTypeId": 45,
            "title": "The Gambia",
            "lastUpdated": "2021-08-04"
        },
        
        {
            "articleId": 381820,
            "articleTypeId": 45,
            "title": "Vatican City",
            "lastUpdated": "2021-08-04"
        },
        {
            "articleId": 372075,
            "articleTypeId": 45,
            "title": "Federated States of Micronesia",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 372993,
            "articleTypeId": 45,
            "title": "Namibia",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 373136,
            "articleTypeId": 45,
            "title": "Nauru",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 373238,
            "articleTypeId": 45,
            "title": "Nepal",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 374416,
            "articleTypeId": 45,
            "title": "Palestine",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 380794,
            "articleTypeId": 45,
            "title": "Timor",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 381542,
            "articleTypeId": 45,
            "title": "United Kingdom of Great Britain and Northern Ireland",
            "lastUpdated": "2021-08-04"
        },

        {
            "articleId": 381558,
            "articleTypeId": 45,
            "title": "United States",
            "lastUpdated": "2021-08-04"
        }
];



// @desc Get encyclopedia
// @route  GET /api/encyclopedia
// @access Private
const getEncyclopedia = asyncHandler(async (req, res) => {
  const encyclopedia = await Encyclopedia.find({country: req.params.country});

  if(!encyclopedia){
    res.status(400)
    throw new Error('Encyclopedia not found')
  }

  res.status(200).json(encyclopedia)

})


// @desc Set encyclopedia
// @route  POST /api/encyclopedia
// @access Private
const setEncyclopedia = asyncHandler(async (req, res) => {



  let j = 0;

  setInterval(function(){ 

  const country = country_list_media[j].title.toLowerCase();
  const pageId = country_list_media[j].articleId;

  const getData = async () => {
    
    // Make HTTP Fetch
    const response = await axios.get(
      // Main API "https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=7&lastUpdated=1990-03-20&page=1",
      "https://syndication.api.eb.com/production/articles?articleTypeId=45&categoryId=7&lastUpdated=1990-03-20&page=1",
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "d2844c5b-f96e-407a-a8ad-7d2a4d933cc1"
        },
      }).then(response => {
        res.status(200);
      })
      .catch(error => {
        console.log(error);
      });


    const result = await axios.get(
      "https://syndication.api.eb.com/production/article/" + pageId + "/xml",
      {
        headers: {
          "Content-Type": "text/xml",
          "x-api-key": "d2844c5b-f96e-407a-a8ad-7d2a4d933cc1"
        },
      })
      .then((data) => {

          // Extract ID
          const paragraph = data.request.path;
          const regex = /[\d]+/g;
          const foundId = paragraph.match(regex);

          try{
            const encyclopedia = Encyclopedia.create({
              country: country,
              id: pageId,
              url: data.request.path,
              overview: data.data
          })
            res.status(200).json(encyclopedia);
          
          }catch(err){
            console.error(err);
          }
    
          }).catch(error => {
            console.log(error);
          });
        }


        getData();

      if(j < country_list_media.length){
          j++;
      }


  }, 7000);


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
  getEncyclopedia,
	setEncyclopedia,
	updateEncyclopedia,
	deleteEncyclopedia
}