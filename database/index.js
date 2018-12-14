const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); // is this correct?

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // repo schema schould keep track of:
  	// the repo html
  	// the user
  	// the number of forks
  	// "created_at": "2014-03-28T17:55:38Z",
    // "updated_at": "2016-12-06T13:06:37Z",
    // "pushed_at": "2016-10-30T13:43:30Z",
    repoHtml: String,
    user: String,
    numForks: String,
    createdAt: String,
    updatedAt: String

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;