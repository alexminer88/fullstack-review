const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `${username}?tab=repositories`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  var callback = function (error, response, body) {
    console.log('hello from the callback of github api request');
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
      // console.log(info.stargazers_count + " Stars");
      // console.log(info.forks_count + " Forks");
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;