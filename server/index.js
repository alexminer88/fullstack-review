const express = require('express');
let app = express();
let {getTop25, save} = require('../database/index.js');
// const save = require('../database/index.js');

let {getReposByUsername} = require('../helpers/github.js'); // destructuring object to get access to function

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 



app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // console.log(req.body);
  // console.log('body is ', req.body);
  var username = req.body.username;

  var callback = function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log('hello from the callback of github api request');
      var info = JSON.parse(body);
      save(info);
      // response.sendStatus(201);
      console.log(info);
    }
  }

  getReposByUsername(username, callback);
  // This route should take the github username provided
  // console.log('I see your post request coming in!');
  res.send('POST request sent to /repos');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // FIrst I will just post all repos
  // maybe it will just be a bunch of repo links
  console.log('This is a console.log statement from within the GET /repos')
  getTop25();
  res.send('Hello from the get request!');
  // var data = getTop25();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

