var axios = require("axios");

var config = {
  method: "get",
  url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
  headers: {
    "x-rapidapi-key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com/v3/",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
