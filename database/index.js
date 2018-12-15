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
    id: {type: Number, unique: true},
    name: String,
    full_name: String,
    owner: {
      login: String,
      id: Number,
      html_url: String,
      repos_url: String
    },
    html_url: String,
    description: String,
    created_at: Date,
    updated_at: Date,
    forks: Number

});

// I plan on having another schema of the top25 forked, it will probably look exactly the same as the structure of this schema,
// but might have a cap on number of rows?
//

let Repo = mongoose.model('Repo', repoSchema);

let getTop25 = function() {
  // currently a find({}) to get everything and then we will sort on the server? by fork number
  console.log('trying to actually get data from mongodb!!!!');


}

let save = (repos) => {
  console.log('getting inside save!!!!!');

  repos.forEach(repoData => {
    let repo = new Repo(repoData);
    repo.save(err => {
      if (err) {
        console.log(err);
      }
    });
  });
  // repo.findOneAndUpdate this gets around having
  // Repo.save()
  // Repo.insertMany(repos, function(error, docs) {

  // });


}

module.exports.getTop25 = getTop25;
module.exports.save = save;