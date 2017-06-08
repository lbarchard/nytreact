// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var Saved = require("./Saved");
var Search = require("./Search");

// This is the main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {

    return {
      viewLabel: "View Saved",
      viewSaved: true,
      scrapedArticles: []
    };
  },

  // Here we describe our component's render method
  render: function() {
    return (
      <div>Hello I am main
        <div id="grid">
          <Saved/>
          <Search/>
        </div>
      </div>
    )}
});

// Export the component back for use in other files
module.exports = Main;
