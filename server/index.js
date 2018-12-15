const express = require('express');
let app = express();
const save = require('./../database/index.js')
// const save = require('../database/index.js');

const getReposByUsername = require('./../helpers/github.js')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 



app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // console.log(req.body);
  // console.log('body is ', req.body);
  var username = req.body.username;
  console.log(username);
  getReposByUsername(username);
  // This route should take the github username provided
  // console.log('I see your post request coming in!');
  res.send('POST request sent to /repos');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

