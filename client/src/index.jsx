import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // use ajax instead of axios, it might be more, but d/w
    // var data = {username: term};
    // var data = 'test';
    // var success = function() {
    //   console.log('Success!');
    //   // I might have to implement a refresh page here later.
    // };
    // $.ajax({
    //   type: "POST",
    //   url: '/repos/',
    //   data: data,
    //   success: success,
    //   // dataType: 'application/json',
    //   contentType: 'application/json'
    // });
    axios.post('/repos',
      {username: term}
    )
    .then(function(res){
      console.log(res);
    })
    .catch(function(error) {
      console.log(error);
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));