var React = require("react");
var ReactDOM = require("react-dom")

var SavedItem = React.createClass({

	getInitialState: function() {
		return {};
	},

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

module.exports = SavedItem;
