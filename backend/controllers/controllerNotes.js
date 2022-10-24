//users.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
//const multer = require('multer');
const mediaController = require('../../controllers/mediaController');
/*const upload = multer({
  storage: photoController.storage,
  fileFilter: photoController.imageFilter
});*/
const MediaService = mediaController.MediaService;
const { Client } = require('podcast-api');
const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");


router.use((req, res, next)=>{
  res.set({
  // allow any domain, allow REST methods we've implemented
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    "Access-Control-Allow-Headers": "Content-Type",
  // Set content-type for all api requests
    'Content-type':'application/json'
  });
  if (req.method == 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});


router.get('/:apiid', (req, res, next)=>{
  console.log(`finding ${req.params.apiid}`);

  if(req.params.apiid == "britannicaB"){
    const getData = async () => {
        // Make HTTP Fetch
        const response = await axios.get(
          "https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=7&lastUpdated=2020-03-20&page=1",
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "2ff132d7-2420-4396-9a84-d6e25018a64d",
            },
          }).then(response => {
              res.status(200);
              res.send(response.data);
              console.log("articles", response.data);
          })
          .catch(error => {
            console.log(error);
          });


          const result = await axios.get(
            "https://syndication.api.eb.com/production/article/204/xml",
              {
                headers: {
                  "Content-Type": "text/xml",
                  "x-api-key": "2ff132d7-2420-4396-9a84-d6e25018a64d",
                },
              })
              .then((data) => {
                //var xml = new XMLParser().parseFromString(data)
                var xml = new XMLParser().parse(data.data);
                //setArticle({ article: xml.children[0] })
                //console.log(xml.children[0]);
                //console.log("data",data.data)
                //console.log(xml);
                res.send(xml);
                //console.log(xml);
              })
              .catch((err) => console.log(err))
        }


        getData();
  }else if(req.params.apiid == "wolframB"){
    let url = "http://api.wolframalpha.com/v2/query?appid=9V5VPR-8QYRTG5TGY&input=germany&output=json";
    axios
    .get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }else if(req.params.apiid == "googleB"){
    let url = "https://www.googleapis.com/books/v1/volumes?q=germany";
    axios
    .get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  }else if(req.params.apiid == "podcastDB"){
    //const { Client } = require('podcast-api');

    const client = Client({ apiKey: '04cf4adce49d41c8ac3a50bebebfb2d6' });
    client.search({
        q: 'germany',
        sort_by_date: 0,
        type: 'episode',
        offset: 0,
        len_min: 10,
        len_max: 30,
        genre_ids: '68,82',
        published_before: 1580172454000,
        published_after: 0,
        only_in: 'title,description',
        language: 'English',
        safe_mode: 0,
    }).then((response) => {
      // Get response json data here
      res.send(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }else if(req.params.apiid == "nyTimes"){
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=germany&api-key=AEx1aQzAkBudyq3qGIH76OMG0Yt10suE";
    axios
    .get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  }else if(req.params.apiid == "movieDB"){
    let url = "https://api.themoviedb.org/3/search/movie?api_key=9794010689a269a9e8fbf803886678ff&language=en-US&query=germany&page=1&include_adult=false"
    .get(url)
    .then(response => {
      res.status(200);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

});


// read
router.post('/', async (req, res, next)=>{
  //let file = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=germany&page=2&api-key=AEx1aQzAkBudyq3qGIH76OMG0Yt10suE";
 
 });
// error
router.use(function(err, req, res, next){
  console.error(err);
  res.status(500);
  res.end();
});

module.exports = router;
