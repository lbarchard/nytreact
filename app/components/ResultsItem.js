// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// This is the main component
var ResultsItem = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<li className="list-group-item">
				<a href="https://www.w3schools.com">Man lands on the moon</a>		
				<span type="button" className="pull-right btn btn-primary btn-xs">Save</span>
			</li>
		);
	}
});

// Export the component back for use in other files
module.exports = ResultsItem;
