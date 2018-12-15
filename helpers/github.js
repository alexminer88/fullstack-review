const request = require('request');
const config = require('../config.js');
// let {save} = require('../database/index.js');

let getReposByUsername = (username, callback) => {

  console.log('Hello from within repos by username');
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

  request(options, callback);

}

module.exports.getReposByUsername = getReposByUsername;