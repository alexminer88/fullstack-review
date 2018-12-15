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
    numForks: Number,
    created_at: String,
    updated_at: String

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // iterate through repos (array and add each to MongoDB)
  // will grab ony pertaining data and 
  // repos.forEach(repo => {
  // 	// each repo will have attributes that we will add based on the schema
  // 	//do I want to be usign repoSchema.set()?
  // 	//maybe .create or .insertMany
  // 	// repoSchema.post('save', function(doc) {
  // 	// 	console.log('the ', repo, ' has been saved!');
  // 	// })
  // });
  repos.forEach(repoData => {
    let repo = new Repo(repoData);
    repo.save(err => {
      if (err) {
        console.log(err);
      }
    });
  });
  // Repo.save()
  // Repo.insertMany(repos, function(error, docs) {

  // });


}

module.exports.save = save;