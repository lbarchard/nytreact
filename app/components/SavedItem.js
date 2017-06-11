var React = require("react");
var ReactDOM = require("react-dom")

var SavedItem = React.createClass({

	getInitialState: function() {
		return {};
	},

	render: function() {
		return (
			<li className="list-group-item">
				<div className="text-center">{this.props.savedArticle.date}</div>
				<a href={this.props.savedArticle.web_url}>{this.props.savedArticle.title}</a>		
				<span type="button" className="pull-right btn btn-primary btn-xs">Remove</span>
				<br></br><br></br>
				<input type="text" className="form-control" placeholder="Put notes here"></input>
			</li>
		);
	}
});

module.exports = SavedItem;
