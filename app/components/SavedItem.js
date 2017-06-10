// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// This is the main component
var SavedItem = React.createClass({

  // Here we set a generic state associated with the number of clicks
	getInitialState: function() {
		return {};
	},

	// Here we describe our component's render method
	render: function() {
		return (
			<li className="list-group-item">
				<div className="text-center">Date Saved: 2017/07/12</div>
				<a href="https://www.w3schools.com">Man lands on the moon</a>		
				<span type="button" className="pull-right btn btn-primary btn-xs">Remove</span>
				<br></br><br></br>
				<input type="text" className="form-control" placeholder="Put notes here"></input>
			</li>
		);
	}
});

// Export the component back for use in other files
module.exports = SavedItem;
