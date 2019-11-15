// global constants
const PF_SECRET = process.env.PETFINDER_SECRET; // accesses private  secret stored in .env
const API_KEY = 0;
const url_pf_token = "https://api.petfinder.com/v2/oauth2/token";
const fetchData = {
  body:
    "grant_type=client_credentials&client_id=0EBsN031vTpUn1di9xmAaC6hcwKG240nF9pjsjzhWltS5n6G5Y&client_secret=byfiAB89P7ViF85t5rlmRnHsWDhDDF6pmjsrBeEI",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
};

const url_pf_breeds = "https://api.petfinder.com/v2/types/dog/breeds";

/* headers: {
      Authorization: "Bearer " + accessToken
    }*/

const express = require("express");
const fetch = require("node-fetch");
const app = express();

var accessToken;

// tells server to access static pages in public folder
app.use(express.static("public"));

// tell server to listen for requests
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

// Handle requests for the data
// http://expressjs.com/en/starter/basic-routing.html
app.get("/breeds/", getAccessToken);
app.get("/breeds", getAccessToken);
 
function getAccessToken(req, resp) {
  fetch(url_pf_token, fetchData)
    .then(fresp => fresp.json()) 
    .then(function(data) {
       return getDogBreeds(data.access_token);
    })
  .then(data => resp.json(data))
  .catch(err => {
      console.error(" Pet Finder API Error:", err.message);
      resp.send("Pet Finder api error");
    });
}

function getDogBreeds(accessToken) {
  return fetch("https://api.petfinder.com/v2/types/dog/breeds", {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  }).then(fresp => fresp.json())
    .catch(function(error) {
     console.log("Error with Pet Finder Dog Breeds: " + error);
    });
  
  
  //.then(function(data){console.log(data); return data;})
   // .then(fresp => fresp.json())
  //.then(function(data){console.log("------------");console.log(data);console.log("------------");return data;})
  //  .catch(function(error) {
  //    console.log("Error with Pet Finder Dog Breeds: " + error);
  //  });
}
