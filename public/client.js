function getDogBreeds() {
  console.log("in client dog breeds"); 
  fetch("/breeds") 
    .then(resp => resp.json()) // Transform the data into json
    .then (data => {
      document.getElementById("content").innerHTML += "<h1>Pet Finder API</h1>";
      document.getElementById("content").innerHTML += data;
      document.getElementById("content").innerHTML += JSON.stringify(data, undefined, 2) + "<br><br>";
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML +=
        "Error with Pet Finder API: " + error;
    });
}

getDogBreeds();

/*

//  Pet Finder
const url_pf_token = "https://api.petfinder.com/v2/oauth2/token";

fetch(url_pf_token, {
  body:
    "grant_type=client_credentials&client_id=0EBsN031vTpUn1di9xmAaC6hcwKG240nF9pjsjzhWltS5n6G5Y&client_secret=byfiAB89P7ViF85t5rlmRnHsWDhDDF6pmjsrBeEI",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    getDogBreeds();
    document.getElementById("content").innerHTML +=
      "<h1>Pet Finder Get Access Token</h1>" +
      JSON.stringify(data, undefined, 2) +
      "<br><br>";
  })
  .catch(function(error) {
    document.getElementById("content").innerHTML +=
      "Error with Pet Finder Get Access Token: " + error;
  });

function getDogBreeds2(accessToken) {
  fetch("https://api.petfinder.com/v2/types/dog/breeds", {
    headers: {
      Authorization: "Bearer " + accessToken
    }
  })
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      document.getElementById("content").innerHTML +=
        "<h1>Pet Finder Dog Breeds</h1>" +
        JSON.stringify(data, undefined, 2) +
        "<br><br>";
    })
    .catch(function(error) {
      document.getElementById("content").innerHTML +=
        "Error with Pet Finder Dog Breeds: " + error;
    });
}*/
