// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// This is the main component
var Saved = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<div>Hello I am Saved</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Saved;
