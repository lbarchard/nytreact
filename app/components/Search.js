// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var Query = require("./Query");
var Results = require("./Results");

// This is the main component
var Search = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<div>Hello I am Search
				<div id="query">
					<Query/>
					<Results/>
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Search;
