// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");



// This is the main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {

    return {

    };
  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="jumbotron">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and annotate articles of interest</p>
          </div>
          <Search/>
          <Results/>
          <Saved/>
        </div>
      </div>
    )}
});

// Export the component back for use in other files
module.exports = Main;
