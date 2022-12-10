const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Encyclopedia = require('../models/encyclopediaModel');


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

  /*for(let j = 0; j < country_list.length; j++){
    console.log("{");

    console.log("articleId: " + country_list[j].articleId);
    console.log("articleTypeId: " + country_list[j].articleTypeId);
    console.log("title: " + country_list[j].title);
    console.log("lastUpdated: " + country_list[j].lastUpdated);

    console.log("}");
  }*/


  let j = 0;

  setInterval(function(){ 

  const country = country_list[j].title.toLowerCase();
  const pageId = country_list[j].articleId;

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
      "https://syndication.api.eb.com/production/article/" + pageId + "/xml",
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

          // Extract ID
          const paragraph = data.request.path;
          const regex = /[\d]+/g;
          const foundId = paragraph.match(regex);
          //console.log(foundId[0]);

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
    
            //res.send(data.data);
                //console.log(xml);
          }).catch(error => {
            console.log(error);
          });
        }


        getData();

      if(j < country_list.length){
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