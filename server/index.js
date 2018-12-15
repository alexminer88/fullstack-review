const express = require('express');
let app = express();
// const save = require('../database/index.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // console.log(req.body);
  console.log(req);
  // This route should take the github username provided
  console.log('I see your post request coming in!');
  res.send('POST request sent to /repos');
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

