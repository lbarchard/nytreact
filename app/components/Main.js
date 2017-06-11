// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");



var Main = React.createClass({

  getInitialState: function() {
    return {
			topic: "",
			start: "",
			end: "",
			articles: []
    };
  },

  setArticles: function (newArticles) {
    this.setState({articles: newArticles})
  },

	search: function (topic, start, end) {
    if (topic === '' || start === '' || end === '') {
      this.setState({articles: []})
    }
    else {
      var start = start.replace("-", "").replace("-", "");
      var end   = end.replace("-", "").replace("-", "");
      axios.get('/articles/' + topic + '/' + start + '/' + end)
      .then(function (response) {
        this.setState({articles: response.data})
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        this.setState({articles: []})
      });
    }
  },

  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="jumbotron">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and annotate articles of interest</p>
          </div>
          <Search search={this.search} topic={this.state.topic} start={this.state.start} end={this.state.end}/>
          <Results articles={this.state.articles}/>
          <Saved/>
        </div>
      </div>
    )}
});

module.exports = Main;
