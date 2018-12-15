const request = require('request');
const config = require('../config.js');
let save = require('../database/index.js');

let getReposByUsername = (username) => {
  // console.log('this is from within the github api request! ', username);
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    // url: `/users/${username}/repos`,
    // url: `${username}?tab=repositories`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  var callback = function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('hello from the callback of github api request');
      var info = JSON.parse(body);
      save(info);
      res.sendStatus(201);
      console.log(info);
    }
  }

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;